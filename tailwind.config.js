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
						lineHeight: "var(--title01-line)",
						letterSpacing: "var(--title01-track)",
						fontWeight: "var(--title01-weight)",
					},
				],
				title02: [
					"var(--title02-size)",
					{
						lineHeight: "var(--title02-line)",
						letterSpacing: "var(--title02-track)",
						fontWeight: "var(--title02-weight)",
					},
				],
				title03: [
					"var(--title03-size)",
					{
						lineHeight: "var(--title03-line)",
						letterSpacing: "var(--title03-track)",
						fontWeight: "var(--title03-weight)",
					},
				],
				title04: [
					"var(--title04-size)",
					{
						lineHeight: "var(--title04-line)",
						letterSpacing: "var(--title04-track)",
						fontWeight: "var(--title04-weight)",
					},
				],
				title05: [
					"var(--title05-size)",
					{
						lineHeight: "var(--title05-line)",
						letterSpacing: "var(--title05-track)",
						fontWeight: "var(--title05-weight)",
					},
				],
				title06: [
					"var(--title06-size)",
					{
						lineHeight: "var(--title06-line)",
						letterSpacing: "var(--title06-track)",
						fontWeight: "var(--title06-weight)",
					},
				],

				// Body
				body01: [
					"var(--body01-size)",
					{
						lineHeight: "var(--body01-line)",
						letterSpacing: "var(--body01-track)",
						fontWeight: "var(--body01-weight)",
					},
				],
				body02: [
					"var(--body02-size)",
					{
						lineHeight: "var(--body02-line)",
						letterSpacing: "var(--body02-track)",
						fontWeight: "var(--body02-weight)",
					},
				],
				body03: [
					"var(--body03-size)",
					{
						lineHeight: "var(--body03-line)",
						letterSpacing: "var(--body03-track)",
						fontWeight: "var(--body03-weight)",
					},
				],
				body04: [
					"var(--body04-size)",
					{
						lineHeight: "var(--body04-line)",
						letterSpacing: "var(--body04-track)",
						fontWeight: "var(--body04-weight)",
					},
				],
				body05: [
					"var(--body05-size)",
					{
						lineHeight: "var(--body05-line)",
						letterSpacing: "var(--body05-track)",
						fontWeight: "var(--body05-weight)",
					},
				],
				body06: [
					"var(--body06-size)",
					{
						lineHeight: "var(--body06-line)",
						letterSpacing: "var(--body06-track)",
						fontWeight: "var(--body06-weight)",
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
						lineHeight: "var(--caption02-line)",
						letterSpacing: "var(--caption02-track)",
						fontWeight: "var(--caption02-weight)",
					},
				],
				caption03: [
					"var(--caption03-size)",
					{
						lineHeight: "var(--caption03-line)",
						letterSpacing: "var(--caption03-track)",
						fontWeight: "var(--caption03-weight)",
					},
				],
				caption04: [
					"var(--caption04-size)",
					{
						lineHeight: "var(--caption04-line)",
						letterSpacing: "var(--caption04-track)",
						fontWeight: "var(--caption04-weight)",
					},
				],
				caption05: [
					"var(--caption05-size)",
					{
						lineHeight: "var(--caption05-line)",
						letterSpacing: "var(--caption05-track)",
						fontWeight: "var(--caption05-weight)",
					},
				],

				// Label
				label01: [
					"var(--label01-size)",
					{
						lineHeight: "var(--label01-line)",
						letterSpacing: "var(--label01-track)",
						fontWeight: "var(--label01-weight)",
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
