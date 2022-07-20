import "../styles/globals.css";
import {UsuarioProvider} from '../contexts/UsuarioContext'
import { CarritoProvider } from "../contexts/CarritoContext";


function MyApp({ Component, pageProps }) {
  return (
    <UsuarioProvider>
        <CarritoProvider>
            <Component {...pageProps} />
        </CarritoProvider>
    </UsuarioProvider>
    
  );
}

export default MyApp;
