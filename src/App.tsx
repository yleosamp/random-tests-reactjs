import { useState } from 'react'

import Header from './components/Header'
import Body from './components/Body'
import SomaComponente from './components/SomaComponente'
import Relogio from './components/Relogio'
import StateNumber from './components/StateNumber'
import OnButton from './components/img/on.png'
import OffButton from './components/img/off.png'
import RenderCondicional from './components/RenderCondicional'
import Greeting from './components/Greeting'
import ChangeColor from './components/ChangeColor'
import MapFunction from './components/MapFunction'
import Formulary from './components/Formulary'

import style from './App.module.css'


const App = () => {
	const soma = (number1: number, number2: number): number => {
		return number1 + number2
	}

  const cancelEvent = (obj: any) => {
    return obj.preventDefault()
  }

  const [num, setNum] = useState(10)
  const [turnOn, setTurnOn] = useState(false)

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

      <h1>EVENTOS STATE HOOK</h1>
      {/* Usando operadores no React.js */}
      <img src={ turnOn ? OnButton : OffButton } alt={ turnOn ? 'Botão de ligado' : 'Botão de desligado' } width={100} />
      <button onClick={ () => setTurnOn(!turnOn) }>{ turnOn ? 'Desligar' : 'Ligar' }</button>

      <h3>Cancelar evento</h3>
      <a 
      href="https://github.com/yleosamp" 
      target='_blank'
      onClick={ (e) => cancelEvent(e) }>
          Acessar github
      </a>

      {/* Renderização condicional: logado/deslogado */}
      <RenderCondicional />
      {/* Renderização condicional: saudação */}
      <Greeting />

      <ChangeColor />

      {/* Funções - MAP */}
      <h1>FUNÇÕES</h1>
      <h4>Map</h4>
      <MapFunction />

      {/* FORMULÁRIO! */}
      <h1>Formulário</h1>
      <Formulary />
    </>
  )
}

export default App
