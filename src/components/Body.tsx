import React from 'react'
import Data from './Data'


const Body = () => {
  const github = (): string => {
    return 'https://github.com/yleosamp'
  }

  const sum = (number1: number, number2: number): number => {
    return number1 + number2
  }

  {/* OBJETO DE ESTILO */}
  const styleObject = {
    color: '#00F',
    fontSize: '20px'
  }

  return (
    <section>
      <h2 style={ {color: '#F00', fontSize: '25px'} }>Curso de React</h2> {/* Estilos inline, não recomendado. */}

      <p style={styleObject}>Entre no meu GitHub!</p> {/* UTILIZANDO O OBJETO DE ESTILO */}

      <a href="https://www.github.com/yleosamp" target='_blank'>Entrar</a>

      <Data 
        github={ github } 
        linkedin='https://linkedin/in/yleo'
        sum={ sum }
      />
    </section>
  )
}

export default Body