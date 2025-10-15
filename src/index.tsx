import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { About } from "./routes/about";
import App from "./routes/App";

import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/about",
		element: <About />,
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<React.StrictMode>
		<nav>
			<a href="/">Accueil</a>
			<a href="/about">À propos</a>
		</nav>
		<RouterProvider router={router} />
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
