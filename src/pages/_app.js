import "../styles/globals.css"; // Ensure the CSS file is being used somewhere
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <div className="globals"> {/* Add a className to use the imported CSS */}
      <Component {...pageProps} />
    </div>
  );
}

export default React.memo(MyApp);