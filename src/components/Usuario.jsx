import React, { useState } from 'react';
import { useAjax } from '../hooks/useAjax';

export const Usuario = () => {

    const [url, setUrl] = useState('https://reqres.in/api/users/1');
    const { datos, cargando } = useAjax(url);

    const getId = (e) => {

        let id = parseInt(e.target.value);
        setUrl("https://reqres.in/api/users/"+id);

    }

    return (
        <div>

            <h1>Mi usuario</h1>

            <p>Datos del usuario</p>

            <p>{cargando ? "Cargando..." : ""}</p>

            <ul>
                <li>Nombre: {datos?.first_name}</li>
                <li>Apellido: {datos?.last_name}</li>
                <li>Email: {datos?.email}</li>
            </ul>

            <input type="number" name='id' onChange={getId} />

        </div>
    )
}
