import "../styles/globals.css";
import "macro-css";

import * as React from "react";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
