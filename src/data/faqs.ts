export interface FAQ {
id: string;
category: 'general' | 'booking' | 'payment' | 'support';
question: string;
answer: string;
}

export const FAQ_CATEGORIES = [
{ id: 'general', label: 'General' },
{ id: 'booking', label: 'Booking' },
{ id: 'payment', label: 'Payment' },
{ id: 'support', label: 'Support' },
] as const;

export const FAQS: FAQ[] = [
{
  id: 'q1',
  category: 'general',
  question: 'How do I book a tour package?',
  answer: 'You can book directly through our website by selecting a destination, choosing your dates, and completing the booking form. Our team will confirm your reservation within 24 hours.',
},
{
  id: 'q2',
  category: 'general',
  question: 'What destinations do you cover?',
  answer: 'We specialize in UAE and Middle East destinations including Dubai, Abu Dhabi, Sharjah, Fujairah, Muscat, Riyadh, Doha, and Al Ain, with curated packages for every traveler.',
},
{
  id: 'q3',
  category: 'booking',
  question: 'Can I customize my itinerary?',
  answer: 'Absolutely. All our packages can be tailored to your preferences — let us know your interests, group size, and pace, and we will design a custom experience for you.',
},
{
  id: 'q4',
  category: 'booking',
  question: 'What is your cancellation policy?',
  answer: 'Cancellations made 14+ days before departure receive a full refund. Cancellations within 7-14 days receive 50% refund. Cancellations within 7 days are non-refundable.',
},
{
  id: 'q5',
  category: 'payment',
  question: 'What payment methods do you accept?',
  answer: 'We accept all major credit and debit cards, bank transfers, and select digital payment platforms. Payment plans are available for packages over AED 5,000.',
},
{
  id: 'q6',
  category: 'payment',
  question: 'Do you offer payment plans?',
  answer: 'Yes — for bookings over AED 5,000, we offer flexible installment plans of up to 6 months at zero interest with eligible partners.',
},
{
  id: 'q7',
  category: 'support',
  question: 'Is travel insurance included?',
  answer: 'Basic travel insurance is included with all our packages. Comprehensive coverage with additional benefits is available as an optional add-on.',
},
{
  id: 'q8',
  category: 'support',
  question: 'How do I contact you during my trip?',
  answer: 'Our 24/7 support line is available throughout your journey. You will receive a dedicated trip coordinator contact and emergency hotline upon booking confirmation.',
},
];
