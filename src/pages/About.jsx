import React, { useState } from 'react';
import GalleryCard from "../components/GalleryCard"
import {Link} from 'react-router-dom'

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
    { src: img24, alt: 'Tree Growth Stages' },
    { src: img25, alt: 'Tree Growth Stages' },
    { src: img26, alt: 'Tree Growth Stages' },
    { src: img27, alt: 'Tree Growth Stages' },
    { src: img3, alt: 'Tree Growth Stages' },
    { src: img24, alt: 'Tree Growth Stages' },
    { src: img25, alt: 'Tree Growth Stages' },
    { src: img26, alt: 'Tree Growth Stages' },
    { src: img27, alt: 'Tree Growth Stages' },
    { src: img3, alt: 'Tree Growth Stages' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;
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
        className="relative h-[65vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${img18})`,
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


      <section className="bg-green-50 py-20 px-6 md:px-16">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
    <img src={img26} alt="Planting Story" className="rounded-lg shadow-md" />
    <div>
      <h2 className="text-4xl font-bold text-green-800 mb-4">Our Story</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
      GreenRoot Revivers began with a small piece of land, where we planted our first trees with a simple vision — to restore the environment and provide high-quality seedlings for sale. As our passion for nurturing nature grew, so did the demand for our plants, and it became clear that to make a larger impact, we needed more space. <br />When the time came to expand, we reached out to Kirinyaga University for support. In response, they generously offered us a larger piece of land, giving us the opportunity to scale our operations and grow a wider variety of trees. This partnership allowed us to not only meet local demand but also contribute to environmental restoration projects across the region. <br />Today, GreenRoot Revivers is proud to offer sustainably grown trees and plants to farmers, schools, and businesses, all while nurturing the future of our planet. What began with a small piece of land has blossomed into a thriving venture, where each seedling we grow represents hope, resilience, and a greener tomorrow.
      </p>
      <p className="italic text-green-700 font-medium mt-4">
        "We don’t just plant trees — we plant hope for generations."
      </p>
    </div>
  </div>
</section>

<section className="py-16 px-6 bg-white" data-aos="fade-up">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 justify-between">
    
    {/* Mission */}
    <div className="bg-gray-50 p-6 rounded-lg shadow-md flex-1 text-center">
      <h3 className="text-2xl font-semibold text-green-700 mb-3">Our Mission</h3>
      <p className="text-gray-600">
        To promote a greener future by growing and supplying high-quality trees, empowering communities with sustainable solutions for the environment and economy.
      </p>
    </div>

    {/* Vision */}
    <div className="bg-gray-50 p-6 rounded-lg shadow-md flex-1 text-center">
      <h3 className="text-2xl font-semibold text-green-700 mb-3">Our Vision</h3>
      <p className="text-gray-600">
        To become the leading tree nursery in the region, recognized for our commitment to quality, innovation, and environmental stewardship.
      </p>
    </div>

    {/* Core Values */}
    <div className="bg-gray-50 p-6 rounded-lg shadow-md flex-1 text-center">
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
      {/* Nursery in Action (Gallery) Section */}
      <section className="py-16 px-6 bg-green-50" data-aos="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-green-700">Moments That Matter</h2>
          <p className="text-gray-600 mt-2">Take a glimpse into our journey, from planting our first seedlings to seeing entire landscapes <br /> transform with life. Our gallery showcases the heart of GreenRoot Revivers: the land we cultivate, the hands that nurture it,<br /> and the communities we serve. Each photo captures a milestone, a memory, or a moment of growth. Whether it's a vibrant nursery morning, <br />a tree-planting event with students, or the peaceful rows of thriving seedlings, these snapshots tell the story of our shared commitment to a greener tomorrow.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

      <section className="bg-white py-16 rounded-lg text-gay-600 text-center mb-12">
        <h2 className="text-4xl font-semibold mb-6">Get Involved in Our Green Movement</h2>
        <p className="text-lg mb-6 p-4">
          We believe that every small action counts, and we’re excited to have you join us on this journey towards a greener future. Whether you’re looking to add beautiful trees to your garden, learn more about sustainable practices, or simply support our mission, we invite you to get involved.
        </p>
        <div className="flex justify-center gap-6">
          <Link
            to="/HowYouCanHelp"
            className="bg-green-700 px-8 py-3 rounded-full text-white text-lg font-semibold hover:bg-green-500 hover:text-white transition duration-300"
          >
            Learn How You Can Help
          </Link>
        </div>
      </section>



    </>
  )
}

export default About
