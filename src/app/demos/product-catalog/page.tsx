import type { Metadata } from "next";
import ProductCatalogDemo from "./ProductCatalogDemo";

export const metadata: Metadata = {
  title: "Product Catalog UI Sample",
  description: "Generic product catalog interface with example records.",
  robots: { index: false, follow: false },
};

export default function ProductCatalogDemoPage() {
  return <ProductCatalogDemo />;
}
