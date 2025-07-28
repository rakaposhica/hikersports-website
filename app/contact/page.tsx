import { Mail } from "lucide-react" // Removed Phone import
import Link from "next/link"

export default function ContactPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Contact Us</h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            We're here to help! Reach out to us for any wholesale inquiries or support.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1 text-center">
          {" "}
          {/* Changed grid to 1 column */}
          <div className="space-y-4">
            <Mail className="h-10 w-10 text-primary mx-auto" />
            <h2 className="text-2xl font-semibold">Email Us</h2>
            <p className="text-muted-foreground">For general inquiries, product information, or to place an order.</p>
            <Link href="mailto:info@hikersports.com" className="text-primary font-medium hover:underline text-lg">
              info@hikersports.com
            </Link>
          </div>
          {/* Phone section removed */}
        </div>
        <div className="mt-12 text-center space-y-4">
          <h2 className="text-3xl font-bold">Our Location</h2>
          <p className="text-muted-foreground">
            HikerSports Headquarters
            <br />
            123 Wholesale Way, Suite 400
            <br />
            Business City, BC 12345
            <br />
            Country
          </p>
        </div>
      </div>
    </section>
  )
}
