
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navigation, Route, Clock } from "lucide-react";

const TrackingMap: React.FC = () => {
  const [trackingId, setTrackingId] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  
  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTracking(true);
    // In a real app, this would trigger an API call to get ambulance location
  };

  return (
    <section id="tracking" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Track Your Ambulance</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Know exactly where your ambulance is and get real-time updates on its arrival.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-1 border-gray-200">
            <CardHeader>
              <CardTitle>Enter Tracking ID</CardTitle>
              <CardDescription>
                Enter the tracking ID provided in your confirmation message.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTrack} className="space-y-4">
                <div>
                  <label htmlFor="tracking-id" className="block text-sm font-medium mb-1">
                    Tracking ID
                  </label>
                  <Input
                    id="tracking-id"
                    placeholder="e.g., SA-2023-04-29"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-emergency hover:bg-emergency-dark"
                  disabled={!trackingId}
                >
                  Track Now
                </Button>
              </form>

              {isTracking && (
                <div className="mt-6 p-4 bg-emergency/5 rounded-md border border-emergency/20">
                  <h4 className="font-semibold flex items-center">
                    <Clock className="h-4 w-4 mr-1" /> Estimated Arrival
                  </h4>
                  <p className="text-2xl font-bold my-2">8 minutes</p>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Current: 2.4 miles away</span>
                    <span>Driver: John D.</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 min-h-[400px] relative">
            {/* Map placeholder - in a real app, this would be an actual map component */}
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <Navigation className="h-12 w-12 text-emergency mx-auto mb-4" />
                <p className="text-lg font-medium">{isTracking ? 'Tracking ambulance...' : 'Enter tracking ID to view map'}</p>
              </div>
            </div>
            
            {isTracking && (
              <>
                <div className="absolute top-4 right-4 bg-white p-3 rounded-md shadow-md">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-emergency"></div>
                    <span className="text-sm">Ambulance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm">Your location</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-md shadow-md">
                  <div className="flex items-center">
                    <Route className="h-5 w-5 text-emergency mr-2" />
                    <div>
                      <p className="text-sm font-medium">Route information</p>
                      <p className="text-xs text-gray-600">Fastest route taken • Traffic conditions: Light</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">
            Having trouble tracking your ambulance? Contact our support team.
          </p>
          <Button variant="outline" className="border-emergency text-emergency hover:bg-emergency hover:text-white">
            Call Support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrackingMap;
