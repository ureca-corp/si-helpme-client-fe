import "@/shadcn/styles/globals.css";
import "aos/dist/aos.css";

import { useEffect } from "react";

import AOS from "aos";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { OverlayProvider } from "overlay-kit";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <OverlayProvider>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </OverlayProvider>
  );
}
