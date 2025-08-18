import "@/shadcn/styles/globals.css";
import "aos/dist/aos.css";
import "reflect-metadata";

import { useEffect } from "react";

import AOS from "aos";
import type { AppProps } from "next/app";

import { NAVER_WCS_ACCOUNT_ID } from "@/apps/ui/lib/naver-wcs";
import {
  type DehydratedState,
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { OverlayProvider } from "overlay-kit";

const qc = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
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
      <QueryClientProvider client={qc}>
        <HydrationBoundary
          state={
            (pageProps as { dehydratedState?: DehydratedState | null })
              .dehydratedState
          }
        >
          <OverlayProvider>
            <Component {...pageProps} />
          </OverlayProvider>
        </HydrationBoundary>
      </QueryClientProvider>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
