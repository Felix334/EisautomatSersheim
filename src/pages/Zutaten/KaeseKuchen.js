import React from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const styles = {
  BodyWrapper: {
    display: "flex",
  },
  BackButtonWrapper: {
    position: "absolute",
    backgroundColor: "yellow",
    top: "3%",
    left: "2%",
    width: "5%",
  },
};

export default function Zutat() {
  return (
    <main>
      <Head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4153577229204032" crossOrigin="anonymous"></Script>
      </Head>
      <div className="BodyWrapper" style={styles.BodyWrapper}>
        <div className="ImageWrapper">
          <Image src />
        </div>
        <div className="Body">
          <div className="BackButtonWrapper">
            <div className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              <button className="BackButton">
                <Link href="/">Zurück</Link>
              </button>
            </div>
          </div>
          <div className="HeaderWrapper">
            <h1 className="Header">Käsekuchen</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
