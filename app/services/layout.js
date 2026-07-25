export const metadata = {
  title: 'Electrical Services | Residential & Commercial | Sparky Indro',
  description: 'Comprehensive electrical services in Indooroopilly and Brisbane. Residential, Commercial, and 24/7 Emergency response.',
};

export default function Layout({ children }) {
  return (
    <>
      <script id="schema-layout.js" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Electrical Services",
          "provider": {
            "@type": "Electrician",
            "name": "Sparky Indro"
          },
          "serviceType": ["Residential", "Commercial", "Emergency"]
        })
      }} />
      {children}
    </>
  );
}