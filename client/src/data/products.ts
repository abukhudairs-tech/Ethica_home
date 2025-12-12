export interface Product {
  id: string;
  name: string;
  price: number;
  category: "kitchen" | "decor" | "textiles" | "lighting" | "local-artisans";
  image: string;
  isNew?: boolean;
  description: string;
  artisan: string;
  origin: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Oaxaca Clay Bowl Set",
    price: 85,
    category: "kitchen",
    image: "/images/cat-kitchen.png", // Reusing existing asset for demo
    isNew: true,
    description: "Hand-burnished clay bowls from San Bartolo Coyotepec.",
    artisan: "Familia Martinez",
    origin: "Mexico"
  },
  {
    id: "2",
    name: "Andean Wool Throw",
    price: 120,
    category: "textiles",
    image: "/images/cat-textiles.png", // Reusing existing asset for demo
    isNew: false,
    description: "Soft, hand-woven wool throw featuring traditional patterns.",
    artisan: "Q'ero Community",
    origin: "Peru"
  },
  {
    id: "3",
    name: "Teak Wood Serving Board",
    price: 45,
    category: "kitchen",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
    isNew: false,
    description: "Sustainably harvested teak wood, carved by hand.",
    artisan: "Budi Woodworks",
    origin: "Indonesia"
  },
  {
    id: "4",
    name: "Hand-Blown Glass Vase",
    price: 65,
    category: "decor",
    image: "/images/cat-decor.png", // Reusing existing asset for demo
    isNew: true,
    description: "Recycled glass blown into organic shapes.",
    artisan: "Atlas Glass Co-op",
    origin: "Morocco"
  },
  {
    id: "5",
    name: "Rattan Pendant Light",
    price: 150,
    category: "lighting",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=800&q=80",
    isNew: false,
    description: "Intricately woven rattan shade that casts warm shadows.",
    artisan: "Somsri Weavers",
    origin: "Thailand"
  },
  {
    id: "6",
    name: "Block Print Table Runner",
    price: 35,
    category: "textiles",
    image: "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?auto=format&fit=crop&w=800&q=80",
    isNew: false,
    description: "Cotton runner with botanical block print designs.",
    artisan: "Jaipur Printers",
    origin: "India"
  },
  {
    id: "7",
    name: "Olive Wood Spoons",
    price: 28,
    category: "kitchen",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80",
    isNew: false,
    description: "Set of 3 cooking spoons carved from pruned olive branches.",
    artisan: "Kenyan Wood Carvers",
    origin: "Kenya"
  },
  {
    id: "8",
    name: "Jute Area Rug",
    price: 220,
    category: "textiles",
    image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&w=800&q=80",
    isNew: true,
    description: "Durable and natural jute rug for high-traffic areas.",
    artisan: "Bengal Weavers",
    origin: "Bangladesh"
  },
  {
    id: "9",
    name: "Brass Candle Holder",
    price: 40,
    category: "decor",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    isNew: false,
    description: "Minimalist brass holder for taper candles.",
    artisan: "Metalworks Guild",
    origin: "India"
  },
  {
    id: "10",
    name: "Tatreez Heritage Cushion",
    price: 85,
    category: "local-artisans",
    image: "/images/prod-tatreez-cushion.png",
    isNew: true,
    description: "Hand-embroidered linen cushion featuring traditional Palestinian cross-stitch patterns.",
    artisan: "Women's Cooperative of Jericho",
    origin: "Palestine"
  },
  {
    id: "11",
    name: "Olive Wood & Tatreez Runner",
    price: 120,
    category: "local-artisans",
    image: "/images/prod-tatreez-runner.png",
    isNew: true,
    description: "A fusion of olive wood serving ware and delicate Levantine embroidery.",
    artisan: "Bethlehem Artisans",
    origin: "Palestine"
  },
  {
    id: "12",
    name: "Framed Embroidery Art",
    price: 150,
    category: "local-artisans",
    image: "/images/prod-tatreez-art.png",
    isNew: false,
    description: "Traditional geometric motifs preserved in a modern minimalist frame.",
    artisan: "Ramallah Stitching Collective",
    origin: "Palestine"
  }
];
