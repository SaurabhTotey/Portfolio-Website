import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://www.saurabhtotey.com",
	trailingSlash: "always",
	build: { format: "directory" },
});
