import "../styles/globals.css";
import React from 'react';
import PropTypes from 'prop-types';
import Analytics from '@vercel/analytics';

export default function App({ Component, pageProps, Analytics }) {
  return (
      <Component {...pageProps} ><Analytics/></Component>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};