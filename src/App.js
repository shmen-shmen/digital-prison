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
	const [showFG, setShowFG] = useState(false);
	return (
		<section className="Cellz">
			<Cell n={"1"} showFG={showFG} setShowFG={setShowFG}></Cell>
			<Cell n={"2"}></Cell>
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
			{showFG ? <CellOnForeground /> : null}
		</section>
	);
};

const Cell = (props) => {
	const [cellSize, setCellSize] = useState("");
	const [image, setImage] = useState("boxer-col-16-dith-0-size-10.jpg");

	const cellHandler = (e) => {
		const computedStyle = window.getComputedStyle(e.target);
		const copiedStyle = {};
		for (const prop in computedStyle) {
			if (Object.hasOwn(computedStyle, prop)) {
				const key = computedStyle[prop];
				const value = computedStyle[key];
				copiedStyle[key] = value;
			}
		}

		console.log(window.getComputedStyle(CellOnForeground()));
		// props.setShowFG(true);
		// let { width, height } = e.target.style;

		// cellSize === "500px" ? setCellSize("") : setCellSize("500px");
		// image === "boxer-col-64-dith-0-size-50.jpg"
		// 	? setImage("boxer-col-16-dith-0-size-10.jpg")
		// 	: setImage("boxer-col-64-dith-0-size-50.jpg");
	};

	return (
		<div
			className="grid-cell"
			id="inmate-1"
			onClick={cellHandler}
			style={{
				width: cellSize,
				height: cellSize,
				backgroundImage: `url(/assets/images/${image})`,
			}}
		>
			<h3>inmate-{props.n}</h3>
		</div>
	);
};

let CellOnForeground = () => {
	console.log("foregroundEl was rendered");
	return <div></div>;
};

export default App;
