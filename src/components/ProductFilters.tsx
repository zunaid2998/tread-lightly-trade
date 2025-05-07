
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface ProductFiltersProps {
  onFilterChange: (filters: any) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = React.useState([0, 500]);

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
    onFilterChange({ priceRange: value });
  };

  return (
    <div className="w-full">
      <h3 className="font-semibold text-lg mb-4">Filters</h3>
      
      <Accordion type="multiple" defaultValue={["price", "brand", "condition", "size"]}>
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="px-1 py-4">
              <Slider 
                defaultValue={[0, 500]}
                max={1000} 
                step={10}
                onValueChange={handlePriceChange}
              />
              <div className="flex justify-between mt-2 text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="brand">
          <AccordionTrigger>Brand</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Nike", "Adidas", "New Balance", "Puma", "Converse", "Vans"].map(brand => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox id={`brand-${brand}`} />
                  <Label htmlFor={`brand-${brand}`}>{brand}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="condition">
          <AccordionTrigger>Condition</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["New", "Like New", "Good", "Fair"].map(condition => (
                <div key={condition} className="flex items-center space-x-2">
                  <Checkbox id={`condition-${condition}`} />
                  <Label htmlFor={`condition-${condition}`}>{condition}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="size">
          <AccordionTrigger>Size (US)</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 gap-1">
              {[6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12].map(size => (
                <div key={size} className="flex items-center space-x-1">
                  <Checkbox id={`size-${size}`} />
                  <Label htmlFor={`size-${size}`} className="text-sm">{size}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductFilters;
