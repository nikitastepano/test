import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="LeeBet - лучший сайт для онлайн-казино" />
        <meta name="keywords" content="казино, онлайн, LeeBet, азартные игры, слоты, рулетка, покер, блэкджек, бонусы, джекпоты, реальные деньги, легальное казино" />
        <meta name="author" content="LeeBet" />
        <meta name="robots" content="index, follow, noarchive" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="LeeBet - Онлайн Казино" />
        <meta property="og:description" content="Присоединяйтесь к лучшему онлайн-казино LeeBet!" />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://www.leebet.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LeeBet" />
        <meta name="twitter:title" content="LeeBet - Онлайн Казино" />
        <meta name="twitter:description" content="Присоединяйтесь к лучшему онлайн-казино LeeBet!" />
        <meta name="twitter:image" content="/path/to/image.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
