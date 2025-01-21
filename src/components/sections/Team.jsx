import TeamMember from '../ui/TeamMember';

import faik from '../../assets/faik_faisal.jpeg';
import eugene from '../../assets/eugene_solodkin.jpg';
import harry from '../../assets/harry_mower.jpeg';
import saurin from '../../assets/saurin_shah.jpeg';

const Team = () => (
  <section id="team" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
      <div className="space-y-5 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Leadership
        </h2>
        <p className="text-xl text-gray-600">
          Boutique consultancy led by former AWS leadership
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 lg:gap-y-16">
        <div className="px-3">
          <TeamMember
            name="Harry Mower"
            role="Former Director, AWS AI & Developer Tools, Advisor"
            image={harry}
            linkedinUrl="https://www.linkedin.com/in/harrymower/"
          />
        </div>
        <div className="px-3">
          <TeamMember
            name="Eugene Solodkin"
            role="Software Development Manager, AWS AI & Developer Tools, Advisor"
            image={eugene}
            linkedinUrl="https://www.linkedin.com/in/esolodkin/"
          />
        </div>
        <div className="px-3">
          <TeamMember
            name="Faik Faisal"
            role="Former Software Development Manager, AWS AI & Developer Tools"
            image={faik}
            linkedinUrl="https://www.linkedin.com/in/faik-faisal-10167024/"
          />
        </div>
        <div className="px-3">
          <TeamMember
            name="Saurin Shah"
            role="Former Software Development Engineer, AWS AI & Developer Tools"
            image={saurin}
            linkedinUrl="https://www.linkedin.com/in/saurin94/"
          />
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          With over a decade of combined experience at AWS, our team brings deep
          expertise in AI development, cloud architecture, and application
          security to every project.
        </p>
      </div>
    </div>
  </section>
);

export default Team;
