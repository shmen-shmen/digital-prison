import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Cellz></Cellz>
		</div>
	);
}

const addPseudo = (e) => {
	console.log(e.target);
};

const Cellz = () => {
	return (
		<section className="Cellz">
			<div className="grid-cell" id="inmate-1" onClick={addPseudo}>
				inmate
			</div>
			<div className="grid-cell">inmate</div>
			<div className="grid-cell grid-col-span-2">inmate</div>
			<div className="grid-cell">inmate</div>
			<div className="grid-cell ">inmate</div>
			<div className="grid-cell AMF">
				<h1>DIGITAL PRISON</h1>
			</div>
			<div className="grid-cell">inmate</div>
			<div className="grid-cell grid-col-span-2">inmate</div>
			<div className="grid-cell">inmate</div>
			<div className="grid-cell grid-col-span-2">inmate</div>
		</section>
	);
};

export default App;
