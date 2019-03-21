import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import Fade from "@material-ui/core/Fade";
import Header from "../components/Header"

export default () => (
	<div>
		<Header />
		<Tooltip TransitionComponent={Fade} enterDelay={10000} enterTouchDelay={10000} title="Just in case you didn't know whose website you were on.">
			<h1>Saurabh Totey</h1>
		</Tooltip>
		<style jsx>{`
			text-align: center;
		`}</style>
	</div>
)
