import { useContext } from "react";
import { SessionContext } from "../context/SessionProvider.jsx";

export const useSession = () =>{
    const context  = useContext(SessionContext);

    if(!context){
        throw new error ('useSession debe ser usado en un SessionProvider')
    }

    return context;
}