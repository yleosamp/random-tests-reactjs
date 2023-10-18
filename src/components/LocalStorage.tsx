import { useState } from 'react'


const LocalStorage = () => {
  const [nome, setNome] = useState("") 
  
  const adicionar = (key: string, value: string) => {
    localStorage.setItem(key, value)
  }
  const remove = (key: string) => {
    localStorage.removeItem(key)
  }

  const see = (key: string) => {
    alert(localStorage.getItem(key))
  }


  return (
    <div>
      <form onSubmit={ (e) => e.preventDefault() } target=''>
        <label htmlFor='nome'>Nome: </label>
        <input type="text" name="nome" onChange={ (e) => setNome(e.currentTarget.value) }/>
        <br />
        <br />
        <button onClick={ () => adicionar("key_name", nome) }>Adicionar nome</button>
        <button onClick={ () => see("key_name") } style={ {marginInline: "20px"} }>Ver nome</button>
        <button onClick={ () => remove("key_name") }>Remover nome</button>
        <p>Nome digitado: { localStorage.getItem("key_name") }</p>
      </form>
    </div>
  )
}

export default LocalStorage