import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Global.css";

function Layout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
export default Layout;
