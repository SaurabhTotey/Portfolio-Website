import React from "react";
import Layout from "../components/Layout";
import { Metadata } from "../components/Metadata";

const PageNotFound = () => (
	<Layout>
		<p>
			Sorry, the resource that you are trying to access does not exist. Please contact me if you believe this is an
			error!
		</p>
	</Layout>
);
export default PageNotFound;

export const Head = () => <Metadata />;
