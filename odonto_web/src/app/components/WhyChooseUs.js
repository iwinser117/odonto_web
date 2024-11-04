const WhyChooseUs = () => {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">¿Por qué elegirnos?</h2>
            <p className="mt-4 text-gray-600">Experiencia y calidad que nos distingue</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Experiencia Profesional</h3>
              <p className="text-gray-600">Más de 15 años de experiencia en el campo odontológico</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Tecnología Avanzada</h3>
              <p className="text-gray-600">Equipamiento de última generación para mejores resultados</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Atención Personalizada</h3>
              <p className="text-gray-600">Tratamientos adaptados a las necesidades de cada paciente</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  