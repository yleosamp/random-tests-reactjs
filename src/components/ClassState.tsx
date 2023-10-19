import React from "react"

type Props = {
}

type State = {
  color: string,
  onOff: boolean
}

class ClassState extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      color: "yellow",
      onOff: false
    }
  }

  onOff() {
    this.setState({ onOff: !this.state.onOff })
  }
  
  render(): React.ReactNode {
    return(
      <div>
        <p>Cor da Lâmpada: { this.state.color } </p>
        <p>A lâmpada está: { this.state.onOff ? "Ligada" : "Desligada" }</p>
        <button onClick={ () => this.onOff() }>{ this.state.onOff ? "Desligar" : "Ligar" }</button>
      </div>
    )
  }
}

export default ClassState