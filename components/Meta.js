import Head from "next/head";
import ServiceWorkerRegister from "./ServiceWorkerRegister";

const Meta = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <ServiceWorkerRegister />
    <style jsx global>{`
      body {
        width: 100%;
        margin: auto;
        background-color: #f1ffe1;
      }
    `}</style>
  </div>
);

export default Meta;
