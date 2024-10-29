import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Importing Font Awesome icons
import {NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="mb-4 md:mb-0 flex items-center"> {/* Change items-start to items-center */}
            <FaMapMarkerAlt className="text-main mr-3 text-3xl" /> {/* Removed mt-1 */}
            <div>
              <h3 className="text-lg font-bold">Find Us</h3>
              <p>123 India, New Delhi</p>
            </div>
          </div>
          <div className="mb-4 md:mb-0 flex items-center"> {/* Change items-start to items-center */}
            <FaPhoneAlt className="text-main mr-3 text-3xl" /> {/* Removed mt-1 */}
            <div>
              <h3 className="text-lg font-bold">Call Us</h3>
              <p>+91-9999999912</p>
            </div>
          </div>
          <div className="mb-4 md:mb-0 flex items-center"> {/* Change items-start to items-center */}
            <FaEnvelope className="text-main mr-3 text-3xl" /> {/* Removed mt-1 */}
            <div>
              <h3 className="text-lg font-bold">Message Us</h3>
              <p>
                <a href="mailto:info@worldatlas.com" className="text-main underline">
                  info@worldatlas.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-700 py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p className="text-sm">© {new Date().getFullYear()} World Atlas. All rights reserved.</p>
          <div className="flex space-x-4">
          <NavLink to={'/terms'} className="text-sm hover:underline">Terms & Conditions</NavLink>
          <NavLink to={'/privacy'} className="text-sm hover:underline">Privacy Policy</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
