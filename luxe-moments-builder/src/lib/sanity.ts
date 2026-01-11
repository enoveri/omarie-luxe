import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

export const sanityClient = createClient({
  projectId: "pd5ts6g8",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Types for Sanity documents
export interface SanityService {
  _id: string;
  title: string;
  description: string;
  image: SanityImageSource;
  order: number;
}

export interface SanityGalleryItem {
  _id: string;
  title: string;
  description?: string;
  category: string;
  location?: string;
  image: SanityImageSource;
}

export interface SanityTestimonial {
  _id: string;
  quote: string;
  name: string;
  event: string;
  order: number;
}

export interface SanityHeroImage {
  _id: string;
  image: SanityImageSource;
  alt: string;
  order: number;
}

export interface SanitySiteSettings {
  _id: string;
  siteTitle: string;
  tagline: string;
  description: string;
  whatsappNumber: string;
  instagramHandle: string;
  logo?: SanityImageSource;
}

// GROQ Queries
export const queries = {
  services: `*[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    image,
    order
  }`,

  galleryItems: `*[_type == "galleryItem"] | order(_createdAt desc) {
    _id,
    title,
    description,
    category,
    location,
    image
  }`,

  testimonials: `*[_type == "testimonial"] | order(order asc) {
    _id,
    quote,
    name,
    event,
    order
  }`,

  heroImages: `*[_type == "heroImage"] | order(order asc) {
    _id,
    image,
    alt,
    order
  }`,

  siteSettings: `*[_type == "siteSettings"][0] {
    _id,
    siteTitle,
    tagline,
    description,
    whatsappNumber,
    instagramHandle,
    logo
  }`,
};
