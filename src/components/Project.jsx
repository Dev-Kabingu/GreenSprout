
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { allProjects } from '../assets/projectData';



const Project = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsPerPage = 6;

  const totalPages = Math.ceil(allProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = allProjects.slice(startIndex, startIndex + projectsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto relative">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Our Projects</h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  onError={(e) => (e.target.src = "/fallback.jpg")}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-700">{project.name}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-3">{project.description}</p>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-3 px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 transition"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-100 w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} 
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 text-3xl bg-green-800 text-white p-2 rounded hover:bg-green-700 "
              >
                &times;
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-50 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold text-green-700 mb-2">{selectedProject.name}</h3>
              <p className="text-gray-700">{selectedProject.details || selectedProject.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pagination */}
      <div className="flex justify-center mt-10 items-center gap-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-green-600 text-white rounded disabled:opacity-50 hover:bg-green-700 transition"
        >
          ←
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
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
    </div>
  );
};

export default Project;
