import { products } from "@/lib/data"
import ProductDetailPageClient from "./ProductDetailPageClient"

// generateStaticParams now only uses productId
export async function generateStaticParams() {
  const paths = products.map((product) => ({
    productId: product.id,
  }))
  return paths
}

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const { productId } = params

  return <ProductDetailPageClient productId={productId} />
}
