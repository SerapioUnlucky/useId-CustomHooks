import React, { useState } from 'react';
import { useMayus } from '../hooks/useMayus';

export const PruebasCustom = () => {

    const [texto, setTexto] = useState('Sebastián');
    const { mayusculas, minusculas } = useMayus(texto);

    return (
        <div>

            <h1>Pruebas Custom</h1>

            <h2>{texto}</h2>

            <button onClick={() => {setTexto(mayusculas())}}>Poner en mayusculas</button>
            <button onClick={() => {setTexto(minusculas())}}>Poner en minusculas</button>

            <form>
                <input type="text" value={texto} onChange={(e) => {setTexto(e.target.value)}}/>
            </form>

        </div>
    )
}
