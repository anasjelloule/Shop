import React from 'react'
import Slug from './[slug]'
import { useRouter } from 'next/router'
const App = () => {
  let [results]=[{fetch:"anas",message:"hello"}]
  let {fetch,message}=results
  console.log(typeof results);
    return (
    <>
    <h1>ANAS</h1>
    </>
  )
}

export default App