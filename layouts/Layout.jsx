import React from 'react'
import Head from 'next/head'
import Header from 'components/header/Header'
export default function Layout({children,title}) {
  return (
    <>
    <Head>
      <title>{title}</title> 
    </Head>
    <Header />
    <main>
        {children}
    </main>
    </>
    
  )
}
