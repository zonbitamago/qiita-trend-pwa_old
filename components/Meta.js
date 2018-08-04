import Head from "next/head";
const Meta = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.7.3/antd.css"
        integrity="sha256-kUg05Ut/PtTW3/itkyG7r1FyfmZaOYJdQWiesHzyEWA="
        crossorigin="anonymous"
      />
    </Head>
    <style jsx global>{`
      body {
        width: 100%;
        margin: auto;
        background-color: honeydew;
      }
    `}</style>
  </div>
);

export default Meta;
