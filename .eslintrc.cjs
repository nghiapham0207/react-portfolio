module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"eslint-config-prettier",
		"prettier",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh", "prettier"],
	rules: {
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
		"prettier/prettier": [
			"warn",
			{
				printWidth: 100,
				tabWidth: 2,
				useTabs: true,
				semi: true,
				singleQuote: false,
				quoteProps: "as-needed",
				jsxSingleQuote: false,
				trailingComma: "all",
				bracketSpacing: true,
				bracketSameLine: true,
				endOfLine: "auto",
				plugins: ["prettier-plugin-tailwindcss"],
			},
		],
	},
};
