import "../styles/globals.css";
import { CarritoProvider } from "../contexts/CarritoContext";

function MyApp({ Component, pageProps }) {
  return (
    <CarritoProvider>
      <Component {...pageProps} />
    </CarritoProvider>
  );
}

export default MyApp;
