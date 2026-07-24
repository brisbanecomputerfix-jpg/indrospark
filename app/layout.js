
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollMeter from "@/components/ScrollMeter";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "600", "700", "800"]
});

export const metadata = {
  title: "Best Electrician in Indooroopilly | Sparky Indro",
  description: "Sparky Indro provides the best electrical services in Indooroopilly with 30 years of experience. Call 0468 991 300 today.",
  openGraph: {
    title: "Best Electrician in Indooroopilly | Sparky Indro",
    description: "Sparky Indro provides the best electrical services in Indooroopilly with 30 years of experience. Call 0468 991 300 today.",
    url: "https://sparkyindro.com.au",
    siteName: "Sparky Indro",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Electrician",
            "name": "Sparky Indro",
            "image": "https://sparkyindro.com.au/logo.svg",
            "@id": "https://sparkyindro.com.au",
            "url": "https://sparkyindro.com.au",
            "telephone": "0468 991 300",
            "areaServed": {
              "@type": "City",
              "name": "Indooroopilly"
            }
          })
        }} />
      </head>
      <body className={outfit.variable}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark">
          <ScrollMeter />
          <Navbar />
          {children}
          <Footer />
          <FloatingCallButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
