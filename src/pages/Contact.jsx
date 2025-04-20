import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import seedling from "../assets/seedling.jpg";
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const response = await fetch("http://localhost:4000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: e.target.user_name.value,
          email: e.target.user_email.value,
          message: e.target.message.value,
        }),
      });

      const data = await response.json();
      setSuccessMsg(data.message);
      form.current.reset();
    } catch (error) {
      console.error("Error:", error);
      setErrorMsg("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <motion.section
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url(${seedling})`,
        }}
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-white">Have a question or want to learn more? Contact us below!</p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="bg-green-50 py-20">
        <div className="container mx-auto px-6 md:px-12 md:flex md:space-x-16">
          {/* Contact Form */}
          <div className="md:w-1/2">
            <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h3>

              {successMsg && <p className="text-green-600 font-semibold">{successMsg}</p>}
              {errorMsg && <p className="text-red-600 font-semibold">{errorMsg}</p>}

              <div className="flex space-x-6">
                <div className="w-full">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-600"
                    placeholder="Your full name"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-600"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-600"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="bg-white p-8 rounded-lg shadow-xl border-l-4 border-green-600">
              <h3 className="text-3xl font-bold text-green-700 mb-6">Contact Information</h3>
              <p className="text-lg text-gray-600 mb-8">
                Reach out to us at any time, and we’ll do our best to assist you!
              </p>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-center space-x-3">
                  <MapPin className="text-green-600 text-2xl" />
                  <div>
                    <h4 className="text-xl font-semibold text-green-700">Address</h4>
                    <p className="text-gray-600">Kutus, Kirinyaga County</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <Phone className="text-green-600 text-2xl" />
                  <div>
                    <h4 className="text-xl font-semibold text-green-700">Phone</h4>
                    <p className="text-gray-600">(+254) 741 085 746</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <Mail className="text-green-600 text-2xl" />
                  <div>
                    <h4 className="text-xl font-semibold text-green-700">Email</h4>
                    <p className="text-gray-600">greenrootsrevivers@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <div className="mt-16 px-6">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Find Us Here</h3>
        <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.6235978417435!2d37.320347999999996!3d-0.566071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMzMnNTcuOSJTIDM3wrAxOScxMy4zIkU!5e0!3m2!1sen!2ske!4v1744308449646!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
