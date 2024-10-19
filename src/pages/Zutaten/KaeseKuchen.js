import React from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const styles = {
  HeaderWrapper: {
    position: "relative",
    //backgroundColor: "yellow",
    width: "100vw",
    height: "10%",
    alignItems: "center",
    left: "50%",
    backgroundColor:"grey",
  },
  BackButton: {
    position: "relative",
    left: 0,
    right: 0,
    backgroundColor: "yellow",
    
  }
};

export default function KaeseKuchen() {
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <Head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4153577229204032" crossOrigin="anonymous"></Script>
      </Head>
      <div className="HeaderWrapper" style={styles.HeaderWrapper}>
        <header className="Header">
          <div className="HeaderInnerWrapper">
            <h1 className="HeaderH">Käsekuchen</h1>
          </div>
        </header>
      </div>
      <div className="BodyWrapper" style={styles.BodyWrapper}>
        <div className="ImageWrapper">
          <Image src />
        </div>
        <div className="Body">
          <div className="BackButtonWrapper">
            <div className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              <button className="BackButton" style={styles.BackButton}>
                <Link href="/">Zurück</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
