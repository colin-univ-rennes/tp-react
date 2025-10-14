import { useContext, useState } from "react";
import { BeerContext } from "../BeerContext";
import { Beer } from "./Beer";
import "./BeerList.css";

export function BeerList() {
	const [beerInput, setBeerInput] = useState("");
	const { beers, setBeers } = useContext(BeerContext);

	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setBeers((b) => [...b, beerInput]);
					setBeerInput("");
				}}
			>
				<label htmlFor="beer-input">Ajouter une bière à la liste</label>
				<input
					name="beer-input"
					placeholder="Nom de la bière"
					value={beerInput}
					onChange={(e) => setBeerInput(e.target.value)}
				/>
				<button type="submit">Ajouter</button>
			</form>
			<ul>
				{beers.map((beer, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: le sujet demande d'utiliser l'index...
					<Beer key={index} beer={beer} />
				))}
			</ul>
		</>
	);
}
