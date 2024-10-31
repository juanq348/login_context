import { useContext } from "react";
import { SessionContext } from "../context/SessionProvider.jsx";

export const useSession = () =>{
    return useContext(SessionContext);
};