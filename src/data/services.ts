// Services rendered in the "Our Services" section.
// `icon` is a string key looked up in the consumer's local ICONS map
// (see src/components/sections/Services.tsx). Keep the keys in sync with that map:
//   'plane' | 'hotel' | 'map' | 'headphones'

export interface ServiceItem {
id: string;
title: string;
description: string;
icon: 'plane' | 'hotel' | 'map' | 'headphones';
}

export const SERVICES: ServiceItem[] = [
{
  id: 'flight-booking',
  title: 'Flight Booking',
  description: 'Best deals on flights to all major destinations worldwide.',
  icon: 'plane',
},
{
  id: 'hotel-stays',
  title: 'Hotel Stays',
  description: 'Premium accommodation partners across the UAE and Middle East.',
  icon: 'hotel',
},
{
  id: 'tour-packages',
  title: 'Tour Packages',
  description: 'Curated itineraries designed by local destination experts.',
  icon: 'map',
},
{
  id: 'support',
  title: '24/7 Support',
  description: 'Round-the-clock assistance throughout your journey.',
  icon: 'headphones',
},
];

// NOTE: WHY_CHOOSE_US and STATS used to live here but moved to data/site.ts
// to centralize "About us" content. Keep this file focused on services only.
