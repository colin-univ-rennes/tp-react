import { useState } from "react";
import { BeerContext } from "../BeerContext";
import { BeerList } from "../components/BeerList";
import "./App.css";

function App() {
	const [beers, setBeers] = useState([
		"Coreff",
		"Corona",
		"Mort Subite",
		"Guinness",
		"Stella Artois",
		"Carlsberg",
		"Hoegaarden",
		"Kronenbourg",
		"Sainte Colombe",
	]);

	return (
		<div className="App">
			<BeerContext value={{ beers, setBeers }}>
				<BeerList />
			</BeerContext>
		</div>
	);
}

export default App;
