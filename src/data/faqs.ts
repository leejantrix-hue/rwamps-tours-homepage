// FAQ data for the homepage FAQ section.
// FAQ_CATEGORIES is a flat string tuple — consumer (FAQ.tsx) uses
// these values directly as React children, useState seed, and the
// filter predicate against FAQ.category. Keep `category` values in
// the FAQS array in sync with FAQ_CATEGORIES.

export const FAQ_CATEGORIES = [
'General',
'Booking',
'Payment',
'Support',
] as const;

export type FAQCategory = typeof FAQ_CATEGORIES[number];

export interface FAQ {
id: string;
category: FAQCategory;
question: string;
answer: string;
}

export const FAQS: FAQ[] = [
{
  id: 'q1',
  category: 'General',
  question: 'How do I book a tour package?',
  answer: 'You can book directly through our website by selecting a destination, choosing your dates, and completing the booking form. Our team will confirm your reservation within 24 hours.',
},
{
  id: 'q2',
  category: 'General',
  question: 'What destinations do you cover?',
  answer: 'We specialize in UAE and Middle East destinations including Dubai, Abu Dhabi, Sharjah, Fujairah, Muscat, Riyadh, Doha, and Al Ain, with curated packages for every traveler.',
},
{
  id: 'q3',
  category: 'Booking',
  question: 'Can I customize my itinerary?',
  answer: 'Absolutely. All our packages can be tailored to your preferences — let us know your interests, group size, and pace, and we will design a custom experience for you.',
},
{
  id: 'q4',
  category: 'Booking',
  question: 'What is your cancellation policy?',
  answer: 'Cancellations made 14+ days before departure receive a full refund. Cancellations within 7-14 days receive 50% refund. Cancellations within 7 days are non-refundable.',
},
{
  id: 'q5',
  category: 'Payment',
  question: 'What payment methods do you accept?',
  answer: 'We accept all major credit and debit cards, bank transfers, and select digital payment platforms. Payment plans are available for packages over AED 5,000.',
},
{
  id: 'q6',
  category: 'Payment',
  question: 'Do you offer payment plans?',
  answer: 'Yes — for bookings over AED 5,000, we offer flexible installment plans of up to 6 months at zero interest with eligible partners.',
},
{
  id: 'q7',
  category: 'Support',
  question: 'Is travel insurance included?',
  answer: 'Basic travel insurance is included with all our packages. Comprehensive coverage with additional benefits is available as an optional add-on.',
},
{
  id: 'q8',
  category: 'Support',
  question: 'How do I contact you during my trip?',
  answer: 'Our 24/7 support line is available throughout your journey. You will receive a dedicated trip coordinator contact and emergency hotline upon booking confirmation.',
},
];
