import { createContext, type Dispatch, type SetStateAction } from "react";

export const BeerContext = createContext<{
	beers: string[];
	setBeers: Dispatch<SetStateAction<string[]>>;
}>({
	beers: [],
	setBeers: () => {},
});
