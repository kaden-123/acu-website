'use client';

import { useEffect } from 'react';

const MetaTags = ({ section }) => {
  // Define metadata for each section
  const metadata = {
    hero: {
      title: "Acu Health Clinic | Natural Healing in Lynnwood, WA",
      description: "Professional acupuncture services for pain relief, stress reduction, and holistic wellness.",
      keywords: "acupuncture, wellness, pain relief, Lynnwood, traditional Chinese medicine",
    },
    bio: {
      title: "About Our Practitioner | Acu Health Clinic",
      description: "Meet our licensed acupuncturist with 15+ years of experience and over 2 thousand patients treated every year",
      keywords: "acupuncturist, about us, practitioner bio, beijing acupuncturist, experienced acupuncturist"
    },
    services: {
      title: "Our Acupuncture Services | Acu Health Clinic",
      description: "Specialized treatments for pain management, fertility, stress relief, and cosmetic acupuncture. Personalized care plans.",
      keywords: "acupuncture services, pain management, fertility acupuncture, stress relief",
    },
    contact: {
      title: "Contact Us | Acu Health Clinic",
      description: "Book an appointment at our Lynnwood clinic. We accept most insurance plans. Open Tuesday-Sunday.",
      keywords: "acupuncture appointment, contact acupuncture clinic, Lynnwood acupuncturist",
    },
    FAQ: {
      title: "Questions | Acu Health Clinic",
      description: "Commonly asked questions about our clinic and acupuncture.",
      keywords: "acupuncture questions, acu health questions, acu health clinic questions, acu health faq",
    }
  };

  // Get metadata for current section
  const { title, description, keywords } = metadata[section] || metadata.hero;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create description meta tag
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Update or create keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;

    // Update OpenGraph tags
    const updateMetaTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:url', window.location.href);

  }, [section, title, description, keywords]);

  return null; // This component doesn't render anything
};

export default MetaTags;