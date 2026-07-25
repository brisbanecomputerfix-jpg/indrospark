import Script from "next/script";
export const metadata = {
  title: 'Service Areas | Brisbane Electrician | Sparky Indro',
  description: 'Sparky Indro serves Indooroopilly, Toowong, St Lucia, and all surrounding Brisbane suburbs with premium electrical services.',
};

export default function Layout({ children }) {
  return (
    <>
      <Script id="schema-layout.js" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Service Areas",
          "description": "We serve Indooroopilly and surrounding Brisbane suburbs."
        })
      }} />
      {children}
    </>
  );
}