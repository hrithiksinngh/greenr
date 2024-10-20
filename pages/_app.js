import Head from "next/head";
import Header from "../components/header/header";
import Layout from "../components/layout/layout";
import Script from "next/script";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-N78NPWDKJR" />

      <Script>
        {`
      if (typeof window !== 'undefined') {
        (function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
          var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
          j.async = true;
          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", "GTM-TLR454NK");
      }
      `}
      </Script>
      <Script>
        {` (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3871385,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv='); `}
      </Script>
      <Head>
        <link rel="shortcut icon" href="/greenr_1.png" />
        <title>Greenr | TechnoServe</title>
      </Head>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TLR454NK"
          height="0"
          width="0"
        ></iframe>
      </noscript>
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" />
    </>
  );
}

export default MyApp;
