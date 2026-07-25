export const metadata = {
  title: 'Electrical Tips & News | Sparky Indro Blog',
  description: 'Expert advice, electrical safety tips, and news from Brisbane\'s leading electrician.',
};

export default function Layout({ children }) {
  return (
    <>
      <script id="schema-layout.js" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Sparky Indro Electrical Blog",
          "description": "Expert advice, safety tips, and electrical news.",
          "publisher": {
            "@type": "Organization",
            "name": "Sparky Indro"
          }
        })
      }} />
      {children}
    </>
  );
}