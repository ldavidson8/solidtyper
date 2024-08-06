import { Meta, Link, Title } from "@solidjs/meta";

export const MetaTags = () => {
	return (
		<>
			<Title>SolidTyper - Improve your typing skills</Title>
			<Link rel="canonical" href="https://solidtyper.vercel.app/" />
			<Meta
				name="description"
				content="Improve your typing skills with this minimalistic type tester app."
			/>
			<Meta
				name="keywords"
				content="typing, lessons, drills, games, learn, improve, progress, track, compete, practice"
			/>
			<Meta name="robots" content="index, follow" />
			<Meta name="twitter:card" content="summary_large_image" />
			<Meta name="twitter:site" content="@solidtyper" />
			<Meta name="twitter:creator" content="@solidtyper" />
			<Meta name="twitter:title" content="SolidTyper" />
			<Meta
				name="twitter:description"
				content="Improve your typing skills with this minimalistic type tester app."
			/>
			<Meta
				name="twitter:image"
				content="https://solidtyper.vercel.app/logo.png"
			/>
			<Meta property="og:type" content="website" />
			<Meta property="og:title" content="SolidTyper" />
			<Meta
				property="og:description"
				content="Improve your typing skills with this minimalistic type tester app."
			/>
			<Meta
				property="og:image"
				content="https://solidtyper.vercel.app/logo.png"
			/>
		</>
	);
};
