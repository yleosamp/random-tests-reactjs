

type Props = {
  nota1: number,
  nota2: number,
  nota3: number,
  nota4: number
}

const SumNotes = (props: Props) => {
  const sumNotes = props.nota1 + props.nota2 + props.nota3 + props.nota4
  return (
    <div>
      <p>Média do aluno: { (sumNotes / 4) }</p>
      <p>{ (sumNotes / 4) >= 6 ? "Aprovado" : "Reprovado"}</p>
    </div>
  )
}

export default SumNotes