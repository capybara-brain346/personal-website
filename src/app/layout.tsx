import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piyush Choudhari",
  description: "AI & Backend Engineer specializing in Python, ML, and full-stack development. Showcasing projects, open-source work, and blog posts.",
  icons: {
    icon: "favicon-32x32.png",
    shortcut: "favicon.ico",
  },
  openGraph: {
    title: "Piyush Choudhari | AI & Backend Engineer",
    description: "Explore my portfolio featuring AI projects and ML tools. Learn from blogs and open-source contributions.",
    type: "website",
    url: "https://piyush-choudhari.vercel.app/",
    images: [{
      url: "https://piyush-choudhari.vercel.app/profile-pic.png",
      width: 1200,
      height: 630,
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-background text-foreground overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
