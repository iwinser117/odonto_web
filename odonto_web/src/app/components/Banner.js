"use client"
import Image from "next/image";
import { useState } from "react";
import AppointmentModal from "./AppointmentModal";
const Banner = () => {
  const [isAppointmentModal, setIsAppointmentModal] = useState(false);

  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="transform transition-all duration-500 hover:translate-y-[-5px]">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tu sonrisa es nuestra prioridad
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Ofrecemos servicios dentales de primera calidad con profesionales altamente calificados.
            </p>
            <button onClick={() => setIsAppointmentModal(true)} className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 btn-grad">
              Agenda tu cita
            </button>
          </div>
          <div className="relative h-[400px] transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/dentalhero.jpg"
              alt="Dental Care"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <AppointmentModal
        isOpen={isAppointmentModal}
        onClose={() => setIsAppointmentModal(false)}
      />
    </div>
  );
};

export default Banner;
