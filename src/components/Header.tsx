
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Ambulance, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Ambulance className="h-8 w-8 text-emergency mr-2" />
          <h1 className="text-xl md:text-2xl font-bold">
            <span className="text-emergency">Swift</span>Aid
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="font-medium hover:text-emergency transition-colors">Home</a>
          <a href="#services" className="font-medium hover:text-emergency transition-colors">Services</a>
          <a href="#tracking" className="font-medium hover:text-emergency transition-colors">Track</a>
          <a href="#contact" className="font-medium hover:text-emergency transition-colors">Contact</a>
          <Button variant="outline" className="border-emergency text-emergency hover:bg-emergency hover:text-white">
            Log In
          </Button>
          <Button className="bg-emergency hover:bg-emergency-dark text-white">
            Emergency Call
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <a href="#" className="font-medium py-2 hover:text-emergency transition-colors">Home</a>
            <a href="#services" className="font-medium py-2 hover:text-emergency transition-colors">Services</a>
            <a href="#tracking" className="font-medium py-2 hover:text-emergency transition-colors">Track</a>
            <a href="#contact" className="font-medium py-2 hover:text-emergency transition-colors">Contact</a>
            <div className="flex space-x-4">
              <Button variant="outline" className="w-full border-emergency text-emergency hover:bg-emergency hover:text-white">
                Log In
              </Button>
              <Button className="w-full bg-emergency hover:bg-emergency-dark text-white">
                Emergency
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
