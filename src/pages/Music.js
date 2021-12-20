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
			hobby, so these recordings aren&apos;t perfect. I am working on improving my sense of rhythm and hitting the
			correct notes.
		</p>
		<Song
			title="JUSTadICE"
			description="The original song is by Seiko Oomori, but I am playing a piano composition by Fonzi M. The song appears as the seventh opening of Black Clover."
			filePath="./audio/JUSTadICE.wav"
		/>
		<Song
			title="Shangri-La"
			description="The original song by angela is the first opening to Fafner in the Azure. My heavily modified version is one I learned by ear."
			filePath="./audio/ShangriLa.wav"
		/>
		<Song
			title="Hacking to the Gate"
			description="The original song is sung by Kanako Itō. It is the opening of Steins;Gate. I am playing a composition by Theishter."
			filePath="./audio/HackingToTheGate.wav"
		/>
		<Song
			title="God Knows"
			description="The original song is sung by Aya Hirano. The song appears in the Melancholy of Haruhi Suzumiya. I learned this piece from sheet music by Josh Agarrado."
			filePath="./audio/GodKnows.wav"
		/>
	</Layout>
);
export default Music;
