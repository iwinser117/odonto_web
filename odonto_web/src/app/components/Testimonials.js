"use client";
import React, { useState, useEffect } from "react";
import { testimonials as initialTestimonials } from "../data/testimonial";

const Testimonials = () => {
  const [isClient, setIsClient] = useState(false);
  const [testimonials, setTestimonials] = useState(initialTestimonials);

  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    role: "Paciente",
    message: "",
    image: "/images/default-avatar.png",
    rating: 5,
  });

  useEffect(() => {
    setIsClient(true); // Indica que estamos en el cliente

    // Solo acceder a localStorage si estamos en el cliente
    if (typeof window !== "undefined") {
      const stored = JSON.parse(localStorage.getItem("testimonials"));
      if (stored) setTestimonials(stored);
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("testimonials", JSON.stringify(testimonials));
    }
  }, [testimonials, isClient]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const testimonialToAdd = {
      ...newTestimonial,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
    };

    setTestimonials([...testimonials, testimonialToAdd]);
    setNewTestimonial({
      name: "",
      role: "Paciente",
      message: "",
      image: "/images/default-avatar.png",
      rating: 5,
    });
  };

  return (
    <section className="bg-gray-50 py-8" id="testimonios">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Lo que dicen nuestros pacientes
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {isClient &&
            testimonials.slice(-3).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white shadow-lg rounded-lg p-6 text-center"
              >
                <p className="text-gray-700 mb-3">{testimonial.message}</p>
                <h3 className="text-lg font-bold text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 mb-1">{testimonial.role}</p>
                <p className="text-yellow-400 text-xl">
                  {"⭐".repeat(testimonial.rating)}
                </p>
              </div>
            ))}
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-center mb-4">
            Comparte tu experiencia
          </h3>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Nombre
              </label>
              <input
                type="text"
                value={newTestimonial.name}
                onChange={(e) =>
                  setNewTestimonial({ ...newTestimonial, name: e.target.value })
                }
                required
                className="form-input w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Mensaje
              </label>
              <textarea
                value={newTestimonial.message}
                onChange={(e) =>
                  setNewTestimonial({
                    ...newTestimonial,
                    message: e.target.value,
                  })
                }
                required
                className="form-textarea w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Calificación
              </label>
              <select
                value={newTestimonial.rating}
                onChange={(e) =>
                  setNewTestimonial({
                    ...newTestimonial,
                    rating: parseInt(e.target.value),
                  })
                }
                className="form-select w-full border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-indigo-500"
              >
                {[5, 4, 3, 2, 1].map((num) => (
                  <option key={num} value={num}>
                    {num} Estrellas
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="btn w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600"
            >
              Compartir Testimonio
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
