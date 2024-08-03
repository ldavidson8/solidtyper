export const Header = () => {
	return (
		<header class="bg-neutral-900 text-white">
			<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a
					href="https://solidtyper.com"
					class="flex title-font font-medium items-center text-neutral-900 mb-4 md:mb-0"
				>
					title
				</a>
				<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
					<a href="https://solidtyper.com" class="mr-5 hover:text-neutral-900">
						Home
					</a>
					<a
						href="https://solidtyper.com/about"
						class="mr-5 hover:text-neutral-900"
					>
						About
					</a>
					<a
						href="https://solidtyper.com/contact"
						class="mr-5 hover:text-neutral-900"
					>
						Contact
					</a>
				</nav>
			</div>
		</header>
	);
};
