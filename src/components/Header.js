import React from "react";
import Navbar from "./Navbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default () => (
	<div>
		<OverlayTrigger overlay={<div style={{fontSize: "10px"}}>Just in case you didn't know whose website you were on.</div>} delay={{ show: 10000 }} placement={"bottom"}>
			<h1 style={{textAlign: "center"}}>Saurabh Totey</h1>
		</OverlayTrigger>
		<Navbar />
	</div>
)
