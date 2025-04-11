import React, { useState } from 'react';
import GalleryCard from '../Components/GalleryCard';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img6 from '../assets/img6.jpeg';
import img7 from '../assets/img7.jpeg';
import img8 from '../assets/img8.jpeg';
import img9 from '../assets/img9.jpeg';
import img10 from '../assets/img10.jpeg';
import img12 from '../assets/img12.jpeg';
import img13 from '../assets/img13.jpeg';
import img14 from '../assets/img14.jpeg';
import img15 from '../assets/img15.jpeg';
import img16 from '../assets/img16.jpeg';
import img17 from '../assets/img17.jpeg';
import img18 from '../assets/img18.jpeg';
import img19 from '../assets/img19.jpeg';
import img20 from '../assets/img20.jpeg';
import img21 from '../assets/img21.jpeg';
import img22 from '../assets/img22.jpeg';
import img23 from '../assets/img23.jpeg';
import img24 from '../assets/img24.jpeg';
import img25 from '../assets/img25.jpeg';
import img26 from '../assets/img26.jpeg';
import img27 from '../assets/img27.jpeg';

const About = () => {
  const galleryImages = [
    { src: img1, alt: 'Tree Planting' },
    { src: img2, alt: 'Workers Planting Trees' },
    { src: img3, alt: 'Tree Growth Stages' },
    { src: img4, alt: 'Tree Growth Stages' },
    { src: img6, alt: 'Tree Growth Stages' },
    { src: img7, alt: 'Tree Growth Stages' },
    { src: img8, alt: 'Tree Growth Stages' },
    { src: img9, alt: 'Tree Growth Stages' },
    { src: img10, alt: 'Tree Growth Stages' },
    { src: img12, alt: 'Tree Growth Stages' },
    { src: img13, alt: 'Tree Growth Stages' },
    { src: img14, alt: 'Tree Growth Stages' },
    { src: img15, alt: 'Tree Growth Stages' },
    { src: img16, alt: 'Tree Growth Stages' },
    { src: img17, alt: 'Tree Growth Stages' },
    { src: img18, alt: 'Tree Growth Stages' },
    { src: img19, alt: 'Tree Growth Stages' },
    { src: img20, alt: 'Tree Growth Stages' },
    { src: img21, alt: 'Tree Growth Stages' },
    { src: img22, alt: 'Tree Growth Stages' },
    { src: img23, alt: 'Tree Growth Stages' },
    { src: img24, alt: 'Tree Growth Stages' },
    { src: img25, alt: 'Tree Growth Stages' },
    { src: img26, alt: 'Tree Growth Stages' },
    { src: img27, alt: 'Tree Growth Stages' },
    { src: img3, alt: 'Tree Growth Stages' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = galleryImages.slice(startIndex, startIndex + imagesPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img3})`,
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Growing Greener Futures,<br /> One Tree at a Time
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            At GreenRoots Revivers, we are passionate about nurturing nature. From tiny saplings to thriving trees, our mission is to support reforestation, promote sustainability, and empower communities through quality tree planting. Discover who we are, what we stand for, and the roots behind our green vision.
          </p>
        </div>
      </section>

      {/* Nursery in Action (Gallery) Section */}
      <section className="py-16 px-6 bg-gray-50" data-aos="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-green-700">Our Nursery in Action</h2>
          <p className="text-gray-600 mt-2">See our nursery at work, from planting trees to caring for them.</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentImages.map((image, index) => (
            <GalleryCard key={index} imgSrc={image.src} altText={image.alt} />
          ))}
        </div>

        <div className="flex justify-center mt-10 items-center gap-3 flex-wrap">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-green-600 text-white rounded disabled:opacity-50 hover:bg-green-700 transition"
          >
            ←
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-green-100"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-green-600 text-white rounded disabled:opacity-50 hover:bg-green-700 transition"
          >
            →
          </button>
        </div>
      </section>

    <section className="py-16 px-6 bg-gray-100" data-aos="fade-up">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 justify-between">
    
    {/* Mission */}
    <div className="bg-white p-6 rounded-lg shadow-md flex-1 text-center">
      <h3 className="text-2xl font-semibold text-green-700 mb-3">Our Mission</h3>
      <p className="text-gray-600">
        To promote a greener future by growing and supplying high-quality trees, empowering communities with sustainable solutions for the environment and economy.
      </p>
    </div>

    {/* Vision */}
    <div className="bg-white p-6 rounded-lg shadow-md flex-1 text-center">
      <h3 className="text-2xl font-semibold text-green-700 mb-3">Our Vision</h3>
      <p className="text-gray-600">
        To become the leading tree nursery in the region, recognized for our commitment to quality, innovation, and environmental stewardship.
      </p>
    </div>

    {/* Core Values */}
    <div className="bg-white p-6 rounded-lg shadow-md flex-1 text-center">
      <h3 className="text-2xl font-semibold text-green-700 mb-3">Our Core Values</h3>
      <ul className="text-gray-600 list-disc text-left list-inside">
        <li>Environmental Responsibility</li>
        <li>Quality and Integrity</li>
        <li>Community Empowerment</li>
        <li>Sustainable Practices</li>
      </ul>
    </div>

  </div>
</section>
  
<section className="py-16 px-6 bg-gray-50" data-aos="fade-up">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-semibold text-green-700">Frequently Asked Questions</h2>
    <p className="text-gray-600 mt-2">Find answers to some of the most common questions about our nursery and services.</p>
  </div>

  <div className="space-y-6">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-green-700">How do I care for my tree after purchase?</h3>
      <p className="text-gray-600 mt-2">Care varies by species, but general tips include proper watering, regular inspection for pests, and suitable fertilization.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-green-700">Do you deliver trees?</h3>
      <p className="text-gray-600 mt-2">Yes, we offer delivery services for all tree purchases. Delivery details and fees are provided at checkout.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-green-700">What tree species are available?</h3>
      <p className="text-gray-600 mt-2">We offer a wide variety of tree species including fruit trees, ornamental trees, indigenous trees, and more. Visit our catalog for full details.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-green-700">Can I return a tree if it’s unhealthy?</h3>
      <p className="text-gray-600 mt-2">Yes, we offer a return policy for unhealthy trees. Please reach out to our customer support for assistance.</p>
    </div>
  </div>
</section>

<section className="py-16 px-6 bg-white" data-aos="fade-up">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-semibold text-green-700">Tree Care Tips</h2>
    <p className="text-gray-600 mt-2">Learn how to properly care for your trees to help them grow strong and healthy.</p>
  </div>

  <div className="space-y-8">
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-green-700">Planting Your Tree</h3>
      <p className="text-gray-600 mt-2">Ensure that your tree is planted in well-drained soil with enough space to grow. Follow planting guidelines for each species.</p>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-green-700">Watering Tips</h3>
      <p className="text-gray-600 mt-2">Water your tree regularly, especially during the first few months after planting, but avoid overwatering.</p>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-green-700">Fertilization</h3>
      <p className="text-gray-600 mt-2">Feed your trees with organic fertilizers for healthy growth. Be sure to follow the recommended feeding schedule for the species.</p>
    </div>
  </div>
</section>


    </>
  )
}

export default About
