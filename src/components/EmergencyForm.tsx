
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Navigation } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EmergencyForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here we'd normally send the data to a backend
    console.log("Emergency request submitted:", formData);
    
    toast({
      title: "Emergency Request Received",
      description: "Help is on the way. Stay on the line.",
      variant: "destructive"
    });
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      location: '',
      details: ''
    });
  };

  return (
    <section id="emergency-request" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Emergency Request</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out this form for non-critical situations. For immediate emergencies, please call our hotline.
          </p>
        </div>
        
        <Card className="max-w-md mx-auto border-emergency/20 shadow-lg">
          <CardHeader className="bg-emergency/5">
            <CardTitle className="text-emergency flex items-center">
              <Navigation className="mr-2 h-5 w-5" /> Request Assistance
            </CardTitle>
            <CardDescription>
              Provide your details and location for faster response.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your contact number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium mb-1">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" /> Your Location
                    </span>
                  </label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="Address or landmark"
                    required
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="details" className="block text-sm font-medium mb-1">Emergency Details</label>
                  <Textarea
                    id="details"
                    name="details"
                    placeholder="Briefly describe the emergency situation"
                    rows={3}
                    value={formData.details}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button type="submit" className="w-full bg-emergency hover:bg-emergency-dark">
                Submit Emergency Request
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default EmergencyForm;
