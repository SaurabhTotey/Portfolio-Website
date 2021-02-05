import React from "react";
import Layout from "../components/Layout";

// TODO: make a component that holds a piece's title, original artist, composer, and audio file

const Music = () => (
	<Layout>
		<p>
			Sorry, this page is a work in progress! I plan on uploading more recordings of me playing piano and possibly cello
			here.
		</p>
		<h2>JUSTadICE</h2>
		<p>
			This song is by Seiko Oomori, but I am playing a piano composition by Fonzi M. The song appears as the seventh
			opening of Black Clover.
		</p>
		<audio controls src="./audio/JUSTadICE.wav" />
	</Layout>
);
export default Music;
