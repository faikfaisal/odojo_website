import ServiceCard from '../ui/ServiceCard';

const Services = () => (
  <section id="services" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Comprehensive solutions tailored to your business needs
        </p>
      </div>
      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <ServiceCard
          title="AI Development"
          description="Specialized in building AI agents and assistants using LLMs, implementing RAG (Retrieval Augmented Generation) systems, and creating custom AI workflows for business process automation."
        />
        <ServiceCard
          title="DevOps Automation"
          description="End-to-end automation of development and operations processes, including CI/CD pipelines and infrastructure as code."
        />
        <ServiceCard
          title="Application Security"
          description="Comprehensive threat modeling, security architecture reviews, and DevSecOps implementation to ensure your applications are secure by design."
        />
        <ServiceCard
          title="Cloud Architecture"
          description="Expert AWS architecture design and implementation, focusing on scalability, security, and cost optimization."
        />
      </div>
    </div>
  </section>
);

export default Services;
