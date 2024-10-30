import { Children, createContext, useContext, useState} from 'react'
import { useSession } from '../hooks/useSession.js';

export const SessionContext = createContext();

export const SessionProvider = ({ Children }) =>{
    const [ session, setSession ]  = useState(null);
    
    const login = async(credentials) => {
        try {
            const response = await fetch(``,{
                method: POST,
                credentials: 'include',
                headers: {'Content Type': "application/json"},
                body: JSON.stringify(credentials)
            })
            const data = await response.json();

            if(data.token){
                setSession({user: data.user, token: data.token});
            } else{
                throw new error(data.message || "Error de autenticación");
            }
        } catch (error) {
            console.error("Error al iniciar sesión", error.message);
        }
    };

    const logout = () =>{
        setSession(null);
    };

    return(
        <SessionContext.Provider value = {{session, login, logout}}>
        {Children}
        </SessionContext.Provider>
    );
};
