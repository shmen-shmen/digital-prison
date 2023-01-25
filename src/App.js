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
	const [inmateFg, setInmateFg] = useState({});
	// if (showFG) {
	// 	document.body.style.overflow = "hidden";
	// } else {
	// 	document.body.style.overflow = "auto";
	// }
	return (
		<section className="Cellz">
			{inmates.map((inmate) => {
				const key = Math.random().toString().slice(2);
				return (
					<Cell
						key={key}
						inmate={inmate}
						showFG={showFG}
						setShowFG={setShowFG}
						inmateFg={inmateFg}
						setInmateFg={setInmateFg}
					></Cell>
				);
			})}
			<div className="grid-cell AMF">
				<h1>DIGITAL PRISON</h1>
			</div>
			{showFG ? (
				<CellZoom
					inmate={inmateFg}
					setInmateFg={setInmateFg}
					showFG={showFG}
					setShowFG={setShowFG}
				/>
			) : null}
		</section>
	);
};

const Cell = (props) => {
	const { name, smallImg, aspect } = props.inmate;
	const { showFG, setShowFG, inmateFg, setInmateFg } = props;
	// const [largeCell, setLargeCell] = useState("");
	// const [cellSize, setCellSize] = useState("");
	// const [image, setImage] = useState(smallImg);
	// const [position, setPosition] = useState("relative");

	const cellHandler = (e) => {
		// VAR-1 SMALL WINODW EXPANDS:
		// let { width, height } = e.target.style;
		// cellSize === "" ? setCellSize("666px") : setCellSize("");
		// position === "relative" ? setPosition("absolute") : setPosition("relative");
		// image === smallImg ? setImage(largeImg) : setImage(smallImg);
		// VAR-2 NEW WINODW APPEARS IN FRONT OF EVERYTHING:
		setShowFG(!showFG);
		setInmateFg(props.inmate);
	};

	return (
		<div
			className="grid-cell"
			id={"inmate-" + name}
			onClick={cellHandler}
			style={{
				backgroundImage: `url(/assets/images/${smallImg})`,
				gridColumn: `span ${aspect}`,
				// width: `${cellSize}`,
				// height: `${cellSize}`,
			}}
		>
			<h3>{name}</h3>
		</div>
	);
};

let CellZoom = (props) => {
	console.log("foregroundEl was rendered");
	const { showFG, setShowFG, inmate, setInmateFg } = props;
	const { name, largeImg } = inmate;
	const hider = () => {
		setShowFG(!showFG);
		setInmateFg({});
	};
	return (
		<>
			<div
				className="cell-zoom"
				onClick={hider}
				style={{
					position: "absolute",
					top: "17%",
					left: "17%",
					zIndex: "666",
					backgroundImage: `url(/assets/images/${largeImg})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					width: "66%",
					height: "66%",
					border: "10px solid black",
				}}
			>
				<h3>
					{"inmate - "}
					<span style={{ fontSize: "1.5rem", textTransform: "uppercase" }}>
						{name}
					</span>
				</h3>
				<div className="cell-menu">
					<button>TEACH HIM A LESSON</button>
					<button>ENOUGH FOR TODAY</button>
				</div>
			</div>
		</>
	);
};

export default App;
