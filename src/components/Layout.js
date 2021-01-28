import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Global.css";

export default ({ children }) => (
	<>
		<Header />
		{ children }
		<Footer />
	</>
);
