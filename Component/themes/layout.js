import Head from "next/head";
import Image from "next/image";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

function Layout({ children, title = "Welcome to my website", description }) {
  let router = useRouter();
  let [Withoutheader,setWithoutheader]=useState(["Checkout"])
  const sites =
    useSelector((state) => state.Sites.sites.pages).filter(
      (el) => el.slug == router.route.replace("/", "")
    )[0] || "";

  return (
    <div>
      <Head>
        <title>{sites.title || title}</title>
        <meta name="description" content={sites.description} />
      </Head>
      {!Withoutheader.includes(sites.title)?<Header />:''}
      {children}
      {!Withoutheader.includes(sites.title)?<Footer />:''}
      
    </div>
  );
}

export default Layout;
