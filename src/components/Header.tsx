import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F1EFEC] backdrop-blur-lg border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/LOGO_.png"
            alt="SHREEJII Tours & Travels"
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-accent-600 transition-colors">Home</Link>
          <Link to="/services" className="text-sm font-medium hover:text-accent-600 transition-colors">Services</Link>
          <Link to="/fleet" className="text-sm font-medium hover:text-accent-600 transition-colors">Our Fleet</Link>
          <Link to="/drivers" className="text-sm font-medium hover:text-accent-600 transition-colors">Drivers</Link>
          <Link to="/about" className="text-sm font-medium hover:text-accent-600 transition-colors">About</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-accent-600 transition-colors">Contact</Link>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Button asChild variant="outline" className="border-travel-600 text-travel-700 hover:bg-travel-50">
            <Link to="/feedback">Give Feedback</Link>
          </Button>
          <Button asChild variant="default" className="bg-accent-500 hover:bg-accent-600">
            <Link to="/book-now">Book Now</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#D4C9BE] border-b">
          <nav className="container flex flex-col space-y-3 py-4">
            <Link to="/" className="text-sm font-medium py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/services" className="text-sm font-medium py-2" onClick={toggleMenu}>Services</Link>
            <Link to="/fleet" className="text-sm font-medium py-2" onClick={toggleMenu}>Our Fleet</Link>
            <Link to="/drivers" className="text-sm font-medium py-2" onClick={toggleMenu}>Drivers</Link>
            <Link to="/about" className="text-sm font-medium py-2" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="text-sm font-medium py-2" onClick={toggleMenu}>Contact</Link>
            <Button asChild variant="outline" className="w-full border-travel-600 text-travel-700 mb-2">
              <Link to="/feedback" onClick={toggleMenu}>Give Feedback</Link>
            </Button>
            <Button asChild variant="default" className="w-full bg-accent-500 hover:bg-accent-600">
              <Link to="/book-now" onClick={toggleMenu}>Book Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
