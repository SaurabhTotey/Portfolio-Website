import React from "react";
import Header from "../components/Header";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";

export default () => (
	<div>
		<Meta />
		<Header />
		<Navbar pages={["Home", "Qualifications"]} currentPage={"Home"}/>
	</div>
)
