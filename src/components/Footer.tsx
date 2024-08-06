import GithubIcon from "~icons/lucide/github";

export const Footer = () => {
	return (
		<footer>
			<div class="container mx-auto flex py-6 items-center">
				<a
					href="http://github.com/ldavidson8/solidtyper"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 hover:text-accent"
				>
					<GithubIcon class="size-6" />
					Source Code
				</a>
			</div>
		</footer>
	);
};
