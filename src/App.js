import React, { useState } from "react";
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

const Cellz = (props) => {
	const [size, setSize] = useState("");

	const addPseudo = (e) => {
		let { width, height } = e.target.style;

		size === "500px" ? setSize("") : setSize("500px");

		// e.target.style.width = size;
		// e.target.style.height = size;
		e.target.style.backgroundImage = "url(../public/assets/images/boxer.jpg)";
	};

	return (
		<section className="Cellz">
			<div
				className="grid-cell"
				id="inmate-1"
				onClick={addPseudo}
				style={{ width: size, height: size }}
			>
				<h3>inmate</h3>
			</div>
			<div className="grid-cell">
				<h3>inmate</h3>
			</div>
			<div className="grid-cell grid-col-span-2">
				<h3>inmate</h3>
			</div>
			<div className="grid-cell">
				<h3>inmate</h3>
			</div>
			<div className="grid-cell ">
				<h3>inmate</h3>
			</div>
			<div className="grid-cell AMF">
				<h1>DIGITAL PRISON</h1>
			</div>
			<div className="grid-cell">
				<h3>inmate</h3>
			</div>
			<div className="grid-cell grid-col-span-2">
				<h3>inmate</h3>
			</div>
			<div className="grid-cell">
				<h3>inmate</h3>
			</div>
			<div className="grid-cell grid-col-span-2">
				<h3>inmate</h3>
			</div>
		</section>
	);
};

export default App;
