import React from "react";
import Head from "next/head";
import Script from "next/script";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Taskly</title>
      </Head>
      <Script src="/js/bootstrap.min.js" />
      <div>{children}</div>
    </>
  );
}

export default Layout;
