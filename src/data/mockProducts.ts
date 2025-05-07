
import { Product } from '../components/ProductCard';

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Nike Air Jordan 1 Retro High OG",
    brand: "Nike",
    price: 220,
    size: "10",
    condition: "Like New",
    imageUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop",
    isFeatured: true
  },
  {
    id: "2",
    title: "Adidas Yeezy Boost 350 V2",
    brand: "Adidas",
    price: 280,
    size: "9.5",
    condition: "Good",
    imageUrl: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "New Balance 990v5 Made in USA",
    brand: "New Balance",
    price: 175,
    size: "11",
    condition: "New",
    imageUrl: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1200&auto=format&fit=crop",
    isFeatured: true
  },
  {
    id: "4",
    title: "Vans Old Skool Classic",
    brand: "Vans",
    price: 65,
    size: "8.5",
    condition: "Good",
    imageUrl: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "5",
    title: "Converse Chuck Taylor All Star",
    brand: "Converse",
    price: 55,
    size: "7",
    condition: "Fair",
    imageUrl: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "6",
    title: "Puma Suede Classic",
    brand: "Puma",
    price: 70,
    size: "10.5",
    condition: "Like New",
    imageUrl: "https://images.unsplash.com/photo-1608379743498-ac08f6d022ba?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "7",
    title: "Nike Air Force 1 '07",
    brand: "Nike",
    price: 100,
    size: "9",
    condition: "Good",
    imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "8",
    title: "Adidas Stan Smith",
    brand: "Adidas",
    price: 85,
    size: "8",
    condition: "Like New",
    imageUrl: "https://images.unsplash.com/photo-1603787081207-362bcef7c144?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "9",
    title: "Nike SB Dunk Low Pro",
    brand: "Nike",
    price: 150,
    size: "11.5",
    condition: "New",
    imageUrl: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1200&auto=format&fit=crop",
    isFeatured: true
  },
  {
    id: "10",
    title: "New Balance 574 Core",
    brand: "New Balance",
    price: 80,
    size: "10",
    condition: "Good",
    imageUrl: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1200&auto=format&fit=crop"
  }
];

export const categories = [
  {
    title: "Sneakers",
    slug: "sneakers",
    imageUrl: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Athletic",
    slug: "athletic",
    imageUrl: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Casual",
    slug: "casual",
    imageUrl: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Boots",
    slug: "boots",
    imageUrl: "https://images.unsplash.com/photo-1608256246200-95bebf35e171?q=80&w=1200&auto=format&fit=crop"
  }
];

export function getFeaturedProducts() {
  return mockProducts.filter(product => product.isFeatured);
}

export function getProductById(id: string) {
  return mockProducts.find(product => product.id === id);
}
