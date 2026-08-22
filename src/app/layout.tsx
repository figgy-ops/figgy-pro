import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caroline McLallen | Automation Specialist & Systems Analyst",
  description:
    "Technical résumé for Caroline McLallen, an Automation Specialist and Systems Analyst working across automation, integrations, enterprise applications, SharePoint, web development, governance, and infrastructure.",
  openGraph: {
    title: "Caroline McLallen | Automation Specialist & Systems Analyst",
    description:
      "Automation, systems integration, enterprise applications, and platform operations.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Caroline McLallen | Automation Specialist & Systems Analyst",
    description:
      "Automation, systems integration, enterprise applications, and platform operations.",
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
