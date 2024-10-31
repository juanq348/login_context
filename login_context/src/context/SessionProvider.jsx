import {  createContext, useState, useContext } from 'react'

export const SessionContext = createContext();

export function SessionProvider ({ children }) {
    const [ isAuthenticated, setIsAuthenthicated ]  = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    
    const login = async({username, password}) => {
        try {
            if(username === 'admin' && password === "password"){
                setIsAuthenthicated(true);
                setUser({name:'Admin'});
            } else{
                setError("Credenciales incorrectas");
            }
            
        } catch (err) {
            console.error("Error al iniciar sesión");
        }
    };

    const logout = () =>{
        setIsAuthenthicated(false);
        setUser(null);
    };

    return(
        <SessionContext.Provider value = {{isAuthenticated, user, login, logout, error}}>
        {children}
        </SessionContext.Provider>
    );
};

export function useSession(){
    return useContext(SessionContext);
}
