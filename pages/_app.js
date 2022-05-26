import "../styles/globals.css";
import Layout from "./component/Layout";
import "bootstrap/dist/css/bootstrap.css";
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


// @media screen and( min-width: 540px)and ( max-width: 768px) {
//   .container {
//     background-color: rgb(24, 24, 24);
//     display: flex;
//     justify-content: center;
//   width: 162vh;
//     height: 200px;
//   }
//   .myFooter {
//     width: 100%;
//     display: flex;
//     align-items: center;
//   }
//   .logo {
//     height: 60px;
//     margin: 30px 100px 30px 40px;
//     transition: all 1s ease;
//   }
//   .logo:hover {
//     transform: scale(1.1);
//   }
//   .iconCont{
//     margin-left: 40px;
//   }
//   .myFooterContact {
//     display: flex;
//   }
//   .myFooterBottom {
//     display: flex;
//     margin: 0 30px 0 0;
//     transition: all 1s ease;
//   }
//   .myFooterBottom:hover {
//     transform: scale(1.1);
//   }
//   .myFooterImg {
//     margin-right: 0px;
//     height: 40px;
//   }
//   .myFooterTxt {
//     color: white;
//   font-size: 25px;
//   text-decoration: none;
//   }
//   .FooterIcons {
//     transition: all 1s ease;
//   }
  
//   .FooterIcons:hover {
//     transform: scale(1.1);
//   }
//   .FooterIconsA {
//     transition: all 1s ease;
//     height: 40px;
//   }
//   .FooterIconsA:hover {
//     transform: scale(1.1);
//   }
//   .iconCont{
  
//   }
//   #last{
//     border-bottom: 1px solid white;
//   }
// } 