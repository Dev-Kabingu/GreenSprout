import React from 'react'
import heroTree from "../assets/img6.jpeg";
import Project from '../components/Project';
const Projects = () => {
  return (
   <>
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroTree})`,
      }}
    >
      <div className="text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Our Projects, Our Impact</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
        Explore the green initiatives we've brought to life—from local tree planting drives to sustainable land restoration programs. Each project is a step toward a healthier planet and a testament to our commitment to environmental stewardship.
        </p>
      </div>
    </section>

    <Project />
   </>
  )
}

export default Projects
