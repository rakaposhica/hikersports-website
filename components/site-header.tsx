"use client"

import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Mountain } from "lucide-react"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Mountain className="h-6 w-6" />
          <span>HikerSports</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium hover:underline underline-offset-4">
            Products
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
          <Link href="/ordering-info" className="text-sm font-medium hover:underline underline-offset-4">
            Ordering Info / FAQ
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-6">
              <Mountain className="h-6 w-6" />
              <span>HikerSports</span>
            </Link>
            <nav className="grid gap-4 text-lg font-medium">
              <Link href="/" className="hover:underline underline-offset-4">
                Home
              </Link>
              <Link href="/products" className="hover:underline underline-offset-4">
                Products
              </Link>
              <Link href="/about" className="hover:underline underline-offset-4">
                About Us
              </Link>
              <Link href="/contact" className="hover:underline underline-offset-4">
                Contact
              </Link>
              <Link href="/ordering-info" className="hover:underline underline-offset-4">
                Ordering Info / FAQ
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
