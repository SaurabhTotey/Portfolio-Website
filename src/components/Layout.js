import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Global.css";
import "katex/dist/katex.min.css";

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
