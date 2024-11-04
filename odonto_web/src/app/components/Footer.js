const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Odonto Web</h3>
            <p className="text-gray-600">
              Cuidando tu sonrisa con la mejor atención profesional
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Limpieza Dental</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Ortodoncias</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Implantes</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Blanqueamiento</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Tel: (123) 456-7890</li>
              <li className="text-gray-600">Email: info@odontoweb.com</li>
              <li className="text-gray-600">Dirección: Calle Principal #123</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>© {new Date().getFullYear()} Odonto Web. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
