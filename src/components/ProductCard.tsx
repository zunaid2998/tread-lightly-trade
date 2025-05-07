
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export interface Product {
  id: string;
  title: string;
  brand: string;
  price: number;
  size: string;
  condition: string;
  imageUrl: string;
  isFeatured?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card className="product-card overflow-hidden h-full">
        <div className="relative">
          <img 
            src={product.imageUrl} 
            alt={product.title}
            className="w-full h-48 object-cover"
          />
          {product.isFeatured && (
            <Badge className="absolute top-2 right-2 bg-soletrade-mint text-soletrade-navy">
              Featured
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-gray-900 line-clamp-1">{product.title}</h3>
          <p className="text-sm text-gray-500">{product.brand} • Size {product.size}</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="price-tag">${product.price.toFixed(2)}</span>
            <Badge variant="outline" className="text-xs">
              {product.condition}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
