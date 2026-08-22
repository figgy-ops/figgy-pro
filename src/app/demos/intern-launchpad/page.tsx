import type { Metadata } from "next";
import InternLaunchpadDemo from "./InternLaunchpadDemo";

export const metadata: Metadata = {
  title: "Sanitized Intern Program Workspace Demo | Caroline McLallen",
  description:
    "A sanitized interactive interface sample based on an SPFx intern program workspace.",
  robots: { index: false, follow: false },
};

export default function InternLaunchpadDemoPage() {
  return <InternLaunchpadDemo />;
}
