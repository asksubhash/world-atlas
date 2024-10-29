import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Reset the form after closing the modal
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="flex items-center justify-center p-10">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8 border">
        <h1 className="text-3xl font-bold text-center text-[#8338ec] mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8338ec] transition duration-200"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8338ec] transition duration-200"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8338ec] transition duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#8338ec] text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={handleCloseModal} />
          <div className="bg-white rounded-lg shadow-lg p-6 z-10 max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4">Message Sent!</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Message:</strong> {formData.message}</p>
            <button
              className="mt-4 bg-[#8338ec] text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
