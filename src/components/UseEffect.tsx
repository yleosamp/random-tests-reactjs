import { useState, useEffect } from 'react'

const UseEffect = () => {
	const [contar, setContar] = useState(0)

	useEffect(
		() => {
			console.log("Página atualizada/carregada!")
			document.title = `Contagem: ${contar}`
		}
	)

	return (
		<div>
			<p>Contagem: { contar }</p>
			<button onClick={ () => setContar(contar + 1) }>Adicionar contagem</button>
		</div>	
	)
}

export default UseEffect