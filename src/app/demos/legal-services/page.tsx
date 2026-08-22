import type { Metadata } from "next";
import LegalServicesDemo from "./LegalServicesDemo";

export const metadata: Metadata = {
  title: "Legal Services UI Sample",
  description: "Generic legal services interface with example content.",
  robots: { index: false, follow: false },
};

export default function LegalServicesDemoPage() {
  return <LegalServicesDemo />;
}
