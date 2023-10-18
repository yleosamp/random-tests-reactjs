import React, { useState } from 'react'

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
import MultiplyForm from './components/MultiplyForm'
import StateElevate from './components/StateElevate'
import SumNotes from './SumNotes'
import Contencao from './components/Contencao'
import UseEffect from './components/UseEffect'
import LocalStorage from './components/LocalStorage'

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

  const [notas, setNotas] = useState({"nota1": "0", "nota2": "0", "nota3": "0", "nota4": "0"})
  const changeNota = (e: React.FormEvent<HTMLInputElement>) => {
    if(e.currentTarget.getAttribute("name") === "1") {
      setNotas({ "nota1": e.currentTarget.value, "nota2": notas.nota2, "nota3": notas.nota3, "nota4": notas.nota4 })
    } else if(e.currentTarget.getAttribute("name") === "2") {
      setNotas({ "nota1": notas.nota1, "nota2": e.currentTarget.value, "nota3": notas.nota3, "nota4": notas.nota4 })
    } else if(e.currentTarget.getAttribute("name") === "3") {
      setNotas({ "nota1": notas.nota1, "nota2": notas.nota2, "nota3": e.currentTarget.value, "nota4": notas.nota4 })
    } else if(e.currentTarget.getAttribute("name") === "4") {
      setNotas({ "nota1": notas.nota1, "nota2": notas.nota2, "nota3": notas.nota3, "nota4": e.currentTarget.value })
    }
  }


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
      <MultiplyForm />

      {/* ELEVAÇÃO DE STATE */}
      <h1>ELEVAÇÃO DE STATE</h1>
      <StateElevate 
        number={"1"}
        nota={parseFloat(notas.nota1)}
        setNotas={changeNota}
      />
      <StateElevate 
        number={"2"}
        nota={parseFloat(notas.nota2)}
        setNotas={changeNota}
      />
      <StateElevate 
        number={"3"}
        nota={parseFloat(notas.nota3)}
        setNotas={changeNota}
      />
      <StateElevate 
        number={"4"}
        nota={parseFloat(notas.nota4)}
        setNotas={changeNota}
      />
      

      <SumNotes 
        nota1={parseFloat(notas.nota1)}
        nota2={parseFloat(notas.nota2)}
        nota3={parseFloat(notas.nota3)}
        nota4={parseFloat(notas.nota4)}
      />

      {/* CONTENÇÃO */}
      <h1>Contenção</h1>
      <Contencao>
        <h4>Elemento pai passando children</h4>
      </Contencao>
      
      {/* useEffect HOOK */}
      <h1>useEffect HOOK</h1>
      <UseEffect />

      {/* localStorage */}
      <h1>Local Storage</h1>
      <LocalStorage />
    </>
  )
}

export default App
