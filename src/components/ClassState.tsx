import React from 'react'

type Props = {
}

type State = {
	onOff: boolean,
	color: string
}

class ClassState extends React.Component<Props, State> {
	constructor(props: Props){
		super(props)
		this.state = {
			onOff: false,
			color: "green"
		}
	}

	ligarLampada(){
		this.setState({ onOff: !this.state.onOff })
	}

	render(): React.ReactNode{
		return(
			<div>
				<p>A lâmpada está: { this.state.onOff ? 'Ligada' : 'Desligada' }</p>
				<button onClick={ () => this.ligarLampada() }>{ this.state.onOff ? 'Desligar' : 'Ligar' }</button>
			</div>
		)
	}
}

export default ClassState