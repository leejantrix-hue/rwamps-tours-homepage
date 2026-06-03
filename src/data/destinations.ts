import { ASSETS } from './site';

export type DestinationTag = 'Luxury' | 'Beach' | 'Shopping' | 'Cultural' | 'Desert' | 'History' | 'Premium' | 'Architecture' | 'Art' | 'Museum' | 'Adventure' | 'Mountains' | 'Nature' | 'Heritage' | 'Family' | 'Coastal' | 'Spa' | 'Modern';

export interface Destination {
id: string;
name: string;
city: string;
image: string;
price: number;            // AED per person
rating: number;
groupSize: number;        // max people
groupLabel: string;       // "8 people"
location: string;         // street-level
tags: DestinationTag[];
duration: string;         // "5 days"
maxLabel: string;         // "8 max"
}

export const DESTINATIONS: Destination[] = [
{
  id: 'dubai',
  name: 'Dubai',
  city: 'DUBAI',
  image: ASSETS.userOne,
  price: 2400,
  rating: 4.8,
  groupSize: 8,
  groupLabel: '8 people',
  location: 'Downtown Dubai - Near Burj Khalifa',
  tags: ['Luxury', 'Beach', 'Shopping'],
  duration: '5 days',
  maxLabel: '8 max',
},
{
  id: 'riyadh',
  name: 'Riyadh',
  city: 'RIYADH',
  image: ASSETS.toursTwo,
  price: 2100,
  rating: 4.6,
  groupSize: 6,
  groupLabel: '6 people',
  location: 'King Abdulaziz Road, Al-Murabba District',
  tags: ['Cultural', 'Desert', 'History'],
  duration: '4 days',
  maxLabel: '6 max',
},
{
  id: 'abu-dhabi',
  name: 'Abu Dhabi',
  city: 'ABU DHABI',
  image: ASSETS.toursThree,
  price: 2900,
  rating: 4.9,
  groupSize: 10,
  groupLabel: '10 people',
  location: 'Sheikh Zayed Grand Mosque Area',
  tags: ['Premium', 'Architecture', 'Luxury'],
  duration: '6 days',
  maxLabel: '10 max',
},
{
  id: 'sharjah',
  name: 'Sharjah',
  city: 'SHARJAH',
  image: ASSETS.toursFour,
  price: 1800,
  rating: 4.4,
  groupSize: 4,
  groupLabel: '4 people',
  location: 'Al Qasba Cultural District',
  tags: ['Cultural', 'Art', 'Museum'],
  duration: '3 days',
  maxLabel: '4 max',
},
{
  id: 'fujairah',
  name: 'Fujairah',
  city: 'FUJAIRAH',
  image: ASSETS.toursFive,
  price: 3200,
  rating: 4.7,
  groupSize: 12,
  groupLabel: '12 people',
  location: 'East Coast Mountains & Beaches',
  tags: ['Adventure', 'Beach', 'Mountains'],
  duration: '7 days',
  maxLabel: '12 max',
},
{
  id: 'al-ain',
  name: 'Al Ain',
  city: 'AL AIN',
  image: ASSETS.toursFour,
  price: 1950,
  rating: 4.5,
  groupSize: 6,
  groupLabel: '6 people',
  location: 'Oasis City, Garden City Region',
  tags: ['Nature', 'Heritage', 'Family'],
  duration: '4 days',
  maxLabel: '6 max',
},
{
  id: 'muscat',
  name: 'Muscat',
  city: 'MUSCAT',
  image: ASSETS.toursThree,
  price: 2750,
  rating: 4.8,
  groupSize: 8,
  groupLabel: '8 people',
  location: 'Oman Coastal Road, Muttrah Area',
  tags: ['Luxury', 'Coastal', 'Spa'],
  duration: '5 days',
  maxLabel: '8 max',
},
{
  id: 'doha',
  name: 'Doha',
  city: 'DOHA',
  image: ASSETS.toursTwo,
  price: 2200,
  rating: 4.6,
  groupSize: 6,
  groupLabel: '6 people',
  location: 'West Bay, Pearl District',
  tags: ['Modern', 'Shopping', 'Luxury'],
  duration: '4 days',
  maxLabel: '6 max',
},
];

// Filter pills — values must match actual destination.tags entries (plus "All"
// as the show-everything default). Order picked for visual rhythm in the UI.
export const DESTINATION_FILTERS = [
'All',
'Luxury',
'Beach',
'Cultural',
'Adventure',
'Desert',
'Mountains',
'Heritage',
] as const;

// Search Section dropdowns
export const SEARCH_LOCATIONS = [
'Abu Dhabi',
'Dubai',
'Ajman',
'Fujairah',
'Ras Al Khaimah',
'Umm Al Quwain',
'Sharjah',
] as const;

// Budget bands shown in the SearchBar dropdown.
// Exported as BUDGET_OPTIONS (consumer name) and aliased as SEARCH_BUDGETS for legacy callers.
export const BUDGET_OPTIONS = [
'AED 1000 - 2500',
'AED 2600 - 5000',
'AED 5000 - 7500',
'AED 7500 - 10000',
'AED 10000 - 15000',
'AED 15000 - 20000',
] as const;

export const SEARCH_BUDGETS = BUDGET_OPTIONS;
