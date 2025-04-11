import React from 'react'
import { motion } from "framer-motion";
import seedling from "../assets/seedling.jpg";
import { MapPin, Phone, Mail } from 'lucide-react';
const Contact = () => {
  return (
    <>
    <section
        className="relative bg-cover bg-center py-20"
        style={{
                  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url(${seedling})`,
                }}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-lg text-white mb-8">
              Have a question or want to learn more about our services? Feel free to reach out to us, and we’ll get back to you as soon as possible!
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-green-100 py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="md:flex md:space-x-16">
            <div className="md:w-1/2">
              <form className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h3>
                
                <div className="flex space-x-6">
                  <div className="w-full">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      />
                  </div>
                  <div className="w-full">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    rows="4"
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

            {/* Contact Details Section */}
            <div className="md:w-1/2 mt-8 md:mt-0">
      <div className="bg-white p-8 rounded-lg shadow-xl border-l-4 border-green-600">
        <h3 className="text-3xl font-bold text-green-700 mb-6">Contact Information</h3>
        <p className="text-lg text-gray-600 mb-8">
          Reach out to us at any time, and we’ll do our best to assist you!
        </p>

        <div className="space-y-6">
          {/* Address Section */}
          <div className="flex items-center space-x-3">
            <MapPin className="text-green-600 text-2xl" />
            <div>
              <h4 className="text-xl font-semibold text-green-700">Address</h4>
              <p className="text-gray-600">Kutus, Kirinyaga County</p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex items-center space-x-3">
            <Phone className="text-green-600 text-2xl" />
            <div>
              <h4 className="text-xl font-semibold text-green-700">Phone</h4>
              <p className="text-gray-600">(+254) 741 085 746</p>
            </div>
          </div>

          {/* Email Section */}
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
        </div>
      </section>

    {/* Map Section */}
    <div className="mt-16">
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Find Us Here</h3>
      <div className="w-full h-96 bg-gray-200 rounded-lg">
        {/* Replace the iframe below with your actual Google Map iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.6235978417435!2d37.320347999999996!3d-0.566071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMzMnNTcuOSJTIDM3wrAxOScxMy4zIkU!5e0!3m2!1sen!2ske!4v1744308449646!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
 


    </>
  )
}

export default Contact
