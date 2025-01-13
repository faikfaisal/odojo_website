import LinkedInIcon from '../icons/LinkedInIcon';

const TeamMember = ({ name, role, image, linkedinUrl }) => (
  <div className="text-center flex flex-col items-center">
    <div className="w-48 h-48 overflow-hidden rounded-full">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover object-center"
      />
    </div>
    <h3 className="mt-6 text-2xl font-semibold text-gray-900">{name}</h3>
    <p className="mt-2 text-lg text-gray-600 max-w-xs">{role}</p>
    <a
      href={linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
    >
      <LinkedInIcon />
      <span>View Profile</span>
    </a>
  </div>
);

export default TeamMember;
