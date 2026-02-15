import { Html, Head, Main, NextScript } from "next/document";

// Blocking script to prevent flash of wrong theme
const themeScript = `
  (function() {
    try {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
