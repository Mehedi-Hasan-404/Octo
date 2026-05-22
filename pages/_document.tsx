import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Wasmer — Full Stack Engineer & Systems Developer" />
        <meta property="og:title" content="Wasmer — Full Stack Engineer" />
        <meta property="og:description" content="Building at the intersection of systems programming and modern web." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@wasmer" />
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%231A1A18'/%3E%3Ctext x='6' y='24' font-size='20' fill='%23C4500A' font-family='serif'%3EW%3C/text%3E%3C/svg%3E" />
      </Head>
      <body className="noise">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
