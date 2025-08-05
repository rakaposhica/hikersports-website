import Link from "next/link"
import Image from "next/image" // Ensure Image component is imported
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/warehouse-background.png" // New warehouse image
          alt="Modern warehouse with shelves of boxes"
          fill
          style={{ objectFit: "cover", opacity: 0.6 }} // Adjust opacity for text readability
          className="absolute inset-0 z-0"
          priority // Load this image early as it's in the hero
        />
        {/* Content */}
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          {" "}
          {/* Changed text color to white */}
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              HikerSports: Your Wholesale Partner
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white">
              {" "}
              {/* Changed text color to white */}
              Providing high-quality workwear, outdoor gear, and safety equipment for businesses.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Button asChild className="px-8 py-3 text-lg bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/products">Explore Our Catalog</Link>
              </Button>
              <Button
                asChild
                className="px-8 py-3 text-lg bg-primary text-primary-foreground hover:bg-primary/90" // Changed to match the first button
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
