import React, { useState } from "react";
import { useSession } from "../hooks/useSession";

function Login(){
    const { login, error } = useSession();
    const [credentials, setCredentials] = useState({username: '', password: ''})

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCredentials((prev) => ({...prev, [name]:value}));
        };

    const handleSubmit = (e) =>{
        e.preventDefault();
        login(credentials)
    }

    return (
        <div className = "login">
            <h2>Inicio de Sesión</h2>
            <form onSubmit = {handleSubmit}>
            <input
                type = "text"
                name = "username"
                placeholder="Usuario"
                value = {credentials.username}
                onChange = {handleChange}
                required
            />
            <input
                type = "password"
                name="password"
                value = {credentials.password}
                onChange = {handleChange}
                placeholder = "Contraseña"
                required
            />
            <button type = "submit"> Iniciar Sesión </button>
            </form>
            {error && <p> {error} </p>}
        </div>
    );
};

export default Login;
