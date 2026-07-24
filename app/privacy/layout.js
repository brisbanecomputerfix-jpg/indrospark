export const metadata = {
  title: 'Privacy Policy | Sparky Indro',
  description: 'Privacy Policy and data handling for Sparky Indro.',
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Privacy Policy"
        })
      }} />
      {children}
    </>
  );
}