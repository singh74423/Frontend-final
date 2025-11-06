import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-200 flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl border border-pink-100">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-pink-600">Contact Us</h1>
          <p className="text-gray-600 mt-2">
            We’d love to hear from you! Fill out the form below and we’ll get
            back to you soon.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter subject"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-200"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>📍 123 Pink Street, Delhi, India</p>
          <p>📧 contact@yourwebsite.com</p>
          <p>📞 +91 9876543210</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
