import React, { useEffect } from "react";
import { Leaf, Sun, Sprout } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import cypressImage from "../assets/cypress.jpg";
import mangoImage from "../assets/mango.jpg";
import jacarandaImage from "../assets/jacaranda.jpg";
import avocadoImage from "../assets/hass.jpg";
import EucalyptusImage from "../assets/eucalypus.jpeg"
import tomatoesImage from "../assets/treetomatoes.jpeg"
import seedling from "../assets/seedling.jpg";
import david from "../assets/davie.jpeg"
import Humphrey from "../assets/Humphery.jpeg"
import pondo from "../assets/pondo.jpeg"
import orange from "../assets/orange.jpeg"
import AOS from "aos";
import "aos/dist/aos.css"; 
import {Link} from "react-router-dom"

const Home = () => {
  const featuredTrees = [
    { name: "Hass Ovacado Trees", image: avocadoImage },
    { name: "Eucalypus Trees", image: EucalyptusImage },
    { name: "Cypress Trees", image: cypressImage },
    { name: "Mango Trees", image: mangoImage },
    { name: "Jacaranda Tree", image: jacarandaImage },
    { name: "Tree Tomatoes", image: tomatoesImage },
    { name: "Pondo Trees", image: pondo },
    { name: "Pixel Orange Trees", image: orange },
  ];

  const testimonials = [
    {
      name: "Jane W.",
      comment: "The best nursery experience I've ever had! My garden has never looked greener.",
    },
    {
      name: "David K.",
      comment: "Beautiful, healthy trees and excellent customer support. Highly recommended!",
    },
    {
      name: "Amina M.",
      comment: "Superb variety of plants and great value for money!",
    },
  ];

  // Initialize AOS (Animate On Scroll) on page load
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url(${seedling})`,
        }}
      >
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-white max-w-xl flex items-center">
  <div className="mr-6">
    <div className="flex flex-col space-y-6">
      <a href="#" className="text-2xl"><i className="fab fa-facebook"></i></a>
      <a href="#" className="text-2xl"><i className="fab fa-twitter"></i></a>
      <a href="#" className="text-2xl"><i className="fab fa-instagram"></i></a>
      <a href="#" className="text-2xl"><i className="fab fa-linkedin"></i></a>
    </div>
  </div>
  
  <div className="text-white max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">

  <div className="hidden md:flex flex-col space-y-4 pt-2" data-aos="fade-right">
    <a href="#"><FaFacebookF className="text-xl hover:text-green-500 transition" /></a>
    <a href="#"><FaTwitter className="text-xl hover:text-green-500 transition" /></a>
    <a href="#"><FaInstagram className="text-xl hover:text-green-500 transition" /></a>
    <a href="#"><FaLinkedinIn className="text-xl hover:text-green-500 transition" /></a>
  </div>

  <div className="max-w-xl text-center md:text-left">
    <h3 className="text-green-400 text-lg font-medium mb-2" data-aos="fade-up">
      Welcome to Our Nursery
    </h3>
    <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">
      Grow Your Green World
    </h1>
    <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="200">
      Discover a wide variety of healthy, affordable trees and plants grown with love at our nursery.
    </p>

    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-4" data-aos="fade-up" data-aos-delay="300">
      <Link to = '/trees'><button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition duration-300">
        Explore Our Trees
      </button></Link>
    </div>

    <div className="flex md:hidden justify-center space-x-4" data-aos="fade-up" data-aos-delay="400">
      <a href="#"><FaFacebookF className="text-xl hover:text-green-500 transition" /></a>
      <a href="#"><FaTwitter className="text-xl hover:text-green-500 transition" /></a>
      <a href="#"><FaInstagram className="text-xl hover:text-green-500 transition" /></a>
      <a href="#"><FaLinkedinIn className="text-xl hover:text-green-500 transition" /></a>
    </div>
  </div>
</div>

</div>


          <div className="w-full max-w-lg flex flex-col items-center justify-center" data-aos="fade-left" data-aos-delay="400">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-xs mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-green-700 mb-3">Rooted in Purpose, Grown with Love</h3>
          <p className="text-gray-600 mb-4">
          Nurture life with every plant you grow. Your green journey begins right here, with heart and soil.
          </p>
         <Link to = '/contact'> <button className="bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-800 transition duration-300">
            Contact Us Now
          </button></Link>
        </div>
      </div>
    </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-green-50" data-aos="fade-up">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Image Section (Left Side) */}
          <div className="relative md:w-1/2 flex justify-center items-center overflow-hidden rounded-xl">
            <img
              src={mangoImage}
              alt="Nursery Main"
              className="w-80 h-72 object-cover rounded-xl shadow-xl"
            />
          </div>
          
          <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
  <h2 className="text-3xl font-bold text-green-700 mb-6">About Our Nursery</h2>
  <p className="text-gray-700 text-lg leading-relaxed mb-6">
    We started with a simple vision and a small piece of land—driven by a passion for sustainability and a deep respect for nature. As demand grew and our mission expanded, we sought support to scale our efforts. With the generous backing of Kirinyaga University, we were offered a larger piece of land to nurture and grow more seedlings. Today, we specialize in high-quality, locally adapted trees and plants, aiming to promote reforestation, enhance biodiversity, and support a greener future. Every seed we plant is a step toward lasting environmental change.
  </p>
  <Link to="/about">
    <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition duration-300 w-fit mx-auto md:mx-0">
      Learn More About Us
    </button>
  </Link>
</div>


        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[{
              icon: <Leaf size={32} className="text-green-600 mx-auto" />,
              title: "Eco-Friendly Practices",
              description: "We use sustainable growing techniques to support the planet."
            }, {
              icon: <Sun size={32} className="text-yellow-500 mx-auto" />,
              title: "Healthy Plants",
              description: "All our plants are grown in optimal conditions with expert care."
            }, {
              icon: <Sprout size={32} className="text-green-700 mx-auto" />,
              title: "Expert Guidance",
              description: "We offer tips and advice to help your plants thrive."
            }].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Trees */}
      <section className="py-20 bg-green-50 text-center" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-800 mb-12">Our Featured Trees</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {featuredTrees.map((tree, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <img src={tree.image} alt={tree.name} className="w-full h-70 object-cover" />
                <h3 className="text-xl font-semibold text-green-700 mt-4 mb-2">{tree.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testi, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md">
                <p className="text-gray-700 mb-4 italic">"{testi.comment}"</p>
                <h4 className="text-green-800 font-semibold">{testi.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-green-50" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Meet Our Team</h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {[{
              name: "David Munene",
              role: "Founder & Chairperson",
              img: david
            }, {
              name: "Humphery Mutuma",
              role: "Secretary",
              img: Humphrey,
            }, {
              name: "Charlse Koome",
              role: "Tresurer",
              img: "/assets/team3.jpg",
            }].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-md transition transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-green-100 shadow-md"
                />
                <h3 className="text-xl font-bold text-green-800">{member.name}</h3>
                <p className="text-green-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white text-center" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Green Your Space?</h2>
          <p className="mb-6 text-lg text-gray-600">
            Contact us today for expert plant care and healthy trees.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
