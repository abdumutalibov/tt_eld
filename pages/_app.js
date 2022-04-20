import "../styles/globals.css";
import Layout from "./component/Layout";
// import { ThemeProvider } from '@theme-ui/core'
// import theme from 'theme'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
