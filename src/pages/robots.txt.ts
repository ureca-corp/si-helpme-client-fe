import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  const robots = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    `Sitemap: ${siteUrl.replace(/\/$/, "")}/sitemap.xml`,
  ].join("\n");

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.write(robots);
  res.end();

  return { props: {} };
};

export default function RobotsTxt() {
  return null;
}


