import "../styles/globals.css";
import React from 'react';
import PropTypes from 'prop-types';

export default function App({ Component, pageProps}) {
  return (
      <Component {...pageProps} />
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};