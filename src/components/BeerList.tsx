import { useContext, useState } from "react";
import { BeerContext } from "../BeerContext";
import { Beer } from "./Beer";
import "./BeerList.css";

function BeerInput() {
	const { addBeer } = useContext(BeerContext);
	const [beerInput, setBeerInput] = useState("");
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				addBeer(beerInput);
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
	);
}

export function BeerList() {
	const { beers } = useContext(BeerContext);

	return (
		<>
			<BeerInput />
			{beers.length === 0 ? (
				<p>Aucune bière ajoutée pour le moment.</p>
			) : (
				<ul>
					{beers.map((beer, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: le sujet demande d'utiliser l'index...
						<Beer key={index} beer={beer} />
					))}
				</ul>
			)}
		</>
	);
}
