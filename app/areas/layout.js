import Script from "next/script";
export const metadata = {
  title: 'Service Areas | Brisbane Electrician | Sparky Indro',
  description: 'Sparky Indro serves Indooroopilly, Toowong, St Lucia, and all surrounding Brisbane suburbs with premium electrical services.',
};

export default function Layout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "Sparky Indro",
    "image": "https://sparkyindro.com.au/logo.png",
    "url": "https://sparkyindro.com.au",
    "telephone": "1300 123 456",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Moggill Rd",
      "addressLocality": "Indooroopilly",
      "addressRegion": "QLD",
      "postalCode": "4068",
      "addressCountry": "AU"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Brisbane",
        "sameAs": "https://en.wikipedia.org/wiki/Brisbane"
      },
      {
        "@type": "State",
        "name": "Queensland"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <>
      <Script id="schema-areas-layout" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData)
      }} />
      {children}
    </>
  );
}
