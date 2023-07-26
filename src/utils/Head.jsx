import React from 'react';
import Head from 'next/head'

const HeadComponent = ({title, page}) => {
  
    return (
      <Head>
        <title>{title || "Realtor - Your gateway to your next home!"}</title>
        <meta name="description" content={page || "Home is where the heart belongs!"} />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>

        <meta name="robots" content="noimageindex" />
        
      </Head>
    )
}

export default HeadComponent; 