import { useLocation } from "react-router";

export const SITE_URL = "https://taskero-60a20.web.app";

export const DEFAULT_TITLE = "Taskero — Your Task. Their Skill.";

export const DEFAULT_DESCRIPTION =
	"Taskero is a freelance task marketplace connecting clients with freelancers for small and quick jobs. Post tasks, browse open opportunities, and hire a freelancer with ease.";

const SEO = ({ title, description, type = "website" }) => {
	const { pathname } = useLocation();
	const fullTitle = title ? `Taskero | ${title}` : DEFAULT_TITLE;
	const desc = description || DEFAULT_DESCRIPTION;
	const canonical = `${SITE_URL}${pathname}`;
	const image = `${SITE_URL}/og-image.png`;

	return (
		<>
			<title>{fullTitle}</title>
			<meta name='description' content={desc} />
			<link rel='canonical' href={canonical} />

			<meta property='og:site_name' content='Taskero' />
			<meta property='og:title' content={fullTitle} />
			<meta property='og:description' content={desc} />
			<meta property='og:type' content={type} />
			<meta property='og:url' content={canonical} />
			<meta property='og:image' content={image} />
			<meta property='og:image:width' content='1200' />
			<meta property='og:image:height' content='630' />
			<meta property='og:locale' content='en_US' />

			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={fullTitle} />
			<meta name='twitter:description' content={desc} />
			<meta name='twitter:image' content={image} />
		</>
	);
};

export default SEO;