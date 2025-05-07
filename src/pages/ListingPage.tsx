import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';
import { mockProducts } from '@/data/mockProducts';
import { ChevronDown } from 'lucide-react';

const ListingPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<any>({});
  const [sortBy, setSortBy] = useState("newest");
  
  // Updated filtering logic to include activeFilters
  const filteredProducts = mockProducts.filter(product => {
    const matchesCategory = categoryParam
      ? product.brand.toLowerCase() === categoryParam.toLowerCase() || categoryParam === "all"
      : true;

    const matchesPrice = activeFilters.priceRange
      ? product.price >= activeFilters.priceRange[0] && product.price <= activeFilters.priceRange[1]
      : true;

    const matchesBrand = activeFilters.selectedBrands
      ? activeFilters.selectedBrands.includes(product.brand)
      : true;

    const matchesCondition = activeFilters.selectedConditions
      ? activeFilters.selectedConditions.includes(product.condition)
      : true;

    // Ensure size filtering logic handles size as a string
    const matchesSize = activeFilters.selectedSizes
      ? activeFilters.selectedSizes.map(String).includes(product.size)
      : true;

    return matchesCategory && matchesPrice && matchesBrand && matchesCondition && matchesSize;
  });

  // Added sorting logic based on the sortBy state
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "newest") {
      return b.id.localeCompare(a.id); // Assuming `id` is sequential for newest
    } else if (sortBy === "price-low") {
      return a.price - b.price;
    } else if (sortBy === "price-high") {
      return b.price - a.price;
    }
    return 0;
  });
  
  // Updated handleFilterChange to handle clearing filters
  const handleFilterChange = (filters: any) => {
    const updatedFilters = { ...activeFilters, ...filters };

    // Remove empty filter categories
    Object.keys(updatedFilters).forEach(key => {
      if (!updatedFilters[key] || updatedFilters[key].length === 0) {
        delete updatedFilters[key];
      }
    });

    setActiveFilters(updatedFilters);
  };

  // Added a resetFilters function to clear activeFilters
  const resetFilters = () => {
    setActiveFilters({});
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">
                {categoryParam ? `${categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)} Shoes` : 'All Shoes'}
              </h1>
              <p className="text-gray-600">{filteredProducts.length} results</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center">
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden mr-2"
              >
                Filters <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              
              <Select defaultValue="newest" onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>

              {/* Add a button to reset filters in the JSX */}
              <Button 
                variant="outline" 
                onClick={resetFilters} 
                className="ml-2"
              >
                Reset Filters
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar Filters - Hidden on mobile unless toggled */}
            <aside className={`md:w-64 ${showFilters ? 'block' : 'hidden'} md:block`}>
              <div className="bg-white p-4 rounded-lg shadow">
                <ProductFilters onFilterChange={handleFilterChange} />
              </div>
            </aside>
            
            {/* Product Grid */}
            <div className="flex-1">
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {sortedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg text-center shadow">
                  <h3 className="text-xl font-medium mb-2">No products found</h3>
                  <p className="text-gray-600">Try adjusting your filters or search criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ListingPage;
