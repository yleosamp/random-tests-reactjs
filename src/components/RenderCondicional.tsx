import { useState } from "react"

const RenderCondicional = () => {
  const [userIsLogged, setUserIsLogged] = useState(false)

  return (
    <div>
      <h1>Renderização condicional</h1>
      <p>
        { 
          userIsLogged ? 'Você está logado no site!' 
          : 'Você não está logado!' 
        }
      </p>
      <button onClick={ () => setUserIsLogged(!userIsLogged) }>
        { userIsLogged ? 'Sair' : 'Entrar' }
      </button>
    </div>
  )
}

export default RenderCondicional