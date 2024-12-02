import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Pokemon() {
	const params = useParams()
	const [pokemon, setPokemon] = useState({})

	useEffect(function() {
		fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
			.then(res => res.json())
			.then(data => setPokemon(data))
	}, [])

	const style = {
		heading: {
			textTransform: "capitalize"
		}
	}

	return (
		<>
			<h1 style={style.heading}>{pokemon.name}</h1>
			<p>{pokemon.base_experience}</p>
			<h2>Abilities</h2>
			<ul>
				{pokemon.abilities?.map(element => <li key={element.ability.name}>{element.ability.name}</li>)}
			</ul>
		</>
	)
}
