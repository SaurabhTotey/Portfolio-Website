import React from "react";
import Layout from "../components/Layout";

/**
 * A component that packages a song with its information
 */
function Song(props) {
	return (
		<div>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
			<audio controls src={props.filePath} />
		</div>
	);
}

const Music = () => (
	<Layout>
		<p>
			Sorry, this page is a work in progress! I plan on uploading more recordings of me playing piano and cello here. I
			have already included a few samples of my playing, but please keep in mind that I am an amateur playing as a
			hobby. I am working on improving my sense of rhythm and intonation.
		</p>
		<Song
			title="JUSTadICE"
			description="This song is by Seiko Oomori, but I am playing a piano composition by Fonzi M. The song appears as the seventh opening of Black Clover."
			filePath="./audio/JUSTadICE.wav"
		/>
		<Song
			title="Shangri-La"
			description="This song by angela is the first opening to Fafner in the Azure. I learned this song by ear."
			filePath="./audio/ShangriLa.wav"
		/>
	</Layout>
);
export default Music;
