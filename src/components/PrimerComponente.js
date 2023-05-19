import React from 'react'

export const PrimerComponente = () => {
    let nombre = "Victor"
    let web = "victorrioblesweb.es"

    let cursos = [
        "Master en JavaScript",
        "Master en PHp",
        "Master en React",
        "Master en CSS"
    ];
  return (
    <div>
        <h1>Mi primer componente</h1>
        <p>Este es un texto en el componente</p>
        <p>Mi nombre es: {nombre}</p>
        <p>Mi web es: {web}</p>

        <h2>Cursos:</h2>
        <ul>
            {
                cursos.map(curso =>{
                    return(<li>
                        {curso}
                    </li>)
                })
            }
        </ul>
    </div>
  )
}
