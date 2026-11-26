import type { Metadata } from "next";
import "./globals.css";

const title = "Caroline McLallen | Automation, Microsoft 365 & Web Operations";
const description =
  "Systems Analyst and Automation Specialist building Power Automate workflows and SharePoint applications, with experience in CMS operations and digital accessibility.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
