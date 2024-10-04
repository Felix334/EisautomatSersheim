import "../styles/globals.css";
import React from 'react';
import PropTypes from 'prop-types';

/*App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};*/

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
