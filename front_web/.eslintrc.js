module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"plugin:prettier/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
		extends: ["airbnb", "prettier"],
	},
	rules: {
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
	},
};
