import { Html,Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      {/* <Head /> */}
      <Head>
      <link rel="icon" href="/logo.png" sizes="20x40"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;800&display=swap" rel="stylesheet"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
