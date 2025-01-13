import ContactForm from '../ui/ContactForm';

const Contact = () => (
  <section id="contact" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Contact Us
        </h2>
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
