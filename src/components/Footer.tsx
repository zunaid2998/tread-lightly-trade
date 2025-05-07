
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-soletrade-navy text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">SoleTrade</h3>
            <p className="text-sm">
              The trusted marketplace for buying and selling pre-loved sneakers.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/listing" className="hover:text-soletrade-mint">All Shoes</Link></li>
              <li><Link to="/listing?category=sneakers" className="hover:text-soletrade-mint">Sneakers</Link></li>
              <li><Link to="/listing?category=athletic" className="hover:text-soletrade-mint">Athletic</Link></li>
              <li><Link to="/listing?category=casual" className="hover:text-soletrade-mint">Casual</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-soletrade-mint">How It Works</Link></li>
              <li><Link to="/" className="hover:text-soletrade-mint">Authenticity Guarantee</Link></li>
              <li><Link to="/" className="hover:text-soletrade-mint">Reviews</Link></li>
              <li><Link to="/" className="hover:text-soletrade-mint">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-soletrade-mint">FAQs</Link></li>
              <li><Link to="/" className="hover:text-soletrade-mint">Shipping</Link></li>
              <li><Link to="/" className="hover:text-soletrade-mint">Returns</Link></li>
              <li><Link to="/" className="hover:text-soletrade-mint">Size Guide</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} SoleTrade. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li><Link to="/" className="hover:text-soletrade-mint">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-soletrade-mint">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
