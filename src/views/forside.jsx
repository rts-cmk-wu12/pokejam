import { useEffect, useState } from "react"
import Pokecard from "../components/pokecard"

export default function Forside() {
	const [pokemon, setPokemon] = useState({})

	useEffect(function () {
		fetch("https://pokeapi.co/api/v2/pokemon")
			.then(res => res.json())
			.then(data => setPokemon(data))
	}, [])

	return (
		<>
			<h1>Forside</h1>
			<ul>
				{pokemon.results?.map(element => (
					<li key={element.url}>
						<Pokecard name={element.name} url={element.url} />
					</li>
				))}
			</ul>
		</>
	)
}
