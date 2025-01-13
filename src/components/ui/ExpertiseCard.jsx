// Expertise Section Component
const ExpertiseCard = ({ title, items }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
    <ul className="space-y-4 text-gray-600">
      {items.map((item, index) => (
        <li key={index}>• {item}</li>
      ))}
    </ul>
  </div>
);

export default ExpertiseCard;
