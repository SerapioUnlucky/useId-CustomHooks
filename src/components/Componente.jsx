import React, { useId } from 'react'

export const Componente = () => {

  const id = useId();

  console.log(id);

  return (
    <div>

      <h1>Hook useID</h1>

      <input type="text" id={id} placeholder='useId'/>

    </div>
  )
}
