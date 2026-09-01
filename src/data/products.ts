export type Category =
  | 'T-Shirts'
  | 'Shirts & Polos'
  | 'Pants'
  | 'Shorts & Swim'
  | 'Hoodies & Knitwear'
  | 'Accessories'

export interface Product {
  slug: string
  name: string
  category: Category
  price: number
  compareAt?: number
  images: string[]
  colors: string[]
  sizes: string[]
  bestseller?: boolean
  isNew?: boolean
  description: string
  details: string[]
  /**
   * Country of manufacture. Intentionally unset until a supplier is contracted —
   * an origin claim on a product page is a factual representation, so it must
   * reflect the actual factory. Set this per product once sourcing is locked.
   */
  origin?: string
}

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&fit=crop&auto=format`

export const products: Product[] = [
  // T-Shirts
  {
    slug: 'riviera-pique-tee',
    name: 'Riviera Piqué Tee',
    category: 'T-Shirts',
    price: 58,
    compareAt: 68,
    images: [img('photo-1775306413232-fecd45367613'), img('photo-1618453292459-53424b66bb6a')],
    colors: ['Off White', 'Navy', 'Sage'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    bestseller: true,
    description:
      'A heavyweight piqué tee cut with a relaxed shoulder and a slightly cropped body. Garment-washed for a lived-in hand-feel from the first wear.',
    details: ['220gsm cotton piqué', 'Garment-dyed', 'Relaxed fit'],
  },
  {
    slug: 'cala-vista-tee',
    name: 'Cala Vista Tee',
    category: 'T-Shirts',
    price: 52,
    images: [img('photo-1667844485987-80c84a3c3210'), img('photo-1544726110-a3bb72254a6b')],
    colors: ['Stone', 'Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: true,
    description: 'Our essential tee, built from a substantial cotton jersey that holds its shape wash after wash.',
    details: ['200gsm combed cotton', 'Pre-shrunk', 'Regular fit'],
  },
  {
    slug: 'notre-voyage-tee',
    name: 'Voyage Stripe Tee',
    category: 'T-Shirts',
    price: 64,
    compareAt: 76,
    images: [img('photo-1615851947829-3641ababa187'), img('photo-1602653018235-6fdfc8a4ae8d')],
    colors: ['Navy Stripe', 'White Stripe'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    bestseller: true,
    description: 'A Breton-inspired stripe tee in soft interlock cotton, cut for an easy, boxy fit.',
    details: ['180gsm cotton interlock', 'Boxy fit', 'Ribbed crewneck'],
  },
  {
    slug: 'amalfi-graphic-tee',
    name: 'Amalfi Graphic Tee',
    category: 'T-Shirts',
    price: 56,
    images: [img('photo-1502389614483-e475fc34407e'), img('photo-1629426958003-35a5583b2977')],
    colors: ['Washed Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: true,
    description: 'A subtle puff-print crest on heavyweight jersey, washed for a soft, worn-in finish.',
    details: ['210gsm cotton jersey', 'Puff print crest', 'Regular fit'],
  },

  // Shirts & Polos
  {
    slug: 'positano-linen-shirt',
    name: 'Positano Linen Shirt',
    category: 'Shirts & Polos',
    price: 118,
    compareAt: 138,
    images: [img('photo-1782178392415-d219c2217b2e'), img('photo-1782178392325-2d033dea7b3a')],
    colors: ['Light Blue', 'White', 'Sand', 'Olive'],
    sizes: ['S', 'M', 'L', 'XL'],
    bestseller: true,
    description: '100% European linen, cut with a relaxed camp collar and a slightly boxy body for warm-weather ease.',
    details: ['100% linen', 'Camp collar', 'Relaxed fit'],
  },
  {
    slug: 'chevron-polo',
    name: 'Chevron Knit Polo',
    category: 'Shirts & Polos',
    price: 112,
    images: [img('photo-1660598524065-6116cdc3163e'), img('photo-1782329993533-bc53478a82c5')],
    colors: ['Beige', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
    bestseller: true,
    description: 'A textured chevron-knit polo in a soft cotton-blend yarn, finished with a ribbed collar and cuffs.',
    details: ['Cotton-modal blend', 'Ribbed collar & cuffs', 'Regular fit'],
  },
  {
    slug: 'regatta-long-sleeve',
    name: 'Regatta Long Sleeve',
    category: 'Shirts & Polos',
    price: 96,
    images: [img('photo-1772155055461-3c263c159a1e'), img('photo-1772155055378-e55748970e9e')],
    colors: ['White', 'Light Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: true,
    description: 'A poplin long-sleeve shirt with a soft point collar, cut close but comfortable through the body.',
    details: ['100% cotton poplin', 'Point collar', 'Tailored fit'],
  },
  {
    slug: 'wool-overshirt',
    name: 'Wool Overshirt',
    category: 'Shirts & Polos',
    price: 212,
    compareAt: 248,
    images: [img('photo-1786540610338-0fec664e7db4'), img('photo-1778856920032-328a86d21a22')],
    colors: ['Camel', 'Charcoal'],
    sizes: ['S', 'M', 'L', 'XL'],
    bestseller: true,
    description: 'A brushed wool-blend overshirt built for layering, with a soft hand and structured shoulder.',
    details: ['Wool-blend melton', 'Chest pockets', 'Boxy fit'],
  },

  // Pants
  {
    slug: 'sorrento-striped-trouser',
    name: 'Sorrento Striped Trouser',
    category: 'Pants',
    price: 108,
    images: [img('photo-1599822656611-72433872cb09'), img('photo-1599950755142-d471f509a534')],
    colors: ['Navy Stripe'],
    sizes: ['28', '30', '32', '34', '36'],
    bestseller: true,
    description: 'A drawstring-waist trouser in a soft cotton-linen stripe, tapered for a clean line to the ankle.',
    details: ['Cotton-linen blend', 'Elastic & drawstring waist', 'Tapered fit'],
  },
  {
    slug: 'harbor-pleated-trouser',
    name: 'Harbor Pleated Trouser',
    category: 'Pants',
    price: 124,
    compareAt: 142,
    images: [img('photo-1706905615668-4a0d05f9d780'), img('photo-1619470148547-0adbfc64b595')],
    colors: ['Stone', 'Olive', 'Black'],
    sizes: ['28', '30', '32', '34', '36'],
    description: 'A relaxed pleated trouser in mid-weight twill, finished with a soft break at the hem.',
    details: ['Cotton twill', 'Double pleat front', 'Relaxed fit'],
  },
  {
    slug: 'linen-trouser-relaxed',
    name: 'Linen Trouser, Relaxed Fit',
    category: 'Pants',
    price: 104,
    images: [img('photo-1721477409039-3b3a0a2f9f25'), img('photo-1694180919451-0537f0676fe9')],
    colors: ['Sand', 'White', 'Sage'],
    sizes: ['28', '30', '32', '34', '36'],
    isNew: true,
    description: 'Our warm-weather staple: pure linen with an easy drape and a relaxed leg from hip to hem.',
    details: ['100% linen', 'Side pockets', 'Relaxed fit'],
  },
  {
    slug: 'yacht-club-striped-pants',
    name: 'Yacht Club Striped Pants',
    category: 'Pants',
    price: 112,
    compareAt: 128,
    images: [img('photo-1763913087165-cbaa3c806c98'), img('photo-1587425206783-d51b608ea87e')],
    colors: ['Cream Stripe'],
    sizes: ['28', '30', '32', '34', '36'],
    bestseller: true,
    description: 'A crisp cotton-blend trouser in a nautical stripe, cut with a straight leg and clean front.',
    details: ['Cotton blend', 'Flat front', 'Straight fit'],
  },

  // Shorts & Swim
  {
    slug: 'portofino-swim-short',
    name: 'Portofino Swim Short',
    category: 'Shorts & Swim',
    price: 78,
    images: [img('photo-1783133542815-87afc5be7d0c'), img('photo-1780778062307-78ee8dfb99f7')],
    colors: ['Ocean Blue', 'Terracotta'],
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: true,
    description: 'A quick-dry swim short with a mid-length inseam and mesh lining, finished with a webbed drawstring.',
    details: ['Recycled polyester', 'Mesh lining', 'Mid-length inseam'],
  },
  {
    slug: 'mosaic-swim-short',
    name: "Mosaic D'été Swim Short",
    category: 'Shorts & Swim',
    price: 86,
    compareAt: 98,
    images: [img('photo-1591737591066-7b8c9a2a6940'), img('photo-1736588290326-7ef2507e4b42')],
    colors: ['Blue Mosaic'],
    sizes: ['S', 'M', 'L', 'XL'],
    bestseller: true,
    description: 'An archive-print swim short in a mosaic tile pattern, cut from our signature quick-dry cloth.',
    details: ['Recycled polyester', 'All-over print', 'Mid-length inseam'],
  },
  {
    slug: 'linen-walk-short',
    name: 'Linen Walk Short',
    category: 'Shorts & Swim',
    price: 82,
    images: [img('photo-1617951907145-53f6eb87a3a3'), img('photo-1618611402893-53dc0858bb53')],
    colors: ['Sand', 'Navy'],
    sizes: ['28', '30', '32', '34', '36'],
    description: 'A tailored linen short for warm days on land, cut just above the knee with a clean front.',
    details: ['100% linen', 'Side pockets', 'Tailored fit'],
  },
  {
    slug: 'terry-short',
    name: 'French Terry Short',
    category: 'Shorts & Swim',
    price: 68,
    compareAt: 78,
    images: [img('photo-1748432224051-b2ee71acbe59'), img('photo-1660848649293-cf2c0cb89792')],
    colors: ['Heather Grey', 'Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A brushed French terry short built for comfort, with an elastic waist and side seam pockets.',
    details: ['Cotton French terry', 'Elastic waist', 'Regular fit'],
  },

  // Hoodies & Knitwear
  {
    slug: 'knitted-vest',
    name: 'Knitted Vest',
    category: 'Hoodies & Knitwear',
    price: 148,
    compareAt: 175,
    images: [img('photo-1681483476977-322d81693e41'), img('photo-1620853313566-e91fe0f3b634')],
    colors: ['Cream', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
    bestseller: true,
    description: 'A ribbed knit vest in a fine merino blend, layered easily over a shirt or worn on its own.',
    details: ['Merino wool blend', 'Ribbed trim', 'Regular fit'],
  },
  {
    slug: 'classic-knit-sweater',
    name: 'Classic Knit Sweater',
    category: 'Hoodies & Knitwear',
    price: 128,
    compareAt: 148,
    images: [img('photo-1615862915913-b93d20d742a3'), img('photo-1642886512785-b5fee9faad7f')],
    colors: ['Grey', 'Camel'],
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: true,
    description: 'A crewneck sweater in a soft cotton-wool blend, fine-gauge knit for year-round wear.',
    details: ['Cotton-wool blend', 'Fine gauge knit', 'Regular fit'],
  },
  {
    slug: 'harbor-hoodie',
    name: 'Harbor Hoodie',
    category: 'Hoodies & Knitwear',
    price: 138,
    images: [img('photo-1656339504243-2df4c5ebf1c0'), img('photo-1637255807270-f71be74b083e')],
    colors: ['Washed Black', 'Stone'],
    sizes: ['S', 'M', 'L', 'XL'],
    bestseller: true,
    description: 'A heavyweight fleece hoodie, garment-dyed and brushed inside for a soft, worn-in feel.',
    details: ['400gsm cotton fleece', 'Garment-dyed', 'Relaxed fit'],
  },
  {
    slug: 'quarter-zip-knit',
    name: 'Quarter-Zip Knit',
    category: 'Hoodies & Knitwear',
    price: 132,
    images: [img('photo-1710330972862-dfdce0fc821f'), img('photo-1785669429633-71505784d83c')],
    colors: ['Navy', 'Olive'],
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: true,
    description: 'A fine-knit quarter-zip in a brushed cotton blend, equally at home under a jacket or alone.',
    details: ['Cotton blend', 'Quarter-zip collar', 'Regular fit'],
  },

  // Accessories
  {
    slug: 'canvas-belt',
    name: 'Woven Canvas Belt',
    category: 'Accessories',
    price: 48,
    images: [img('photo-1667284152823-0b07a791fb79'), img('photo-1705493655920-20c572928501')],
    colors: ['Navy', 'Tan'],
    sizes: ['S/M', 'L/XL'],
    description: 'A woven canvas belt with a matte brass buckle, built for everyday wear.',
    details: ['Cotton canvas', 'Brass hardware', 'Adjustable'],
  },
  {
    slug: 'leather-card-holder',
    name: 'Leather Card Holder',
    category: 'Accessories',
    price: 58,
    compareAt: 68,
    images: [img('photo-1512415047789-055da07059ee'), img('photo-1601592996763-f05c9c80a7f1')],
    colors: ['Cognac', 'Black'],
    sizes: ['One Size'],
    bestseller: true,
    description: 'A slim card holder in full-grain leather, hand-burnished at the edges.',
    details: ['Full-grain leather', 'Four card slots', 'Hand-burnished edges'],
  },
  {
    slug: 'wool-scarf',
    name: 'Merino Wool Scarf',
    category: 'Accessories',
    price: 68,
    images: [img('photo-1737053618195-55b86ae94ce5'), img('photo-1679826010913-09dab83d852c')],
    colors: ['Charcoal', 'Camel'],
    sizes: ['One Size'],
    isNew: true,
    description: 'A lightweight merino scarf, fine-gauge knit with a fringed edge.',
    details: ['100% merino wool', 'Fringed edge', 'One size'],
  },
  {
    slug: 'canvas-tote',
    name: 'Heavy Canvas Tote',
    category: 'Accessories',
    price: 44,
    images: [img('photo-1574365569389-a10d488ca3fb'), img('photo-1535981444082-2a5dc0548ef3')],
    colors: ['Natural'],
    sizes: ['One Size'],
    description: 'A heavyweight canvas tote with reinforced handles, sized for daily carry.',
    details: ['16oz cotton canvas', 'Reinforced handles', 'Interior pocket'],
  },
]

export const categories: Category[] = [
  'T-Shirts',
  'Shirts & Polos',
  'Pants',
  'Shorts & Swim',
  'Hoodies & Knitwear',
  'Accessories',
]

export const bestsellers = products.filter((p) => p.bestseller)
export const newIn = products.filter((p) => p.isNew)

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function relatedProducts(product: Product, count = 4) {
  return products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, count)
}
