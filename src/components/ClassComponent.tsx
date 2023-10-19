import React from "react"

type Props = {
  name: string
}

class ClassComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render(): React.ReactNode {
    return(
      <div>
        <p>Primeiro componente com classe.</p>
        <h4>Utilizando props no componente em classe</h4>
        <p>Nome (passado por props): { this.props.name }</p>
      </div>
    )
  }
}

export default ClassComponent