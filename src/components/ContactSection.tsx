
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Calendar, Clock } from "lucide-react";

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger an API call to send the message
    alert("Thank you for your message. We'll get back to you shortly.");
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need more information? Our team is here to help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-emergency/10 p-2 rounded-full text-emergency mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Emergency Hotline</p>
                    <p className="text-gray-600">1-800-SWIFT-AID (24/7)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emergency/10 p-2 rounded-full text-emergency mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Non-Emergency Line</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emergency/10 p-2 rounded-full text-emergency mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Main Station</p>
                    <p className="text-gray-600">
                      123 Medical Drive<br />
                      Boston, MA 02115
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Operating Hours</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-emergency/10 p-2 rounded-full text-emergency mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Emergency Services</p>
                    <p className="text-gray-600">24 hours a day, 7 days a week</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emergency/10 p-2 rounded-full text-emergency mr-4">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Administrative Office</p>
                    <p className="text-gray-600">Monday to Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                <Input id="name" placeholder="Your name" required />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Input id="email" type="email" placeholder="Your email" required />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <Input id="subject" placeholder="Message subject" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea id="message" placeholder="Your message" rows={4} required />
              </div>
              
              <Button type="submit" className="w-full bg-emergency hover:bg-emergency-dark">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
