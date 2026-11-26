// Site-wide metadata used by <Seo /> and the JSON-LD schema.
export const SITE = {
	name: 'Center Automation',
	url: 'https://centerautomation.ai',
	description:
		'Center Automation builds AI-powered automations that take repetitive work off your team’s plate. Start with a free audit and get your first workflow live in weeks.',
	logo: '/android-chrome-512x512.png',
	ogImage: '/og-image.png',
	ogImageAlt: 'Center Automation logo on a dark navy background',
	locale: 'en_US',
	themeColor: '#FFFFFF',
	email: 'info@centerautomation.ai',
	// Paste a Cal.com / Calendly / Google Calendar booking page URL here. When set, every
	// "Book a free audit" button opens it; when empty, the buttons fall back to email.
	bookingUrl: '',
} as const;

/** Primary call to action used across the site. */
const bookingUrl: string = SITE.bookingUrl;

export const CTA = {
	label: 'Book a free audit',
	href: bookingUrl || `mailto:${SITE.email}?subject=${encodeURIComponent('Free automation audit')}`,
	external: Boolean(bookingUrl),
} as const;

export const NAV = [
	{ label: 'Services', href: '#services' },
	{ label: 'How it works', href: '#process' },
	{ label: 'Why us', href: '#why' },
	{ label: 'FAQ', href: '#faq' },
] as const;
