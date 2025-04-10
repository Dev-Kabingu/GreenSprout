import React, { useEffect } from "react";
import { Leaf, Sun, Sprout } from "lucide-react";
import nurseryImage from "../assets/img2.jpg";
import mangoImage from "../assets/img1.jpg";
import pineImage from "../assets/img3.jpeg";
import avocadoImage from "../assets/img4.jpeg";
import heroTree from "../assets/img6.jpeg";
import seedling from "../assets/seedling.jpg";
import AOS from "aos";
import "aos/dist/aos.css";  // Import AOS styles
import {Link} from "react-router-dom"

const Home = () => {
  const featuredTrees = [
    { name: "Mango Tree", image: mangoImage },
    { name: "Pine Tree", image: pineImage },
    { name: "Avocado Tree", image: avocadoImage },
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
          <div className="text-white max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">
              Grow Your Green World
            </h1>
            <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="200">
              Discover a wide variety of healthy, affordable trees and plants
              grown with love at our nursery.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition duration-300 " data-aos="fade-up" data-aos-delay="300">
              Explore Our Collection
            </button>
          </div>

          <div className="w-full max-w-lg flex flex-col items-center justify-center" data-aos="fade-left" data-aos-delay="400">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-xs mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-green-700 mb-3">Ready to Grow Your Garden?</h3>
          <p className="text-gray-600 mb-4">
            Start your green journey with our premium selection of plants.
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

          {/* Text Section (Right Side) */}
          <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-green-700 mb-6">About Our Nursery</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              This nursery was founded by three ambitious students from Kirinyaga University, driven by a shared passion for sustainability and a deep connection to nature. The project was born out of the desire to promote green living and contribute to environmental preservation through the growth and distribution of high-quality trees and plants. With a focus on local and indigenous species, the nursery aims to provide not only beautiful additions to your garden but also healthy, thriving plants that can enhance biodiversity. Our founders bring together diverse expertise, from environmental studies to business management, ensuring that our nursery thrives with eco-friendly practices. We're committed to making a positive impact on the environment, one plant at a time.
            </p>
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
      <section className="py-20 bg-green-100 text-center" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-800 mb-12">Our Featured Trees</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredTrees.map((tree, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <img src={tree.image} alt={tree.name} className="w-full h-60 object-cover" />
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
              <div key={index} className="bg-green-50 p-6 rounded-xl shadow-md">
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
              name: "Grace M.",
              role: "Founder & Lead Horticulturist",
              img: "/assets/team1.jpg",
            }, {
              name: "Kevin N.",
              role: "Operations Manager",
              img: "/assets/team2.jpg",
            }, {
              name: "Lydia K.",
              role: "Marketing & Community",
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
