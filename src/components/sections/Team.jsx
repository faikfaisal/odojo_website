import TeamMember from '../ui/TeamMember';

import leader1 from '../../assets/faik_faisal.jpeg';
import leader2 from '../../assets/eugene_solodkin.jpg';

const Team = () => (
  <section id="team" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Leadership
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Boutique consultancy led by former AWS leadership
        </p>
      </div>
      <div className="mt-12 grid gap-12 grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto">
        <TeamMember
          name="Faik Faisal"
          role="Former Software Development Manager, AWS AI"
          image={leader1}
          linkedinUrl="https://www.linkedin.com/in/faik-faisal-10167024/"
        />
        <TeamMember
          name="Eugene Solodkin (advisor)"
          role="Software Development Manager, AWS AI"
          image={leader2}
          linkedinUrl="https://www.linkedin.com/in/esolodkin/"
        />
      </div>
      <div className="mt-12 max-w-3xl mx-auto text-center">
        <p className="text-gray-600">
          With over a decade of combined experience at AWS, our leadership team
          brings deep expertise in AI development, cloud architecture, and
          application security to every project.
        </p>
      </div>
    </div>
  </section>
);

export default Team;
