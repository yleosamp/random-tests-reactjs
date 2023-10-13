import Header from './components/Header'
import Body from './components/Body'
import SomaComponente from './components/SomaComponente'
import Relogio from './components/Relogio'

import style from './App.module.css'

function App() {
	const soma = (number1: number, number2: number): number => {
		return number1 + number2
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
    </>
  )
}

export default App
