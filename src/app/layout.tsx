import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ChatButton } from "@/components/ui/chat-button";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  title: "Piyush Choudhari",
  description: "AI & Backend Engineer specializing in Python, ML, and full-stack development. Showcasing projects, open-source work, and blog posts.",
  authors: [{ name: "Piyush Choudhari" }],
  keywords: ["AI Engineer", "Backend Developer", "Machine Learning", "Python", "Full Stack"],
  robots: "index, follow",
  icons: {
    icon: "favicon-32x32.png",
    shortcut: "favicon.ico",
  },
  openGraph: {
    title: "Piyush Choudhari | AI & Backend Engineer",
    description: "Explore my portfolio featuring AI projects and ML tools. Learn from blogs and open-source contributions.",
    type: "website",
    url: "https://piyush-choudhari.vercel.app/",
    siteName: "Piyush Choudhari Portfolio",
    locale: "en_US",
    images: [{
      url: "https://piyush-choudhari.vercel.app/profile-pic.png",
      width: 1200,
      height: 630,
      alt: "Piyush Choudhari Portfolio"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush Choudhari | AI & Backend Engineer",
    description: "Showcasing projects in ML, Java, and full-stack. Learn more on my portfolio site.",
    creator: "@piyush_yip",
    images: ["https://piyush-choudhari.vercel.app/profile-pic.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className={poppins.className}>
        <ChatButton />
        {children}
      </body>
    </html>
  );
}
