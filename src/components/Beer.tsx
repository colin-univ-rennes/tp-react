import { useContext } from "react";
import { BeerContext, type Beer as TBeer } from "../BeerContext";

import "./Beer.css";

export function Beer({ beer }: { beer: TBeer }) {
	const { removeBeer } = useContext(BeerContext);

	return (
		<li>
			<div>
				<span className="beer-name">{beer.name}</span>
				<span className="beer-id">{beer.id.split("-")[0]}</span>
			</div>
			<button type="button" onClick={() => removeBeer(beer.id)}>
				Remove
			</button>
		</li>
	);
}
