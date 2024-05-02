import { Inter } from "next/font/google";
import { PostHogProvider } from "posthog-js/react";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import posthog from "posthog-js";
import { env } from "@/env";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

if (typeof window !== "undefined") {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug(); // debug mode in development
    },
  });
}

export default api.withTRPC(({ Component, pageProps }) => {
  return (
    <main className={`font-sans ${inter.variable}`}>
      <PostHogProvider client={posthog}>
        <Component {...pageProps} />
      </PostHogProvider>
    </main>
  );
});
