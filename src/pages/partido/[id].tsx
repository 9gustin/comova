import { api } from "@/utils/api";
import { useParams } from "next/navigation";

export default function MatchPage() {
  const params = useParams();
  const {data: matchData} = api.apiFootball.getMatchById.useQuery({matchId: params?.id ? Number(params.id) : 0}, {enabled: !!params?.id});

  if (!params?.id || !matchData) return null;

  return (
    <div>
      <h1>Match Page: {params.id}</h1>
    </div>
  );
}