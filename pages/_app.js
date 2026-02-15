import "../styles/globals.css";
import "highlight.js/styles/github-dark.css";
import { ThemeProvider } from "../context/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
