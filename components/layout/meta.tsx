import Head from "next/head";
import type { IMeta } from "src/types/random";

const DOMAIN = "https://dapabe.com.ar";

export default function Meta({
  title = "Dapabe - Para programar tu siguiente proyecto.",
  description = "Daniel P. Becerra, desarrollador de páginas, aplicaciones para web y mobile.",
  image = `${DOMAIN}/api/og`,
}: IMeta) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={image} />
      <meta property="og:logo" content={`${DOMAIN}/logo.png`}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vercel" />
      <meta name="twitter:creator" content="@_danzen" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
