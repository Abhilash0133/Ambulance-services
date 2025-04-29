
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Ambulance } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-emergency/10 p-4 rounded-full">
            <Ambulance className="h-16 w-16 text-emergency" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! We couldn't find the page you're looking for.
        </p>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          The page might have been moved or deleted. Please check the URL or go back to the home page.
        </p>
        <Button
          className="bg-emergency hover:bg-emergency-dark text-white"
          asChild
        >
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
