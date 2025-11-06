import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl text-center bg-white shadow-lg rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          About Our Book Store 📚
        </h1>
        <p className="text-gray-600 leading-relaxed text-lg mb-6">
          Welcome to <span className="font-semibold text-indigo-600">Book Store</span> — 
          a modern web application built with <span className="font-semibold">React.js</span>, 
          designed for readers who love exploring premium digital books. 
          Our goal is to provide a smooth and secure reading experience for every book lover.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg mb-6">
          Users can sign up and access a wide collection of books. 
          However, only authenticated users get access to our 
          <span className="font-semibold text-indigo-600"> premium collection</span> — 
          exclusive books carefully curated for dedicated readers.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg mb-6">
          This project demonstrates <span className="font-semibold">authentication flow</span>, 
          <span className="font-semibold"> conditional rendering</span>, and 
          <span className="font-semibold"> secure content access</span> — 
          built using <span className="text-indigo-600">React</span>, 
          <span className="text-indigo-600"> React Router</span>, 
          and <span className="text-indigo-600"> Context API</span> for state management.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          Whether you're a casual reader or a premium member, our platform ensures 
          a delightful reading experience with smooth navigation, responsive design, 
          and secure authentication.
        </p>

        <div className="mt-10">
          <button
            onClick={() => (window.location.href = "/signup")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
          >
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
