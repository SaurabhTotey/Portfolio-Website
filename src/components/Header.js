import React from "react";
import Fade from "@material-ui/core/Fade";
import Tooltip from "@material-ui/core/Tooltip";

export default () => (
	<Tooltip TransitionComponent={Fade} enterDelay={10000} enterTouchDelay={10000} title="Just in case you didn't know whose website you were on.">
		<h1 style={{textAlign: "center"}}>Saurabh Totey</h1>
	</Tooltip>
)
