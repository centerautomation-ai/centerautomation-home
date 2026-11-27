// Site-wide metadata used by <Seo /> and the JSON-LD schema.
export const SITE = {
	name: 'Center Automation',
	url: 'https://centerautomation.ai',
	description:
		'Center Automation builds AI-powered automations that take repetitive work off your team’s plate. Get a demo and see your first workflow live in weeks.',
	logo: '/android-chrome-512x512.png',
	ogImage: '/og-image.png',
	ogImageAlt: 'Center Automation logo on a dark navy background',
	locale: 'en_US',
	themeColor: '#FFFFFF',
	email: 'info@centerautomation.ai',
	/**
	 * Where the "Get a demo" form posts. Leave empty to have the form open the visitor's
	 * email app with the request prefilled to `email`. To receive submissions directly,
	 * create a free form at Formspree (https://formspree.io) or a compatible service and
	 * paste its endpoint here, e.g. 'https://formspree.io/f/abcdwxyz'.
	 */
	formEndpoint: '',
	/** Optional Cal.com / Calendly booking page, shown under the demo form when set. */
	bookingUrl: '',
} as const;

/** Primary call to action used across the site: jumps to the demo form. */
export const CTA = {
	label: 'Get a demo',
	href: '/#demo',
} as const;

export const NAV = [
	{ label: 'Services', href: '#services' },
	{ label: 'How we build', href: '#platform' },
	{ label: 'Process', href: '#process' },
	{ label: 'Why us', href: '#why' },
	{ label: 'FAQ', href: '#faq' },
] as const;
