import type { Metadata } from "next";
import ProgramWorkspaceDemo from "./ProgramWorkspaceDemo";

export const metadata: Metadata = {
  title: "Program Workspace UI Sample",
  description: "Generic SPFx interface sample with example data.",
  robots: { index: false, follow: false },
};

export default function ProgramWorkspacePage() {
  return <ProgramWorkspaceDemo />;
}
