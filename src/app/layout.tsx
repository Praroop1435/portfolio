import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import SocialDock from "@/components/SocialDock";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://praroop.site"),
  title: {
    default: "Praroop Anand",
    template: "%s | Praroop Anand",
  },
  description: "AI Engineer - Focused on Scalable Backend Architecture, AI Agents, and multi-channel automation systems.",
  authors: [{ name: "Praroop Anand", url: "https://praroop.site" }],
  creator: "Praroop Anand",
  keywords: [
    "Praroop Anand",
    "AI Engineer",
    "Agentic RAG",
    "LLM SaaS",
    "Automation Engineer",
    "FastAPI",
    "Python",
    "Next.js",
  ],
  icons: {
    icon: "https://github.com/praroop1435.png",
    shortcut: "https://github.com/praroop1435.png",
    apple: "https://github.com/praroop1435.png",
  },
  openGraph: {
    title: "Praroop Anand | AI Engineer",
    description: "Building Agentic Workflows & Production AI SaaS: RAG pipelines, LLM platforms, and automation systems.",
    url: "https://praroop.site",
    siteName: "Praroop Anand",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Praroop Anand | AI Engineer Portfolio Preview",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@PraroopX",
    creator: "@PraroopX",
    title: "Praroop Anand | AI Engineer",
    description: "Building Agentic Workflows & Production AI SaaS: RAG pipelines, LLM platforms, and automation systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Praroop Anand | AI Engineer Portfolio Preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "y6xh3ob9of");
          `}
        </Script>
        <ThemeProvider>
          <Loader />
          <Navbar />
          <SocialDock />
          <main className="site-container">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
