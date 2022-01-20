const CracoAlias = require("craco-alias");
const path = require("path");

module.exports = {
	plugins: [
		{
			plugin: CracoAlias,
			options: {
				source: "tsconfig",
				tsConfigPath: "tsconfig.paths.json",
			},
		},
	],
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src/"),
		},
	},
	jest: {
		configure: {
			moduleNameMapper: {
				"^@(.*)$": "<rootDir>/src$1",
			},
		},
	},
};
