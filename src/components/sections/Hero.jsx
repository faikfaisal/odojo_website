// Hero Section Component
const Hero = () => (
  <section
    id="home"
    className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-blue-800"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center py-16">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          Master the Art of Digital Innovation
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Former AWS engineers building next-generation AI solutions and DevOps
          infrastructure for forward-thinking enterprises.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="#contact"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
