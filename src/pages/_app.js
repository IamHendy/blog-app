import { useEffect, useState } from "react";
import { Layout } from "@/components";
import "../styles/global.scss";

export default function App({ Component, pageProps }) {
  return(
    <Layout>
   <Component {...pageProps} />;
    </Layout>
  )
}
