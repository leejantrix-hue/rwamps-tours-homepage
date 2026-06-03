// Site-wide constants extracted verbatim from rwampsglobaltoursconsult.com
// SITE flattens brand + primary contact fields so components can read everything
// from a single object. CONTACT is kept as a verbose alias for footer/legal copy.

export const SITE = {
brand: 'Rwamps',
brandFull: 'Rwamps Tours',
tagline: 'Discover Arabian Wonders',
logoUrl: 'https://rwampsglobaltoursconsult.com/assets/RWAMPS%20logo-1-CSrZdRkz.svg',
copyright: '© 2026 Rwamps Tours. All rights reserved.',
copyrightShort: '© 2026 Rwamps. All rights reserved.',

// Primary contact — consumed by GetInTouch, Footer, Header
phone: '+971 4 123 4567',
email: 'contact@rwampstours.com',
address: 'Dubai Marina, Al Marsa Street, Building 12, Floor 8, Dubai, UAE',
hours: 'Sun - Thu, 8:00 AM - 8:00 PM GST',
} as const;

export const NAV_LINKS = [
{ label: 'Home', href: '/' },
{ label: 'About', href: '/about' },
{ label: 'Services', href: '/services' },
{ label: 'Contact', href: '/contact' },
{ label: 'FAQs', href: '/faqs' },
{ label: 'Tours', href: '/tours' },
] as const;

// Verbose contact aliases — kept for footer/legal/long-form copy where the
// fuller strings (full address, hours including closed days) are needed.
export const CONTACT = {
phone: SITE.phone,
emailSupport: 'support@traveluae.com',
emailContact: 'contact@traveluae.com',
emailFooter: SITE.email,
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

// Section-specific aliases consumed by components
heroBg: `${ASSET_HOST}/assets/header-X9LcTuvO.png`,
heroOne: `${ASSET_HOST}/assets/tours_one-YHspAtGq.png`,
heroTwo: `${ASSET_HOST}/assets/tours_three-BF86vEF9.png`,
whyImage: `${ASSET_HOST}/assets/tours_one-YHspAtGq.png`,
} as const;

// Stats — consumed by WhyChooseUs
export const STATS = [
{ value: '10K+', label: 'Happy travelers' },
{ value: '50+', label: 'UAE destinations' },
{ value: '15+', label: 'Years of experience' },
{ value: '24/7', label: 'Support available' },
] as const;

// Why-choose-us reasons — consumed by WhyChooseUs
export const WHY_CHOOSE_US = [
{
  id: 'expert',
  icon: 'award',
  title: 'Expert local guides',
  description: 'Hand-picked guides who know every hidden corner of the UAE.',
},
{
  id: 'safe',
  icon: 'shield',
  title: 'Safe & insured',
  description: 'Full travel insurance and 24/7 emergency support on every trip.',
},
{
  id: 'custom',
  icon: 'heart',
  title: 'Tailored to you',
  description: 'Every itinerary is built around your pace, interests, and budget.',
},
{
  id: 'seamless',
  icon: 'plane',
  title: 'Seamless logistics',
  description: 'Flights, hotels, transfers — we handle every detail end-to-end.',
},
] as const;
