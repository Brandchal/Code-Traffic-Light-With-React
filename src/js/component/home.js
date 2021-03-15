import React from "react";

export default class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null
		};
	}

	render() {
		let redNewClass = "";
		console.log(this.state);
		if (this.state.clickedLight == "red") redNewClass = "selected";
		let yellowNewClass = "";
		if (this.state.clickedLight == "yellow") yellowNewClass = "selected";
		let greenNewClass = "";
		if (this.state.clickedLight == "green") greenNewClass = "selected";

		return (
			<div>
				<div className="top"></div>
				<div className="container">
					<div
						className={"red light " + redNewClass}
						onClick={() =>
							this.setState({ clickedLight: "red" })
						}></div>
					<div
						className={"yellow light " + yellowNewClass}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}></div>
					<div
						className={"green light " + greenNewClass}
						onClick={() =>
							this.setState({ clickedLight: "green" })
						}></div>
				</div>
			</div>
		);
	}
}
