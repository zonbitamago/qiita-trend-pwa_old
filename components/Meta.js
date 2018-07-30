import Head from "next/head";
const Meta = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      body {
        width: 100%;
        margin: auto;
      }
    `}</style>
  </div>
);

export default Meta;
