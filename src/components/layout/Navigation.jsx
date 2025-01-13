import Logo from '../ui/Logo';

const Navigation = () => (
  <nav className="bg-white shadow-lg fixed w-full z-10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <Logo />
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              Services
            </a>
            <a
              href="#expertise"
              className="text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              Expertise
            </a>
            <a
              href="#team"
              className="text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              Team
            </a>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
