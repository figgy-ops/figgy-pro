import type { Metadata } from "next";
import ProductCatalogDemo from "./ProductCatalogDemo";

export const metadata: Metadata = {
  title: "Sanitized Product Inventory UI Demo | Caroline McLallen",
  description:
    "A sanitized interactive interface sample for a multi-source product inventory.",
  robots: { index: false, follow: false },
};

export default function ProductCatalogDemoPage() {
  return <ProductCatalogDemo />;
}
