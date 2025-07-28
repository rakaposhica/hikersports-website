import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { products, type Product } from "@/lib/data"

export default function ProductsPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Product Catalog</h1>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our comprehensive range of professional-grade products.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product: Product) => (
            <Card
              key={product.id}
              className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/products/${product.id}`} className="block">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized // Added unoptimized prop
                />
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {product.category} / {product.subcategory}
                  </p>
                </CardHeader>
                <CardContent>
                  <span className="text-primary hover:underline">View Details</span>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
        {products.length === 0 && <div className="text-center text-muted-foreground py-12">No products found.</div>}
      </div>
    </section>
  )
}
