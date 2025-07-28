export type Product = {
  id: string
  name: string
  category: string // Keeping for data, but not used for routing/filtering
  subcategory: string // Keeping for data, but not used for routing/filtering
  description: string
  images: string[]
  inquiryEmail: string
}

export const products: Product[] = [
  {
    id: "workwear-vest-001",
    name: "High-Visibility Safety Vest",
    category: "Workwear",
    subcategory: "Vests",
    description:
      "Durable, high-visibility safety vest with reflective strips for enhanced safety in low-light conditions. Ideal for construction, roadwork, and industrial environments. Made from breathable mesh fabric for comfort.",
    images: ["/placeholder.svg?height=400&width=400"],
    inquiryEmail: "sales@hikersports.com",
  },
  {
    id: "workwear-tshirt-001",
    name: "Heavy-Duty Work T-Shirt",
    category: "Workwear",
    subcategory: "T-shirts",
    description:
      "Reinforced cotton t-shirt designed for tough work environments. Features moisture-wicking properties and a comfortable fit for all-day wear. Available in various sizes and colors.",
    images: ["/placeholder.svg?height=400&width=400"],
    inquiryEmail: "sales@hikersports.com",
  },
  {
    id: "workwear-coverall-001",
    name: "Industrial Grade Coveralls",
    category: "Workwear",
    subcategory: "Coveralls",
    description:
      "Full-body protection coveralls made from tear-resistant fabric. Equipped with multiple pockets and reinforced knees for durability. Suitable for mechanics, painters, and general industrial use.",
    images: ["/placeholder.svg?height=400&width=400"],
    inquiryEmail: "sales@hikersports.com",
  },
  {
    id: "workwear-pants-001",
    name: "Rugged Cargo Work Pants",
    category: "Workwear",
    subcategory: "Pants",
    description:
      "Comfortable and durable cargo pants with ample storage pockets. Designed for flexibility and resistance to wear and tear, perfect for demanding jobs. Features a relaxed fit and reinforced stitching.",
    images: ["/placeholder.svg?height=400&width=400"],
    inquiryEmail: "sales@hikersports.com",
  },
  {
    id: "outdoor-jacket-001",
    name: "All-Weather Hiking Jacket",
    category: "Outdoor Gear",
    subcategory: "Jackets",
    description:
      "Waterproof and windproof jacket ideal for hiking and outdoor adventures. Lightweight and breathable, with adjustable hood and cuffs for a secure fit. Provides excellent protection against the elements.",
    images: ["/placeholder.svg?height=400&width=400"],
    inquiryEmail: "sales@hikersports.com",
  },
  {
    id: "outdoor-backpack-001",
    name: "Expedition Backpack 60L",
    category: "Outdoor Gear",
    subcategory: "Backpacks",
    description:
      "Large capacity 60L backpack designed for multi-day expeditions. Features ergonomic design, padded straps, and multiple compartments for organized storage. Durable and water-resistant.",
    images: ["/placeholder.svg?height=400&width=400"],
    inquiryEmail: "sales@hikersports.com",
  },
  {
    id: "outdoor-footwear-001",
    name: "Waterproof Hiking Boots",
    category: "Outdoor Gear",
    subcategory: "Footwear",
    description:
      "High-performance waterproof hiking boots with superior grip and ankle support. Designed for rugged terrain and long treks, keeping your feet dry and comfortable. Features durable sole and cushioned interior.",
    images: ["/placeholder.svg?height=400&width=400"],
    inquiryEmail: "sales@hikersports.com",
  },
  {
    id: "safety-glove-001",
    name: "Cut-Resistant Work Gloves",
    category: "Safety Equipment",
    subcategory: "Gloves",
    description:
      "High-performance gloves offering excellent cut resistance and dexterity. Ideal for handling sharp objects and protecting hands in various industrial settings. Features a comfortable, snug fit.",
    images: ["/placeholder.svg?height=400&width=400"],
    inquiryEmail: "sales@hikersports.com",
  },
  {
    id: "safety-helmet-001",
    name: "Industrial Safety Helmet",
    category: "Safety Equipment",
    subcategory: "Head Protection",
    description:
      "Lightweight and durable safety helmet designed for head protection in construction and industrial environments. Adjustable fit for comfort and ventilation for extended wear.",
    images: ["/placeholder.svg?height=400&width=400"],
    inquiryEmail: "sales@hikersports.com",
  },
  {
    id: "HVT-001",
    name: "High Visibility T-Shirt",
    category: "Workwear",
    subcategory: "T-shirts",
    description:
      'A high-visibility t-shirt designed for safety and comfort. Made from 100% Polyester (130gsm), available in Lime Green and Orange. Features 2" reflective tape in WSIB configuration and meets CSA Z96 safety standards. Available in sizes Small, Medium, Large, X-Large, and XX-Large. Contact us for pricing.',
    images: ["/images/high-visibility-tshirt-orange.png", "/images/high-visibility-tshirt-lime.png"],
    inquiryEmail: "sales@hikersports.com",
  },
]

// Removed mainCategories, getProductsByCategory, getSubcategoriesForCategory as they are no longer used for routing
export const getProductById = (id: string) => products.find((p) => p.id === id)
