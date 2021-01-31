import React from "react";
import Navbar from "./Navbar";
import "../styles/Header.css";

function Header() {
	return (
		<header>
			<div id={"title-container"}>
				<h1 id={"title"}>Saurabh Totey</h1>
				<span id={"secret-tooltip"}>
					Just in case you didn&apos;t know whose website you were on. Read about me on the home page if you don&apos;t
					know what biological species I am.
				</span>
			</div>
			<Navbar />
		</header>
	);
}
export default Header;
