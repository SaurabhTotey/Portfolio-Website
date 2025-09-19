import { defineConfig, globalIgnores } from "eslint/config";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

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
		extends: compat.extends("eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"),

		plugins: {
			react,
			prettier,
		},

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
				version: "detect",
			},
		},

		rules: {
			"react/prop-types": "off",
		},
	},
]);
