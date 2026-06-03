// Site-wide constants extracted verbatim from rwampsglobaltoursconsult.com
export const SITE = {
brand: 'Rwamps',
brandFull: 'Rwamps Tours',
tagline: 'Discover Arabian Wonders',
logoUrl: 'https://rwampsglobaltoursconsult.com/assets/RWAMPS%20logo-1-CSrZdRkz.svg',
copyright: '© 2026 Rwamps Tours. All rights reserved.',
copyrightShort: '© 2026 Rwamps. All rights reserved.',
} as const;

export const NAV_LINKS = [
{ label: 'Home', href: '/' },
{ label: 'About', href: '/about' },
{ label: 'Services', href: '/services' },
{ label: 'Contact', href: '/contact' },
{ label: 'FAQs', href: '/faqs' },
{ label: 'Tours', href: '/tours' },
] as const;

export const CONTACT = {
phone: '+971 4 123 4567',
emailSupport: 'support@traveluae.com',
emailContact: 'contact@traveluae.com',
emailFooter: 'contact@rwampstours.com',
addressFull: 'Dubai Marina, Al Marsa Street, Building 12, Floor 8, Dubai, United Arab Emirates',
addressShort: 'Dubai Marina, Dubai, UAE',
hours: 'Sunday - Thursday, 8:00 AM - 8:00 PM GST',
hoursShort: '8:00 AM - 8:00 PM',
hoursDays: 'Sunday to Thursday (Closed Friday & Saturday)',
} as const;

// Asset host — keep referencing the live site directly until we ingest assets
const ASSET_HOST = 'https://rwampsglobaltoursconsult.com';
export const ASSETS = {
logo: `${ASSET_HOST}/assets/RWAMPS%20logo-1-CSrZdRkz.svg`,
header: `${ASSET_HOST}/assets/header-X9LcTuvO.png`,
toursOne: `${ASSET_HOST}/assets/tours_one-YHspAtGq.png`,
toursTwo: `${ASSET_HOST}/assets/tours_two-jnmDaDVi.png`,
toursThree: `${ASSET_HOST}/assets/tours_three-BF86vEF9.png`,
toursFour: `${ASSET_HOST}/assets/tours_four-BDDe0s2U.png`,
toursFive: `${ASSET_HOST}/assets/tours_five-fIp1zHlF.png`,
userOne: `${ASSET_HOST}/assets/user_one-CWCMHY8k.png`,
userTwo: `${ASSET_HOST}/assets/user_two-BOwF-0uc.png`,
userThree: `${ASSET_HOST}/assets/user_three-BBGg2ndS.png`,
userFour: `${ASSET_HOST}/assets/user_four-CU3VEF4t.png`,
bgImage: `${ASSET_HOST}/assets/bg_image-DoHP6FS-.png`,
} as const;
