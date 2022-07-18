import "../styles/globals.css";
import {UsuarioProvider} from '../contexts/UsuarioContext'


function MyApp({ Component, pageProps }) {
  return(
    <UsuarioProvider>
      <Component {...pageProps} />
    </UsuarioProvider>
  );
}

export default MyApp;
