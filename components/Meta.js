import Head from "next/head";
import ServiceWorkerRegister from "./ServiceWorkerRegister";

const Meta = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="Description" content="Qiita trend information." />
      <meta name="theme-color" content="#55c500" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/icon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/icon-16x16.png"
      />
      <link rel="manifest" href="/static/manifest.json" />
      <title>Qiita-Trend-PWA</title>
    </Head>
    <ServiceWorkerRegister />
    <style jsx global>{`
      body {
        width: 100%;
        margin: auto;
        background-color: #f0f0f0;
      }

      .loader {
        font-size: 10px;
        margin: 50px auto;
        text-indent: -9999em;
        width: 11em;
        height: 11em;
        border-radius: 50%;
        background: #15d8ff;
        background: -moz-linear-gradient(
          left,
          #15d8ff 10%,
          rgba(21, 216, 255, 0) 42%
        );
        background: -webkit-linear-gradient(
          left,
          #15d8ff 10%,
          rgba(21, 216, 255, 0) 42%
        );
        background: -o-linear-gradient(
          left,
          #15d8ff 10%,
          rgba(21, 216, 255, 0) 42%
        );
        background: -ms-linear-gradient(
          left,
          #15d8ff 10%,
          rgba(21, 216, 255, 0) 42%
        );
        background: linear-gradient(
          to right,
          #15d8ff 10%,
          rgba(21, 216, 255, 0) 42%
        );
        position: relative;
        -webkit-animation: load3 1.4s infinite linear;
        animation: load3 1.4s infinite linear;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
      }
      .loader:before {
        width: 50%;
        height: 50%;
        background: #15d8ff;
        border-radius: 100% 0 0 0;
        position: absolute;
        top: 0;
        left: 0;
        content: "";
      }
      .loader:after {
        background: #fefcff;
        width: 75%;
        height: 75%;
        border-radius: 50%;
        content: "";
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }
      @-webkit-keyframes load3 {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @keyframes load3 {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

export default Meta;
