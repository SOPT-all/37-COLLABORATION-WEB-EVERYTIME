import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
	globalIgnores(["dist", "node_modules", "eslint.config.js", "svg.d.ts"]),

	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parser: tseslint.parser,
			parserOptions: {
				project: ["./tsconfig.app.json", "./tsconfig.node.json"],
			},
		},
		plugins: {
			react,
			reactHooks,
			reactRefresh,
			import: importPlugin,
			prettier: prettierPlugin,
		},
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			react.configs.flat.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
			prettierConfig,
		],
		settings: {
			react: {
				version: "detect",
			},
			"import/resolver": {
				typescript: {
					alwaysTryTypes: true,
					project: ["./tsconfig.app.json", "./tsconfig.node.json"],
				},
			},
		},
		rules: {
			"react/react-in-jsx-scope": "off",

			"import/order": [
				"error",
				{
					groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
					"newlines-between": "always",
					alphabetize: { order: "asc", caseInsensitive: true },
				},
			],

			"prettier/prettier": "error",
		},
	},
]);
