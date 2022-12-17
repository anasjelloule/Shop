import Head from "next/head";
import Image from "next/image";
 

import { useSelector } from 'react-redux'
import { useRouter } from "next/router";
import Header from "./Header";
 

 

function Layout({ children, title = "Welcome to my website", description }) {
  
  let router = useRouter();
  const sites=useSelector(state=>state.Sites.sites.pages).filter(el=>el.slug==router.route.replace('/',''))[0]||''
  
 
 
if (!sites)     router.push('404')
  return (
    <div>
      <Head>
        <title>{sites.title||title}</title>
        <meta name="description" content={sites.description} />
      </Head>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
