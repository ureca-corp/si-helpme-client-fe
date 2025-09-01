import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

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
        <Script
          src="//wcs.naver.net/wcslog.js"
          strategy="beforeInteractive"
        ></Script>
        <Script strategy="lazyOnload" id="naver-wcs-script">
          {`
document.addEventListener('DOMContentLoaded', function() {
  var _nasa={}; //초기화구문
  if (!window.wcs_add.wa) window.wcs_add = { wa: "s_5a3318c599a1"};
  if (!_nasa) var _nasa={};
  if(window.wcs){
        wcs.inflow("xn--hn2bp0nf8g.com");
        wcs_do(_nasa);
        var _nasa={}; //초기화구문
  }
});
}
  `}
        </Script>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
