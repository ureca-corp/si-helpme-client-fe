import "@/shadcn/styles/globals.css";
import "aos/dist/aos.css";
import "reflect-metadata";

import { useEffect, useState } from "react";

import AOS from "aos";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";

import { NAVER_WCS_ACCOUNT_ID } from "@/apps/ui/lib/naver-wcs";
import {
  type DehydratedState,
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const OverlayProviderClient = dynamic(
  () => import("overlay-kit").then((m) => m.OverlayProvider),
  { ssr: false },
);

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  useEffect(() => {
    AOS.init();
    // Define global NA_CONV for button click conversion (custom001~custom010)
    window.NA_CONV = (type: string) => {
      if (window.wcs) {
        if (!window.wcs_add) window.wcs_add = {};
        window.wcs_add["wa"] = NAVER_WCS_ACCOUNT_ID;
        window.wcs.trans({ type });
      }
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary
          state={
            (pageProps as { dehydratedState?: DehydratedState | null })
              .dehydratedState
          }
        >
          {typeof window !== "undefined" ? (
            <OverlayProviderClient>
              <Component {...pageProps} />
            </OverlayProviderClient>
          ) : (
            <Component {...pageProps} />
          )}
        </HydrationBoundary>
      </QueryClientProvider>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
