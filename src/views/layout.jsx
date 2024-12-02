import { Outlet } from "react-router-dom"
import PrimaryMenu from "../components/primary-menu"

export default function Layout() {
	return (
		<>
			<header>
				<h1>PokeJam</h1>
				<PrimaryMenu />
			</header>
			<main>
				<Outlet />
			</main>
		</>
	)
}
