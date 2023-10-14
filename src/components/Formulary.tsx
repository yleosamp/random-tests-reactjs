import React, { useState } from "react";

const Formulary = () => {
	const [userText, setUserText] = useState('')

	return (
		<div>
			<label htmlFor='textInput'>Digite um texto: </label>
			<input 
				type='text' 
				name='textInput' 
				onChange={ (e) => setUserText(e.target.value) }
			/>
			<p>Texto digitado: { userText }</p>
		</div>
	)
}

export default Formulary