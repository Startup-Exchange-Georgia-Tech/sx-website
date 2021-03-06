import Document, {Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
        <Html lang="en">
            <Head>
              <link
                rel="preload"
                href="../public/fonts/DrukWideBold.ttf"
                as="font"
                type="font/ttf"
                crossOrigin="anonymous"
              />
              <link
                rel="preload"
                href="../public/fonts/Monaco.ttf"
                as="font"
                type="font/ttf"
                crossOrigin="anonymous"
              />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
}