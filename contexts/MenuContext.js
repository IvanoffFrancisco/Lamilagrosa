import React,{createContext,useEffect,useState} from 'react';
import { useFetchMenu } from '../hooks/useFetchMenu';

export const MenuContextData=createContext();


export const MenuProvider=({children})=>{
    const [menus]=useFetchMenu();
    const [menuGlobal, setMenuGlobal] = useState([]);

    useEffect(() => {
      setMenuGlobal(menus)
    }, [menus])
    

    return(
        <MenuContextData.Provider value={{menuGlobal}}>
            {children}
        </MenuContextData.Provider>
    )
}