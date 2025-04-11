import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img25 from "../assets/img25.jpeg";
import {Link} from 'react-router-dom'

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20 text-center" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Tree Growing Services</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Dedicated to growing a wide variety of trees with love and care, for sale and sustainable greening.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6" data-aos="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-green-700">What We Do</h2>
          <p className="text-gray-600 mt-2">Explore our specialized services tailored for tree lovers and environmental enthusiasts.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-md transition" data-aos="zoom-in" data-aos-delay="100">
            <h3 className="text-xl font-bold mb-2">Tree Cultivation</h3>
            <p className="text-gray-600">We grow diverse species of trees in a nurturing environment, ensuring strong and healthy growth.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-md transition" data-aos="zoom-in" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-2">Tree Sales</h3>
            <p className="text-gray-600">Purchase high-quality trees suitable for landscaping, reforestation, and ornamental purposes.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-md transition" data-aos="zoom-in" data-aos-delay="300">
            <h3 className="text-xl font-bold mb-2">Consultation Services</h3>
            <p className="text-gray-600">Get expert guidance on selecting the right tree species, planting, and maintenance techniques.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-6" data-aos="fade-up">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img src= {img25} alt="Tree Nursery" className="rounded-lg shadow-lg h-130 w-150" />
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">Dedicated Tree Nursery</h2>
            <p className="text-gray-600 mb-4">
              Our nursery is a hub for cultivating a wide range of trees suited for commercial, environmental, and aesthetic purposes. With years of hands-on experience, we focus on delivering strong, healthy seedlings for any scale of project.
            </p>
            <p className="text-gray-600 mb-4">
              Whether you're a farmer looking to diversify your orchard, a developer interested in sustainable landscaping, or a conservationist leading a reforestation initiative—we're here to support your goals.
            </p>
            <p className="text-gray-600 mb-4">
              Our tree growing operations embrace sustainable farming techniques that ensure minimal environmental impact while maximizing survival and growth rates. We take pride in providing expert advice and aftercare support to all our clients.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Fruit Trees (Mango, Avocado, Citrus, etc.)</li>
              <li>Indigenous and Exotic Trees (Acacia, Grevillea, etc.)</li>
              <li>Timber and Ornamental Varieties (Eucalyptus, Pine, Bougainvillea, etc.)</li>
              <li>Customized Orders and Bulk Supply Options</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
<section className="py-16 px-6" data-aos="fade-up">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-green-700 mb-6">How It Works</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div className="p-4 bg-white shadow-md rounded">
        <h4 className="font-bold text-lg mb-2">1. Browse</h4>
        <p className="text-gray-600">Explore our wide selection of trees online or at our nursery.</p>
      </div>
      <div className="p-4 bg-white shadow-md rounded">
        <h4 className="font-bold text-lg mb-2">2. Consult</h4>
        <p className="text-gray-600">Speak with our experts for recommendations tailored to your needs.</p>
      </div>
      <div className="p-4 bg-white shadow-md rounded">
        <h4 className="font-bold text-lg mb-2">3. Order</h4>
        <p className="text-gray-600">Place your order in person or via phone/email for delivery or pickup.</p>
      </div>
      <div className="p-4 bg-white shadow-md rounded">
        <h4 className="font-bold text-lg mb-2">4. Grow</h4>
        <p className="text-gray-600">Receive your healthy seedlings and planting support resources.</p>
      </div>
    </div>
  </div>
</section>
{/* Main Section */}
<section className="py-16 px-6 bg-gray-50" data-aos="fade-up">
  <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-10">

    {/* How It Works Section */}
    <div className="bg-gray-50 p-6">
      <h3 className="text-2xl font-semibold text-green-700 mb-6">How It Works</h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <h4 className="text-xl font-semibold text-green-700 mb-2">1. Browse</h4>
          <p className="text-gray-600">Explore our wide selection of trees online or at our nursery.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <h4 className="text-xl font-semibold text-green-700 mb-2">2. Consult</h4>
          <p className="text-gray-600">Speak with our experts for recommendations tailored to your needs.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <h4 className="text-xl font-semibold text-green-700 mb-2">3. Order</h4>
          <p className="text-gray-600">Place your order in person or via phone/email for delivery or pickup.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <h4 className="text-xl font-semibold text-green-700 mb-2">4. Grow</h4>
          <p className="text-gray-600">Receive your healthy seedlings and planting support resources.</p>
        </div>
      </div>
    </div>

    {/* Environmental Impact Section */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-green-700 mb-6">Environmental Impact</h3>
      <p className="text-gray-600 mb-4">
        Our mission extends beyond just selling trees. Each tree grown and sold contributes to a healthier planet.
      </p>
      <ul className="list-disc list-inside text-gray-600">
        <li>Promotes biodiversity and wildlife habitats.</li>
        <li>Reduces carbon footprint through carbon sequestration.</li>
        <li>Combats soil erosion and restores degraded land.</li>
        <li>Supports sustainable livelihoods in local communities.</li>
      </ul>
    </div>
  </div>
</section>



      {/* Call to Action Section */}
      <section className="bg-white text-gray-600 py-16 text-center px-4" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking to Buy Quality Trees?</h2>
        <p className="mb-6 text-lg">Get in touch with us today and explore our diverse collection of trees ready for planting.</p>
        <Link to ='/Contact'><button className="bg-green-800 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition">
          Contact Us
        </button></Link>
      </section>
    </div>
  );
};

export default Services;
