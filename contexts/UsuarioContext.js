import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const [userGlobal, setUserGlobal] = useState({});
  const [isloged, setIsloged] = useState(false);

  return (
    <UsuarioContext.Provider
      value={{ isloged, setIsloged, userGlobal, setUserGlobal }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
