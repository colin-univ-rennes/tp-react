import { BeerContext, useBeers } from "../BeerContext";
import { BeerList } from "../components/BeerList";
import "./App.css";

function App() {
	const beers = useBeers();

	return (
		<div className="App">
			<BeerContext value={beers}>
				<BeerList />
			</BeerContext>
		</div>
	);
}

export default App;
