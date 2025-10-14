import { useContext } from "react";
import { BeerContext } from "../BeerContext";

import "./Beer.css";

export function Beer({ beer }: { beer: string }) {
	const { beers, setBeers } = useContext(BeerContext);

	return (
		<li>
			<span>{beer}</span>
			<button
				type="button"
				onClick={() => setBeers(beers.filter((b) => b !== beer))}
			>
				Remove
			</button>
		</li>
	);
}
