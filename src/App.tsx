import { useState } from 'react'

import Header from './components/Header'
import Body from './components/Body'
import SomaComponente from './components/SomaComponente'
import Relogio from './components/Relogio'
import StateNumber from './components/StateNumber'


import style from './App.module.css'

const App = () => {
	const soma = (number1: number, number2: number): number => {
		return number1 + number2
	}

  const [num, setNum] = useState(10)

  return (
    <>
      <Header />
      <Body />

      <h1>DIVISÃO - APP</h1>
      <p className={style.textoClass}>Exemplo CSS padrão com classes</p>

      <SomaComponente 
        number1={10}
        number2={5}
        soma={soma}
      />

      <Relogio />

      <h1>STATE HOOK</h1>
      <p>Valor do state num em App: {num}</p>
      <button onClick={ () => setNum(num+10) }>Adicionar</button>

      <StateNumber 
        num={num}
        setNum={setNum}
      />

    </>
  )
}

export default App
