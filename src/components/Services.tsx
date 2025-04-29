
import React from 'react';
import { Ambulance, Clock, Car, User, Users } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full bg-emergency/10 text-emergency">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Ambulance className="h-8 w-8" />,
      title: "Emergency Response",
      description: "Immediate medical response with fully equipped ambulances and trained paramedics.",
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Non-Emergency Transport",
      description: "Pre-scheduled medical transport for appointments, hospital transfers, and more.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Availability",
      description: "Round-the-clock service ensuring help is always just a call away.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Special Event Coverage",
      description: "Medical standby services for sports events, concerts, and public gatherings.",
    },
    {
      icon: <User className="h-8 w-8" />,
      title: "Specialized Care",
      description: "Specialized equipment and personnel for critical care and pediatric transport.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a comprehensive range of ambulance and medical transport services to meet all your emergency and non-emergency needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="mt-12 bg-emergency/5 rounded-lg p-6 max-w-3xl mx-auto border border-emergency/20">
          <h3 className="text-xl font-semibold mb-3 text-center">Need Special Assistance?</h3>
          <p className="text-center mb-4">
            We offer custom solutions for healthcare facilities, events, and specialized medical transport needs.
          </p>
          <div className="flex justify-center">
            <button className="bg-emergency hover:bg-emergency-dark text-white px-6 py-2 rounded-md transition-all">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
