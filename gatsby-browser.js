import Meta from "./src/components/Meta";
import React from "react";
import ReactDOM from "react-dom";
import "./src/styles/Global.css";

export const onClientEntry = () => {
	document.getElementsByTagName("html")[0].lang = "en";
	const metaContainer = document.createElement("span");
	metaContainer.id = "metaContainer";
	document.getElementsByTagName("head")[0].prepend(metaContainer);
	ReactDOM.render(<Meta />, document.getElementById("metaContainer"));
};
