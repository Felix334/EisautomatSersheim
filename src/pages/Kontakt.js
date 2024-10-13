import React from "react";
import Head from "next/head";
import Script from "next/script";
//import PropTypes from "prop-types";

const styles = {
  headerContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    padding: "15px",
    borderBottom: "1px solid #ddd",
    width: "100vw", // take up full viewport width
    "@media (maxWidth: 68px)": {
      padding: "10px",
    },
  },
  BodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9', // Add a light gray background
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
    borderRadius: '10px', // Add a slight curve to the corners
    maxWidth: '800px', // Set a maximum width to prevent it from getting too wide
    margin: '40px auto', // Add some margin to center it horizontally
  },

  emailContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0',
  },

  emailLink: {
    textDecoration: 'none',
    color: '#337ab7', // Use a blue color for the email link
    transition: 'color 0.3s ease',
    ':hover': {
      color: '#23527c', // Change the color on hover
    },
  },

  emailIcon: {
    fontSize: '24px',
    marginRight: '10px',
  },

  emailText: {
    fontSize: '18px',
  },
}

export default function Kontakt() {
  return (
    <div>
      <Head>
        <title>Kontakt</title>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4153577229204032" crossOrigin="anonymous"></Script>
      </Head>
      <div className="HeaderContainer" style={styles.headerContainer}>
        <h1>Kontakt</h1>
      </div>
      <div className="BodyContainer" style={styles.BodyContainer}>
      <div className="email-container" style={styles.emailContainer}>
        <a href={`mailto:eisautomatsersheim@gmx.de`} className="email-link" style={styles.emailLink}>
          <span className="email-icon" style={styles.emailIcon}>📧</span>
          <span className="email-text" style={styles.emailText}>eisautomatsersheim@gmx.de</span>
        </a>
      </div>
      </div>
    </div>
  );
}