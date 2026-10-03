import { defineConfig, globalIgnores } from "eslint/config";
import react from "eslint-plugin-react";
import globals from "globals";
import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
	globalIgnores([
		"**/logs",
		"**/*.log",
		"**/npm-debug.log*",
		"**/yarn-debug.log*",
		"**/yarn-error.log*",
		"**/pids",
		"**/*.pid",
		"**/*.seed",
		"**/*.pid.lock",
		"**/lib-cov",
		"**/coverage",
		"**/.nyc_output",
		"**/.grunt",
		"**/bower_components",
		"**/.lock-wscript",
		"build/Release",
		"**/node_modules/",
		"**/jspm_packages/",
		"**/typings/",
		"**/.npm",
		"**/.eslintcache",
		"**/.node_repl_history",
		"**/*.tgz",
		"**/.env",
		"**/.cache/",
		"**/public",
		"**/.DS_Store",
		"**/yarn-error.log",
		"**/.pnp/",
		"**/.pnp.js",
		"**/.yarn-integrity",
		"**/.idea/",
		"**/gatsby-config.js",
	]),
	{
		extends: [js.configs.recommended, react.configs.flat.recommended, eslintPluginPrettierRecommended],

		languageOptions: {
			globals: {
				...globals.browser,
			},

			ecmaVersion: 12,
			sourceType: "module",

			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},

		settings: {
			react: {
				version: "19",
			},
		},

		rules: {
			"react/prop-types": "off",
		},
	},
]);
