import Script from "next/script";
export const metadata = {
  title: 'Terms and Conditions | Sparky Indro',
  description: 'Terms and Conditions for electrical services provided by Sparky Indro.',
};

export default function Layout({ children }) {
  return (
    <>
      <Script id="schema-layout.js" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Terms and Conditions"
        })
      }} />
      {children}
    </>
  );
}