
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  ShoppingCart, 
  Heart, 
  User,
  Star,
  ArrowLeft 
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProductById, mockProducts } from '@/data/mockProducts';
import { useToast } from '@/hooks/use-toast';

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const { toast } = useToast();
  
  // Dummy images for gallery
  const productImages = [
    product?.imageUrl,
    "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1200&auto=format&fit=crop"
  ];
  
  useEffect(() => {
    if (id) {
      // In a real app, this would be an API call
      const foundProduct = getProductById(id);
      if (foundProduct) {
        setProduct(foundProduct);
      }
      setLoading(false);
    }
  }, [id]);
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${product.title} has been added to your cart.`,
    });
  };
  
  const handleWishlist = () => {
    toast({
      title: "Added to wishlist!",
      description: `${product.title} has been added to your wishlist.`,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-soletrade-navy"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6 text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/listing">Browse All Products</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Similar products suggestion (just mock data)
  const similarProducts = mockProducts
    .filter(p => p.brand === product.brand && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/listing" className="text-gray-500 hover:text-soletrade-navy flex items-center">
              <ArrowLeft size={16} className="mr-1" /> Back to listings
            </Link>
          </div>
          
          {/* Product Details Section */}
          <div className="bg-white rounded-lg shadow-md p-4 md:p-8">
            <div className="flex flex-col md:flex-row md:space-x-8">
              {/* Product Images */}
              <div className="md:w-1/2 mb-6 md:mb-0">
                <div className="relative rounded-lg overflow-hidden mb-4 h-80">
                  <img
                    src={productImages[selectedImage]}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="flex space-x-2">
                  {productImages.filter(Boolean).map((img, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`cursor-pointer border-2 rounded-md overflow-hidden w-20 h-20 ${
                        selectedImage === idx ? 'border-soletrade-navy' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Product Info */}
              <div className="md:w-1/2">
                <div className="mb-6">
                  <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge>{product.condition}</Badge>
                    <span className="text-gray-500">Size {product.size}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                      <Star className="h-4 w-4 text-gray-300" />
                      <span className="text-sm text-gray-500 ml-1">(24 reviews)</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-soletrade-navy mb-4">${product.price.toFixed(2)}</p>
                  <p className="text-gray-700 mb-6">
                    Premium quality {product.brand} shoes in {product.condition.toLowerCase()} condition. 
                    Authentic with original box and accessories. Minor signs of wear consistent with the listed condition.
                  </p>
                  
                  {/* Actions */}
                  <div className="flex space-x-4 mb-6">
                    <Button 
                      className="flex-1" 
                      onClick={handleAddToCart}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                    </Button>
                    <Button variant="outline" onClick={handleWishlist}>
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Seller Info */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="bg-gray-200 rounded-full p-2 mr-3">
                        <User className="h-5 w-5 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Seller: JohnDoe123</h3>
                        <p className="text-sm text-gray-500">Member since 2021 • 96% positive feedback</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">Ships from New York, NY</div>
                      <Button variant="link" size="sm">Contact Seller</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product Details Tabs */}
            <div className="mt-8">
              <Tabs defaultValue="description">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="p-4">
                  <p className="text-gray-700">
                    {product.brand} {product.title} - A versatile and comfortable shoe that combines style with performance.
                    This pair is in {product.condition.toLowerCase()} condition with minimal signs of wear.
                    Perfect for casual outings or athletic activities.
                  </p>
                </TabsContent>
                <TabsContent value="details" className="p-4">
                  <ul className="space-y-2">
                    <li><strong>Brand:</strong> {product.brand}</li>
                    <li><strong>Model:</strong> {product.title.split(' ').slice(1).join(' ')}</li>
                    <li><strong>Size:</strong> US {product.size}</li>
                    <li><strong>Condition:</strong> {product.condition}</li>
                    <li><strong>Material:</strong> Leather/Synthetic</li>
                    <li><strong>Original Box:</strong> Yes</li>
                  </ul>
                </TabsContent>
                <TabsContent value="shipping" className="p-4">
                  <div>
                    <h4 className="font-medium mb-2">Shipping</h4>
                    <p className="mb-4">Standard shipping (3-5 business days): $9.99</p>
                    <h4 className="font-medium mb-2">Returns</h4>
                    <p>Returns accepted within 14 days of delivery if shoes are in the same condition as received.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Similar Products */}
          {similarProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-6">You May Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {similarProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
