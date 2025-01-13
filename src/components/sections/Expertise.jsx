import ExpertiseCard from '../ui/ExpertiseCard';

const Expertise = () => (
  <section id="expertise" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Our Expertise
        </h2>
      </div>
      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
        <ExpertiseCard
          title="AI & Cloud Excellence"
          items={[
            'LLM integration and RAG system implementation',
            'AI agent development and optimization',
            'Deep experience with AWS services',
            'Infrastructure as Code (Terraform, CloudFormation)',
            'Microservices architecture design',
          ]}
        />
        <ExpertiseCard
          title="Security Leadership"
          items={[
            'Application threat modeling',
            'Security architecture design',
            'DevSecOps implementation',
            'Security compliance frameworks',
            'Automated security testing',
          ]}
        />
        <ExpertiseCard
          title="Industry Impact"
          items={[
            'Former AWS engineers with proven track record',
            'Successfully delivered enterprise-scale projects',
            'Contributed to developer tools used by millions',
            'Deep understanding of business requirements',
            'Focus on measurable ROI and business outcomes',
          ]}
        />
      </div>
    </div>
  </section>
);

export default Expertise;
