export const metadata = {
  title: 'Get a Free Quote | Sparky Indro',
  description: 'Request a free, no-obligation quote for your electrical needs in Brisbane today.',
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Free Electrical Quote",
          "description": "Get a free quote from Sparky Indro."
        })
      }} />
      {children}
    </>
  );
}