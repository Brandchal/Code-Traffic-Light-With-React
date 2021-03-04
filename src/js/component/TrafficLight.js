import React from "react";
import { useState } from "react";
import "/workspace/Traffic-Light-With-React/src/styles/trafficLight.css";

const TrafficLight = () => {
	const [color, setColor] = useState(null);
	let selectedRed = "";
	let selectedYellow = "";
	let selectedGreen = "";

	if (color === "red") {
		selectedRed = "selected";
	} else if (color === "yellow") {
		selectedYellow = "selected";
	} else if (color === "green") {
		selectedGreen = "selected";
	}

	return (
		<div>
			<div id="trafficTop"></div>
			<div id="container">
				<div
					className={"light red " + selectedRed}
					onClick={() => setColor("red")}></div>
				<div
					className={"light yellow " + selectedYellow}
					onClick={() => setColor("yellow")}></div>
				<div
					className={"light green " + selectedGreen}
					onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
