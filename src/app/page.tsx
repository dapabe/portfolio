import Head from "next/head";
import Script from "next/script";

import LandingPage from "$components/screens/HomeScreen/LandingPage";

export default function Home() {
  return (
    <>
      <Head>
        <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></Script>
      </Head>
      <LandingPage />
    </>
  );
}
// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       translations: (await import(`@src/assets/locales/${locale}.json`))
//         .default,
//     },
//   };
// }
