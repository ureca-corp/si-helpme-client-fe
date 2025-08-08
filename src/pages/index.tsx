import { LandingPage } from "@/apps/ui/pages/LandingPage";
import Head from "next/head";

export default function Home() {
  // const [emblaRef] = useEmblaCarousel(
  //   {
  //     // loop: true,
  //     // align: "start",
  //     // slidesToScroll: 1,
  //     // containScroll: "trimSnaps",
  //   },
  //   [],
  // );

  // const test = (
  //   <div>
  //     <div className="embla overflow-hidden">
  //       <div className="embla__viewport" ref={emblaRef}>
  //         <div className="embla__container flex gap-4">
  //           {Array.from({ length: 30 }).map((_, index) => (
  //             <div
  //               key={index}
  //               className="h-[400px] w-[400px] min-w-0 flex-[0_0_100%] bg-red-500"
  //             ></div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  // return test;

  const SITE_NAME = "법률사무소 도약";
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const TITLE = "법률사무소 도약 | 공감과 실력으로 함께하는 법률 파트너";
  const DESCRIPTION =
    "법률사무소 도약은 민형사, 기업자문, 가사·상속 등 다양한 분야에서 맞춤형 법률 서비스를 제공합니다. 초기 상담부터 해결까지 신속하고 꼼꼼하게 함께합니다.";
  const OG_IMAGE = `${SITE_URL}/법률사무소로고.png`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    url: SITE_URL,
    image: OG_IMAGE,
    description: DESCRIPTION,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KR',
    },
    sameAs: [
      process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
      process.env.NEXT_PUBLIC_NAVER_PLACE_URL || '',
    ].filter(Boolean),
  } as const;

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="법률사무소, 변호사, 상담, 민사, 형사, 가사, 상속, 기업자문, 도약" />
        <meta name="author" content={SITE_NAME} />
        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:locale" content="ko_KR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Naver/Google Verification (optional) */}
        {process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION && (
          <meta
            name="naver-site-verification"
            content={process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION}
          />
        )}
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
          />
        )}

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <LandingPage />
    </>
  );
}
