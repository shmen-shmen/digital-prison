import React, { useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import inmates from "./inmates";

function App() {
	return (
		<div className="App">
			<Cellz></Cellz>
		</div>
	);
}

const Cellz = (props) => {
	const [showFG, setShowFG] = useState(false);
	if (showFG) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "auto";
	}
	return (
		<section className="Cellz">
			<Cell n={"1"} showFG={showFG} setShowFG={setShowFG}></Cell>
			<Cell n={"2"} showFG={showFG} setShowFG={setShowFG}></Cell>
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
			<Cell n={"1"} showFG={showFG} setShowFG={setShowFG}></Cell>
			<div className="grid-cell">
				<h3>inmate</h3>
			</div>
			<div className="grid-cell grid-col-span-2">
				<h3>inmate</h3>
			</div>
			{showFG ? <CellZoom showFG={showFG} setShowFG={setShowFG} /> : null}
			{showFG ? <CellZoom showFG={showFG} setShowFG={setShowFG} /> : null}
		</section>
	);
};

const Cell = (props) => {
	const { name, smallImg, largeImg } = inmates.inmate1;
	const [cellSize, setCellSize] = useState("");
	const [image, setImage] = useState(smallImg);
	const [spanNum, setspanNum] = useState("2");

	const cellHandler = (e) => {
		// VAR-1 SMALL WINODW EXPANDS:
		let { width, height } = e.target.style;
		cellSize === "500px" ? setCellSize("") : setCellSize("500px");
		image === smallImg ? setImage(largeImg) : setImage(smallImg);
		image === smallImg ? setspanNum("10") : setspanNum("2");

		// VAR-2 NEW WINODW APPEARS IN FRONT OF EVERYTHING:
		// props.setShowFG(!props.showFG);

		// VAR-3 IDK WHAT THAT IS:
		// const computedStyle = window.getComputedStyle(e.target);
		// const copiedStyle = {};
		// for (const prop in computedStyle) {
		// 	if (Object.hasOwn(computedStyle, prop)) {
		// 		const key = computedStyle[prop];
		// 		const value = computedStyle[key];
		// 		copiedStyle[key] = value;
		// 	}
		// }
		// console.log(window.getComputedStyle(CellZoom()));
	};

	return (
		<div
			className="grid-cell"
			id={"inmate-" + name}
			onClick={cellHandler}
			style={{
				width: cellSize,
				height: cellSize,
				backgroundImage: `url(/assets/images/${image})`,
				gridRow: `span ${spanNum}`,
			}}
		>
			<h3>{name}</h3>
		</div>
	);
};

let CellZoom = (props) => {
	console.log("foregroundEl was rendered");
	const { name, largeImg } = inmates.inmate1;
	const hider = () => {
		props.setShowFG(!props.showFG);
	};
	return (
		<div
			className="cellZoom"
			onClick={hider}
			style={{
				position: "absolute",
				bottom: "calc(50% - 200px)",
				left: "calc(50% - 250px)",
				color: "white",
				backgroundColor: "black",
			}}
		>
			<h1>CELL ZOOM</h1>
			<div
				style={{
					backgroundImage: `url(/assets/images/${largeImg})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					width: "500px",
					height: "500px",
				}}
			></div>
		</div>
	);
};

export default App;
