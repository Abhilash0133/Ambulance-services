
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EmergencyForm from '@/components/EmergencyForm';
import Services from '@/components/Services';
import TrackingMap from '@/components/TrackingMap';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <EmergencyForm />
      <Services />
      <TrackingMap />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
