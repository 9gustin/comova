import { IconChevronLeft, IconReload } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { type ReactNode, type FC, useState } from "react";

export const Layout: FC<{
  logo?: string;
  title: ReactNode;
  isRefetching?: boolean;
  refetch?: () => Promise<any>;
  children: ReactNode;
}> = ({ logo, title, children, isRefetching, refetch }) => {
  const router = useRouter();

  const [showRefresh, setShowRefresh] = useState(true);

  const handleRefresh = async () => {
    if (!refetch) return;
    setShowRefresh(false);
    await refetch().then(() => {
      setTimeout(() => {
        setShowRefresh(true);
      }, 10000);
    });
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex w-full items-center justify-between gap-2">
        <button className="btn btn-circle btn-sm" onClick={() => router.back()}>
          <IconChevronLeft />
        </button>
        <div className="flex flex-1 gap-4">
          {logo && (
            <img
              src={logo}
              style={{
                height: 40,
                width: "auto",
              }}
            />
          )}
          {typeof title === "string" && (
            <h1 className="card-title gap-4 text-xl">{title}</h1>
          )}
          {typeof title !== "string" && title}
        </div>
      </div>
      {children}
      {refetch && showRefresh && (
        <button
          className="btn btn-circle btn-outline fixed bottom-4 right-4 shadow-md"
          onClick={handleRefresh}
          disabled={isRefetching}
        >
          {isRefetching && <span className="loading loading-spinner"></span>}
          {!isRefetching && <IconReload />}
        </button>
      )}
    </div>
  );
};
