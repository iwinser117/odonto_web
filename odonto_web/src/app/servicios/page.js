
"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { services as initialServices } from '../data/services';

const Services = () => {
  const [services, setServices] = useState(initialServices);
  
  // Prepared for future API integration
  useEffect(() => {
    // Future API call
    // const fetchServices = async () => {
    //   const response = await fetch('api/services');
    //   const data = await response.json();
    //   setServices(data);
    // };
    // fetchServices();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Nuestros Servicios
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="relative h-64">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <p className="text-xl font-bold text-primary-600 mb-4">
                  {service.price}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li 
                      key={index}
                      className="flex items-center text-gray-700"
                    >
                      <svg 
                        className="w-5 h-5 text-green-500 mr-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition duration-300">
                  Agendar Cita
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
