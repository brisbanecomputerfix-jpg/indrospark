export const metadata = {
  title: 'Transparent Electrician Pricing | Sparky Indro',
  description: '$110 call-out fee and honest pricing for all electrical jobs in Indooroopilly. Fixed price quotes available.',
};

export default function Layout({ children }) {
  return (
    <>
      <script id="schema-layout.js" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Offer",
          "name": "Electrician Call-Out Fee",
          "price": "110.00",
          "priceCurrency": "AUD",
          "description": "Standard service call-out fee including first 30 minutes."
        })
      }} />
      {children}
    </>
  );
}