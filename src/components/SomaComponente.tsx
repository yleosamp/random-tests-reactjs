import React from 'react'

type Props = {
	number1: number,
	number2: number,
	soma(number1: number, number2: number): number
}

const SomaComponente = (props: Props) => {
	return (
		<div>
			<p>
				A soma do número {props.number1} com o  
				{props.number2} é {props.soma(props.number1, props.number2)}
			</p>
		</div>
	)
}

export default SomaComponente