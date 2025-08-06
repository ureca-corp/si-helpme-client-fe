import "@/shadcn/styles/globals.css";
import "aos/dist/aos.css";

import { useEffect } from "react";

import AOS from "aos";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Component {...pageProps} />;
}
