import path from "path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		svgr({
			svgrOptions: {
				icon: true,
			},
		}),
		visualizer({
			filename: "./dist/report.html",
			open: true,
		}),
	],

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
});
