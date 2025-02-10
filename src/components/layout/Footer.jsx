import Logo from '../ui/Logo';
import logoWhite from '../../assets/OPlusDojo-logo.white.png'

const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2">
            <Logo logo={logoWhite} color="white" textColor="#2563eb" />
          </div>
          <p className="mt-4">Mastering the art of AI and DevOps excellence</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p>Email: faik.faisal@oplusdojo.com</p>
          <p>Phone: (+880) 018-446-96252</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Location</h4>
          <p>House: 492/4, Road: 9 (west), Baridhara DOHS</p>
          <p>Dhaka, 1206</p>
        </div>
      </div>
      <div className="h-[400px] w-full rounded-lg overflow-hidden">
        <iframe
          title="O+Dojo Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7300.4071159583655!2d90.41199865735942!3d23.811359549542406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6fff15ffb05%3A0xb1247d1c50b0435f!2s492%2F4%20Lane%20-%209%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1736687412529!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <p>&copy; 2025 O+Dojo. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
