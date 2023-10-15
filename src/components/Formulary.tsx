import React, { useState } from "react";

const Formulary = () => {
	const [userText, setUserText] = useState('')
	const [selectedCar, setSelectedCar] = useState('i30')

	return (
		<div>
			<label htmlFor='textInput'>Digite um texto: </label>
			<input 
				type='text' 
				name='textInput' 
				onChange={ (e) => setUserText(e.target.value) }
			/>
			<p>Texto digitado: { userText }</p>

			<h3>Select</h3>
			<select name="selectOption" value={selectedCar} onChange={ (e) => setSelectedCar(e.target.value) }>
				<option value="i30">i30</option>
				<option value="Sonata">Sonata</option>
				<option value="Corolla">Corolla</option>
				<option value="Civic">Civic</option>
			</select>
			<p>Carro escolhido: { selectedCar }</p>
		</div>
	)
}

export default Formulary