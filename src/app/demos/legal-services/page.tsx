import type { Metadata } from "next";
import LegalServicesDemo from "./LegalServicesDemo";

export const metadata: Metadata = {
  title: "Sanitized Legal Services UI Demo | Caroline McLallen",
  description:
    "A sanitized interactive interface sample based on a legal services website project.",
  robots: { index: false, follow: false },
};

export default function LegalServicesDemoPage() {
  return <LegalServicesDemo />;
}
