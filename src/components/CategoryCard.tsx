
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  slug: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageUrl, slug }) => {
  return (
    <Link to={`/listing?category=${slug}`}>
      <Card className="group overflow-hidden relative h-40 w-full">
        <div className="absolute inset-0">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <CardContent className="p-4">
            <h3 className="font-semibold text-white text-lg">{title}</h3>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
