export const metadata = {
  title: 'Interactive Electrical Troubleshooting | Sparky Indro',
  description: 'Self-diagnose common electrical faults with our interactive troubleshooting guide.',
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "What should I do if I have total power loss?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Try unplugging all appliances, then reset the switch. If it trips again, an appliance is faulty. If it won't reset with nothing plugged in, you need an electrician."
            }
          }]
        })
      }} />
      {children}
    </>
  );
}