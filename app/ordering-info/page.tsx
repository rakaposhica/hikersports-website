import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OrderingInfoPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Ordering Information</h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Discover our products and easily get in touch for your wholesale needs.
          </p>
        </div>
        <div className="mt-12 space-y-10 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">How to Order</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              At HikerSports, we make wholesale ordering straightforward. Simply browse our extensive product catalog to
              find the items that meet your business needs.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/products">Browse Our Catalog</Link>
            </Button>
            <p className="text-lg leading-relaxed text-muted-foreground mt-8">
              Once you've identified the products you're interested in, please contact us directly for inquiries,
              pricing, and to place your order. Our team is ready to assist you.
            </p>
            <Button asChild size="lg" variant="outline" className="mt-6 bg-transparent">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
