export const CONTACT_SUBJECTS = [
'General Inquiry',
'Tour Booking',
'Custom Itinerary',
'Group Travel',
'Corporate Travel',
'Other',
] as const;

export type ContactSubject = typeof CONTACT_SUBJECTS[number];

export interface ContactFormData {
name: string;
email: string;
phone: string;
subject: string;
message: string;
}

export const DEFAULT_CONTACT_FORM: ContactFormData = {
name: '',
email: '',
phone: '',
subject: '',
message: '',
};

export const VALIDATION_MESSAGES = {
required: 'This field is required',
invalidEmail: 'Please enter a valid email address',
invalidPhone: 'Please enter a valid phone number',
messageTooShort: 'Message must be at least 10 characters',
} as const;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_REGEX = /^[+]?[\d\s()-]{7,20}$/;

export const validateContactForm = (data: ContactFormData): Partial<Record<keyof ContactFormData, string>> => {
const errors: Partial<Record<keyof ContactFormData, string>> = {};
if (!data.name.trim()) errors.name = VALIDATION_MESSAGES.required;
if (!data.email.trim()) errors.email = VALIDATION_MESSAGES.required;
else if (!EMAIL_REGEX.test(data.email)) errors.email = VALIDATION_MESSAGES.invalidEmail;
if (data.phone && !PHONE_REGEX.test(data.phone)) errors.phone = VALIDATION_MESSAGES.invalidPhone;
if (!data.message.trim()) errors.message = VALIDATION_MESSAGES.required;
else if (data.message.trim().length < 10) errors.message = VALIDATION_MESSAGES.messageTooShort;
return errors;
};
