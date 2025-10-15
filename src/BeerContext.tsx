import { createContext, useState } from "react";

export type Beer = {
	id: string;
	name: string;
};

export const BeerContext = createContext<{
	beers: Beer[];
	setBeers: (beers: Beer[]) => void;
	addBeer: (beer: Beer["name"]) => void;
	removeBeer: (id: Beer["id"]) => void;
}>({
	beers: [],
	setBeers: () => {},
	addBeer: () => {},
	removeBeer: () => {},
});

export function useBeers() {
	const b = [
		"Coreff",
		"Corona",
		"Mort Subite",
		"Guinness",
		"Stella Artois",
		"Carlsberg",
		"Hoegaarden",
		"Kronenbourg",
		"Sainte Colombe",
	];

	const [beers, setBeers] = useState(
		b.map((beer) => ({
			id: crypto.randomUUID(),
			name: beer,
		})),
	);

	const addBeer = (beer: Beer["name"]) => {
		if (beers.some((b) => b.name === beer)) return;
		setBeers((b) => [
			...b,
			{
				id: crypto.randomUUID(),
				name: beer,
			},
		]);
	};

	const removeBeer = (id: Beer["id"]) => {
		setBeers(beers.filter((beer: Beer) => beer.id !== id));
	};

	return {
		beers,
		setBeers,
		addBeer,
		removeBeer,
	};
}
