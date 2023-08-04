export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
  theme: {
    extend: {
			transitionProperty: {
				colors: "background-color, border-color, color, fill, stroke",
			},
			transitionDuration: {
				500: "500ms",
			},
			transitionTimingFunction: {
				"ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
			},
			fontFamily: {},
			colors: {
				background: "#FEF4EE",
				"background-contrast": "#333333",
				primary: "#D3D9EF",
				secondary: "#DBDEE9",
				text: "#0F0F0F",
			},
		},
  },
  plugins: [],
};
