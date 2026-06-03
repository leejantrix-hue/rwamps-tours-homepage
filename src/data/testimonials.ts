import { ASSETS } from './site';

export interface Testimonial {
id: string;
name: string;
location: string;
rating: number;
avatar: string;
quote: string;
}

// 3 testimonial cards visible in screenshot — center one is highlighted
export const TESTIMONIALS: Testimonial[] = [
{
  id: 't1',
  name: 'Ahmed Hassan',
  location: 'Dubai, UAE',
  rating: 5,
  avatar: ASSETS.userOne,
  quote: 'An absolutely incredible experience from start to finish. The team at Rwamps Tours organized every detail perfectly, and our trip across the UAE was unforgettable.',
},
{
  id: 't2',
  name: 'Sarah Mitchell',
  location: 'London, UK',
  rating: 5,
  avatar: ASSETS.userTwo,
  quote: 'Best travel decision we ever made. The desert safari, the cultural tours, the luxury hotels — everything exceeded expectations. Will definitely book again.',
},
{
  id: 't3',
  name: 'Rajesh Kumar',
  location: 'Mumbai, India',
  rating: 5,
  avatar: ASSETS.userThree,
  quote: 'Professional service and incredible attention to detail. Our family tour of Abu Dhabi and Dubai was seamlessly arranged. Highly recommended for first-time visitors.',
},
];
