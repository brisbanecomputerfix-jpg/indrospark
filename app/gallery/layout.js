import Script from "next/script";
export const metadata = {
  title: 'Project Gallery | Sparky Indro',
  description: 'View our recent electrical projects in Indooroopilly and Brisbane, including switchboard upgrades, LED lighting, and outdoor power.',
};

export default function Layout({ children }) {
  return (
    <>
      <Script id="schema-layout.js" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Sparky Indro Electrical Projects",
          "description": "A collection of our recent high-quality electrical installations."
        })
      }} />
      {children}
    </>
  );
}