import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default defineConfig([
	globalIgnores(["**/node_modules/", "**/dist/", "**/.astro/", "**/.idea/", "**/.claude/"]),
	{
		extends: [js.configs.recommended, astro.configs.recommended, eslintPluginPrettierRecommended],
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},
]);
