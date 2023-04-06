import React from 'react';
import { useForm } from '../hooks/useForm';

export const Formulario = () => {

    const { form, changed } = useForm({});

    const enviado = (e) => {

        e.preventDefault();
        
        let curso = form;

        console.log(curso);

    }

    return (
        <div>

            <h1>Formulario</h1>

            <p>Formulario para guardar un curso</p>
            <p>Curso guardado: {form.titulo}</p>

            <form onSubmit={enviado}>

                <input type="text" name='titulo' placeholder="Titulo del curso" onChange={changed}/>
                <input type="number" name='anio' placeholder="Año de publicación" onChange={changed}/>
                <input type="text" name='profesor' placeholder="Profesor" onChange={changed}/>
                <input type="email" name='email' placeholder="Email" onChange={changed}/>
                <textarea name='descripcion' placeholder='Descripción' onChange={changed}></textarea>

                <input type="submit" value="Enviar" />

            </form>

        </div>
    )
}
