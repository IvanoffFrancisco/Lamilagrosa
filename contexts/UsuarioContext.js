import { createContext, useEffect, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const [userGlobal, setUserGlobal] = useState({});
  const [islogged, setIslogged] = useState(false);

  useEffect(() => {
    setUserGlobal(JSON.parse(localStorage.getItem("LMG-user")));
    setIslogged(localStorage.getItem("LMG-isLogged"));
  }, []);

  return (
    <UsuarioContext.Provider
      value={{ islogged, setIslogged, userGlobal, setUserGlobal }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
