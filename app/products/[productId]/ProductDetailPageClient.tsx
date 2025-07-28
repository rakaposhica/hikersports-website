"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getProductById } from "@/lib/data"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ProductDetailPageClient({ productId }: { productId: string }) {
  const product = getProductById(productId)

  if (!product) {
    notFound()
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const handleNextImage = () => {
    setDirection(1)
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length)
  }

  const handlePrevImage = () => {
    setDirection(-1)
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length)
  }

  const mailtoLink = `mailto:${product.inquiryEmail}?subject=${encodeURIComponent(`Inquiry about ${product.name}`)}`

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="relative flex justify-center items-center w-full max-w-md aspect-square mx-auto overflow-hidden rounded-lg bg-gray-100">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentImageIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src={product.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${product.name} - View ${currentImageIndex + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                  priority={currentImageIndex === 0}
                  unoptimized // Added unoptimized prop
                />
              </motion.div>
            </AnimatePresence>

            {product.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full z-10"
                  onClick={handlePrevImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full z-10"
                  onClick={handleNextImage}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}
          </div>
          <div className="grid gap-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{product.name}</h1>
              <p className="text-lg text-muted-foreground mt-2">
                Category: {product.category} / Subcategory: {product.subcategory}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Product Description</h2>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>
            <div className="space-y-4 border-t pt-6 mt-6">
              <h2 className="text-2xl font-semibold">Inquire About This Product</h2>
              <p className="text-lg">
                For wholesale inquiries, please contact us at:{" "}
                <Link href={`mailto:${product.inquiryEmail}`} className="text-primary font-medium hover:underline">
                  {product.inquiryEmail}
                </Link>
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href={mailtoLink}>Inquire by Email</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
