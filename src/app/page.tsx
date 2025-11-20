// src/app/page.tsx
import Hero from '@/components/Hero';
import CategoryShowcase from '@/components/CategoryShowcase';
import ProductGrid from '@/components/ProductGrid';

export default function Home() {
  return (
    <div>
      <Hero />
      <CategoryShowcase />
      <ProductGrid />
    </div>
  );
}