import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Contencao = (props: Props) => {
  return (
    <div>
      <p>Componente filho</p>
      { props.children }
    </div>
  )
}

export default Contencao