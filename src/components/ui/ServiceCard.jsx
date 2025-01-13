// Services Section Component
const ServiceCard = ({ title, description }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default ServiceCard;
