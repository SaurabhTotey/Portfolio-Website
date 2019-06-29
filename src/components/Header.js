import React from "react";
import Navbar from "./Navbar";
import "../styles/Header.css";

export default () => (
	<header>
		<div id={"title-container"}>
			<h1 id={"title"}>Saurabh Totey</h1>
			<span id={"secret-tooltip"}>Just in case you didn't know whose website you were on. Read about me on the home page if you don't know what biological species I am.</span>
		</div>
		<Navbar />
	</header>
)
