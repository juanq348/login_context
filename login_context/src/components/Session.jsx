import React from 'react';
import { useSession } from '../hooks/useSession.js';

function Session(){
    const { user, logout } = useSession();

    return(
        <div>
            <h1>Bienvenido, {user?.name || 'Usuario'}</h1>
            <button onClick = {logout}> Cerrar Sesión </button>
        </div>
    );
};

export default Session;