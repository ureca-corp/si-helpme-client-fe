import "@/shadcn/styles/globals.css";
import "aos/dist/aos.css";

import { useEffect } from "react";
import Head from "next/head";

import AOS from "aos";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { OverlayProvider } from "overlay-kit";
import { NAVER_WCS_ACCOUNT_ID } from "@/apps/ui/lib/naver-wcs";

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
    <OverlayProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </OverlayProvider>
  );
}
