/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		fontFamily: {
			sans: "var(--font-sans)",
		},

		extend: {
			colors: {
				white: "var(--color-white)",

				primary: {
					red: "var(--color-primary-red)",
					black: "var(--color-primary-black)",
					gray: "var(--color-primary-gray)",
				},

				gray: {
					100: "var(--color-gray-100)",
					200: "var(--color-gray-200)",
					300: "var(--color-gray-300)",
					400: "var(--color-gray-400)",
					500: "var(--color-gray-500)",
					600: "var(--color-gray-600)",
					700: "var(--color-gray-700)",
					800: "var(--color-gray-800)",
				},

				sub: {
					green: "var(--color-sub-green)",
					skyblue: "var(--color-sub-skyblue)",
					blue: "var(--color-sub-blue)",
					yellow: "var(--color-sub-yellow)",
					pink: "var(--color-sub-pink)",
				},
			},

			fontSize: {
				// Title
				title01: [
					"var(--title01-size)",
					{
						fontWeight: "var(--title01-weight)",
						lineHeight: "var(--title01-line)",
						letterSpacing: "var(--title01-track)",
					},
				],
				title02: [
					"var(--title02-size)",
					{
						fontWeight: "var(--title02-weight)",
						lineHeight: "var(--title02-line)",
						letterSpacing: "var(--title02-track)",
					},
				],
				title03: [
					"var(--title03-size)",
					{
						fontWeight: "var(--title03-weight)",
						lineHeight: "var(--title03-line)",
						letterSpacing: "var(--title03-track)",
					},
				],
				title04: [
					"var(--title04-size)",
					{
						fontWeight: "var(--title04-weight)",
						lineHeight: "var(--title04-line)",
						letterSpacing: "var(--title04-track)",
					},
				],
				title05: [
					"var(--title05-size)",
					{
						fontWeight: "var(--title05-weight)",
						lineHeight: "var(--title05-line)",
						letterSpacing: "var(--title05-track)",
					},
				],
				title06: [
					"var(--title06-size)",
					{
						fontWeight: "var(--title06-weight)",
						lineHeight: "var(--title06-line)",
						letterSpacing: "var(--title06-track)",
					},
				],

				// Body
				body01: [
					"var(--body01-size)",
					{
						fontWeight: "var(--body01-weight)",
						lineHeight: "var(--body01-line)",
						letterSpacing: "var(--body01-track)",
					},
				],
				body02: [
					"var(--body02-size)",
					{
						fontWeight: "var(--body02-weight)",
						lineHeight: "var(--body02-line)",
						letterSpacing: "var(--body02-track)",
					},
				],
				body03: [
					"var(--body03-size)",
					{
						fontWeight: "var(--body03-weight)",
						lineHeight: "var(--body03-line)",
						letterSpacing: "var(--body03-track)",
					},
				],
				body04: [
					"var(--body04-size)",
					{
						fontWeight: "var(--body04-weight)",
						lineHeight: "var(--body04-line)",
						letterSpacing: "var(--body04-track)",
					},
				],
				body05: [
					"var(--body05-size)",
					{
						fontWeight: "var(--body05-weight)",
						lineHeight: "var(--body05-line)",
						letterSpacing: "var(--body05-track)",
					},
				],
				body06: [
					"var(--body06-size)",
					{
						fontWeight: "var(--body06-weight)",
						lineHeight: "var(--body06-line)",
						letterSpacing: "var(--body06-track)",
					},
				],

				// Caption
				caption01: [
					"var(--caption01-size)",
					{
						lineHeight: "var(--caption01-line)",
						letterSpacing: "var(--caption01-track)",
						fontWeight: "var(--caption01-weight)",
					},
				],
				caption02: [
					"var(--caption02-size)",
					{
						fontWeight: "var(--caption02-weight)",
						lineHeight: "var(--caption02-line)",
						letterSpacing: "var(--caption02-track)",
					},
				],
				caption03: [
					"var(--caption03-size)",
					{
						fontWeight: "var(--caption03-weight)",
						lineHeight: "var(--caption03-line)",
						letterSpacing: "var(--caption03-track)",
					},
				],
				caption04: [
					"var(--caption04-size)",
					{
						fontWeight: "var(--caption04-weight)",
						lineHeight: "var(--caption04-line)",
						letterSpacing: "var(--caption04-track)",
					},
				],
				caption05: [
					"var(--caption05-size)",
					{
						fontWeight: "var(--caption05-weight)",
						lineHeight: "var(--caption05-line)",
						letterSpacing: "var(--caption05-track)",
					},
				],

				// Label
				label01: [
					"var(--label01-size)",
					{
						fontWeight: "var(--label01-weight)",
						lineHeight: "var(--label01-line)",
						letterSpacing: "var(--label01-track)",
					},
				],
			},

			borderRadius: {
				2: "var(--radius-2)",
				4: "var(--radius-4)",
				6: "var(--radius-6)",
				12: "var(--radius-12)",
				full: "var(--radius-full)",
			},
		},
	},
	plugins: [],
};
