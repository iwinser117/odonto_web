const Testimonials = () => {
    const testimonials = [
      {
        name: "María García",
        text: "Excelente atención y profesionalismo. Mi experiencia con el tratamiento de ortodoncia fue increíble.",
        role: "Paciente de Ortodoncia"
      },
      {
        name: "Juan Pérez",
        text: "Los implantes dentales cambiaron mi vida. El equipo médico fue muy atento durante todo el proceso.",
        role: "Paciente de Implantes"
      },
      {
        name: "Ana Martínez",
        text: "El mejor servicio dental que he recibido. Personal muy amable y instalaciones modernas.",
        role: "Paciente Regular"
      }
    ];
  
    return (
      <section id="testimonios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Testimonios</h2>
            <p className="mt-4 text-gray-600">Lo que dicen nuestros pacientes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  