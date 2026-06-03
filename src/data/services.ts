import type { LucideIcon } from 'lucide-react';
import { Plane, Hotel, Map, Headphones, Award, Users, ShieldCheck, Sparkles } from 'lucide-react';

export interface ServiceItem {
id: string;
title: string;
description: string;
icon: LucideIcon;
}

// "Our Services" — 3 cards visible in screenshot
export const SERVICES: ServiceItem[] = [
{
  id: 'flight-booking',
  title: 'Flight Booking',
  description: 'Best deals on flights to all major destinations worldwide.',
  icon: Plane,
},
{
  id: 'hotel-stays',
  title: 'Hotel Stays',
  description: 'Premium accommodation partners across the UAE and Middle East.',
  icon: Hotel,
},
{
  id: 'tour-packages',
  title: 'Tour Packages',
  description: 'Curated itineraries designed by local destination experts.',
  icon: Map,
},
{
  id: 'support',
  title: '24/7 Support',
  description: 'Round-the-clock assistance throughout your journey.',
  icon: Headphones,
},
];

// "Why Choose Us?" — 3 cards next to airplane illustration
export const WHY_CHOOSE_US: ServiceItem[] = [
{
  id: 'expert-team',
  title: 'Expert Team',
  description: 'Seasoned travel specialists with deep regional knowledge.',
  icon: Award,
},
{
  id: 'best-prices',
  title: 'Best Prices',
  description: 'Direct partnerships mean better rates passed on to you.',
  icon: Sparkles,
},
{
  id: 'safety-first',
  title: 'Safety First',
  description: 'Every itinerary vetted for safety, comfort, and reliability.',
  icon: ShieldCheck,
},
{
  id: 'small-groups',
  title: 'Small Groups',
  description: 'Intimate group sizes for a personalized travel experience.',
  icon: Users,
},
];

// Stats row shown under testimonials (large green numbers)
export interface Stat {
value: string;
label: string;
}

export const STATS: Stat[] = [
{ value: '30+', label: 'Tour Guides' },
{ value: '1k+', label: 'Travelers' },
{ value: '50+', label: 'Destinations' },
{ value: '24/7', label: 'Support' },
];
