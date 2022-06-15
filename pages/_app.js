import AuthProvider from "contexts/authContext/AuthContext";
import Head from "next/head";
import Script from "next/script";
import StoreProvider from "contexts/store";
//add your own css files here
import "../public/assets/css/style.css";
///The custom app components are always rendered to every page.
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      />

      <StoreProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </StoreProvider>
    </>
  );
}

export default MyApp;
