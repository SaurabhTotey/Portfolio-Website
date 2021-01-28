module.exports = {
	plugins: [
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: { path: `${__dirname}/assets/` }
		}
	]
}
