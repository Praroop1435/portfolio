import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Praroop",
  description: "AI Engineer — building ML pipelines, LLM-powered systems, and agentic AI workflows.",
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
