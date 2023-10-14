import React from 'react'

const MapFunction = () => {
	const myTechs = ['JavaScript', 'ReactJS', 'HTML5', 'CSS', 'MySQL']
	const cardTechs = myTechs.map( (tech) => <li>{ tech }</li> )

	return (
		<div>
			<ul>
        { cardTechs }
      </ul>
		</div>
	)
}

export default MapFunction