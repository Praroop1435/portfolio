import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Praroop Anand — AI Automation Developer",
  description: "AI Automation Developer — Agentic RAG pipelines, LLM SaaS platforms, and multi-channel automation systems.",
  icons: {
    icon: "https://github.com/praroop1435.png",
    shortcut: "https://github.com/praroop1435.png",
    apple: "https://github.com/praroop1435.png",
  },
  openGraph: {
    title: "Praroop",
    description: "Explore projects, skills, and contact info.",
    type: "website",
    url: "https://praroop.site",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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
          <main className="site-container">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
