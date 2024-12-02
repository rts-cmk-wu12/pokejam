import { useEffect } from "react"

export default function Pokecard({ number, image, name }) {
	const style = {
		article: {
			backgroundColor: "white",
			boxShadow: "10px 10px 15px -7px rgba(138,138,138,.5)",
			fontFamily: "arial, sans-serif",
			borderRadius: "8px",
			padding: "1rem",
			minWidth: "11rem",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			cursor: "pointer"
		},
		number: {
			color: "gray",
			alignSelf: "flex-end",
			margin: "0"
		},
		name: {
			color: "black",
			alignSelf: "center",
			margin: "0"
		},
		image: {
			width: "100%",
			height: "auto"
		}
	}

	console.log("will mount")
	let foo = ""

	useEffect(function() {
		console.log("did mount")
	}, [])
	//	^ dependecy array

	return (
		<article style={style.article}>
			<p style={style.number}>
				#{number}
			</p>
			<img src={image} alt={`Drawing of ${name}`} style={style.image} />
			<h2 style={style.name}>
				{name}
			</h2>
		</article>
	)
}
