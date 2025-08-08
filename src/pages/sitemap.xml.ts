import type { GetServerSideProps } from "next";

const getBaseUrl = () => (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(/\/$/, "");

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = getBaseUrl();

  const urls = [
    {
      loc: `${baseUrl}/`,
      changefreq: "weekly",
      priority: 1.0,
    },
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (u) =>
          `  <url>\n` +
          `    <loc>${u.loc}</loc>\n` +
          `    <lastmod>${new Date().toISOString()}</lastmod>\n` +
          `    <changefreq>${u.changefreq}</changefreq>\n` +
          `    <priority>${u.priority}</priority>\n` +
          `  </url>`
      )
      .join("\n") +
    `\n</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.write(body);
  res.end();

  return { props: {} };
};

export default function SitemapXml() {
  return null;
}


