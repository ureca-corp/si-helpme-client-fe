import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta
          name="naver-site-verification"
          content={process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || ""}
        />
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || ""}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/법률사무소로고.png" />
        <link rel="mask-icon" href="/logo.svg" color="#111827" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        {/* Naver WCS common script */}
        <script
          type="text/javascript"
          src="//wcs.naver.net/wcslog.js"
          async
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
if (!window.wcs_add) window.wcs_add = {};
window.wcs_add["wa"] = "s_5a3318c599a1";
if (!window._nasa) window._nasa = {};
if (window.wcs && typeof wcs_do === 'function') { window.wcs.inflow(); wcs_do(); }
`,
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
