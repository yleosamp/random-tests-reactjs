import { useState } from "react";

const MultiplyForm = () => {
  const [userInfo, setUserInfo] = useState({ "nome": "", "curso": "", "ano": "" })

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if(e.currentTarget.getAttribute("name") === "Nome") {
      setUserInfo({"nome": e.currentTarget.value, "curso": userInfo.curso, "ano": userInfo.ano})
    } else if(e.currentTarget.getAttribute("name") === "Curso") {
      setUserInfo({"nome": userInfo.nome, "curso": e.currentTarget.value, "ano": userInfo.ano})
    } else if(e.currentTarget.getAttribute("name") === "Ano") {
      setUserInfo({"nome": userInfo.nome, "curso": userInfo.curso, "ano": e.currentTarget.value})
    }
  }
  
  return (
    <div>
      <label htmlFor="Nome">Nome </label>
      <input type="text" name="Nome" value={userInfo.nome} onChange={ (e) => handleChange(e) }/>
      <label htmlFor="Curso">Curso </label>
      <input type="text" name="Curso" value={userInfo.curso} onChange={ (e) => handleChange(e) }/>
      <label htmlFor="Ano">Ano </label>
      <input type="text" name="Ano" value={userInfo.ano} onChange={ (e) => handleChange(e) }/>

      <p>Nome digitado: { userInfo.nome }</p>
      <p>Curso digitado: { userInfo.curso }</p>
      <p>Ano digitado: { userInfo.ano }</p>
    </div>
  )
}

export default MultiplyForm