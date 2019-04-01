import React from "react";
import Navbar from "./Navbar";
import "../styles/Header.css";

export default () => (
	<div>
		<div id={"title-container"}>
			<h1>Saurabh Totey</h1>
			<span id={"secret-tooltip"}>Just in case you didn't know whose website you were on.</span>
		</div>
		<Navbar />
	</div>
)
