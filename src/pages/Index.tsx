
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import { getFeaturedProducts, categories } from '@/data/mockProducts';

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-soletrade-navy text-white py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Find Your Perfect Pair, Second Time Around</h1>
              <p className="text-lg opacity-90">Buy and sell pre-loved shoes at incredible prices with our trusted community marketplace.</p>
              <div className="flex space-x-4 pt-4">
                <Button asChild className="button-secondary">
                  <Link to="/listing">Shop Now</Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-soletrade-navy">
                  Sell Your Shoes
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1200&auto=format&fit=crop" 
                alt="Featured Shoes" 
                className="rounded-lg shadow-xl max-w-full h-auto max-h-80 object-cover"
              />
            </div>
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold">Featured Kicks</h2>
              <Button variant="link" asChild className="text-soletrade-navy font-medium">
                <Link to="/listing" className="flex items-center">
                  View All <ArrowRight size={16} className="ml-1" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-8">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map(category => (
                <CategoryCard
                  key={category.slug}
                  title={category.title}
                  imageUrl={category.imageUrl}
                  slug={category.slug}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-soletrade-mint/10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-8 text-center">How SoleTrade Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="bg-soletrade-mint h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-soletrade-navy">1</span>
                </div>
                <h3 className="font-medium text-lg mb-2">Find Your Kicks</h3>
                <p className="text-gray-600">Browse thousands of pre-loved shoes from trusted sellers.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-soletrade-mint h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-soletrade-navy">2</span>
                </div>
                <h3 className="font-medium text-lg mb-2">Secure Purchase</h3>
                <p className="text-gray-600">Buy with confidence through our secure payment system.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-soletrade-mint h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-soletrade-navy">3</span>
                </div>
                <h3 className="font-medium text-lg mb-2">Get Delivery</h3>
                <p className="text-gray-600">Enjoy fast shipping and our satisfaction guarantee.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
