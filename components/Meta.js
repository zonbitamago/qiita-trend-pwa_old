import Head from "next/head";
import ServiceWorkerRegister from "./ServiceWorkerRegister";

const Meta = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link async rel="stylesheet" href="/_next/static/style.css" />
    </Head>
    <ServiceWorkerRegister />
    <style jsx global>{`
      body {
        width: 100% !important;
        margin: auto !important;
        background-color: honeydew !important;
      }
    `}</style>
  </div>
);

export default Meta;
