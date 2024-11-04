import Image from 'next/image';

const Specialists = () => {
  const doctors = [
    {
      name: "Dr. Carlos Ruiz",
      specialty: "Ortodoncista",
      image: "/doctor1.jpg"
    },
    {
      name: "Dra. Laura Sánchez",
      specialty: "Cirujana Maxilofacial",
      image: "/doctor2.jpg"
    }
  ];

  return (
    <section id="especialistas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Nuestros Especialistas</h2>
          <p className="mt-4 text-gray-600">Conoce a nuestro equipo de profesionales</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="relative h-64 w-full">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialists;
