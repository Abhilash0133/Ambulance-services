
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-emergency-light to-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute w-60 h-60 rounded-full bg-emergency/10 -right-20 -top-20"></div>
      <div className="absolute w-40 h-40 rounded-full bg-emergency/10 left-20 bottom-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-emergency">Emergency</span> Medical Services
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
              Swift response when seconds matter. Our ambulance services provide immediate
              medical assistance with qualified professionals 24/7.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="emergency-button group flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5 animate-pulse-emergency" /> 
                <span>Emergency Call</span>
              </Button>
              <Button variant="outline" className="border-emergency text-emergency hover:bg-emergency hover:text-white">
                Our Services
              </Button>
            </div>
            <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-md mx-auto md:mx-0">
              <p className="font-semibold text-emergency mb-1">24/7 Emergency Hotline</p>
              <p className="text-2xl font-bold">1-800-SWIFT-AID</p>
            </div>
          </div>
          
          <div className="hidden md:block relative h-[400px]">
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-lg shadow-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1612321968045-d7b36c9a8589?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Ambulance services" 
              className="w-full h-full object-cover rounded-lg mix-blend-overlay"
            />
            <div className="absolute top-4 left-4 bg-emergency text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse-emergency">
              Live Response
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
