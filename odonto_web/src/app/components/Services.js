import { FaTooth, FaTeeth, FaUserMd, FaClinicMedical } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaTooth className="w-8 h-8" />,
      title: "Implantes Dentales",
      description: "Restauración completa con tecnología de vanguardia"
    },
    {
      icon: <FaTeeth className="w-8 h-8" />,
      title: "Ortodoncia",
      description: "Alineación perfecta para una sonrisa perfecta"
    },
    {
      icon: <FaUserMd className="w-8 h-8" />,
      title: "Odontología General",
      description: "Cuidado integral para toda la familia"
    },
    {
      icon: <FaClinicMedical className="w-8 h-8" />,
      title: "Emergencias Dentales",
      description: "Atención inmediata cuando más lo necesitas"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Nuestros Servicios</h2>
          <p className="mt-4 text-gray-600">Soluciones dentales integrales para toda la familia</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
