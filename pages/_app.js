// pages/_app.js
import styles from "../Styles/globals.scss";
// import styles from "../styles/Home.module.css";
import { connect, Provider } from "react-redux";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
 


import store from "../state";
import Layout from "../Component/themes/layout";
 
function MyApp({ Component, pageProps }) {

 
  return (
    <Provider store={store}>
      <Layout>
      <ToastContainer/>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

// export default connect()(MyApp)
export default MyApp;
