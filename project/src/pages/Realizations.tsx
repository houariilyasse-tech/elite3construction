import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const Realizations: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Villa Moderne Mohammedia",
      category: "Résidentiel",
      year: "2024",
      area: "350 m²",
      description: "Construction complète d'une villa moderne avec piscine et jardin paysager. Matériaux haut de gamme et finitions exceptionnelles.",
      before: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      after: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 2,
      title: "Immeuble Commercial Casa",
      category: "Commercial",
      year: "2023",
      area: "1200 m²",
      description: "Rénovation complète d'un immeuble commercial avec façade moderne et aménagement des espaces bureaux.",
      before: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      after: "https://images.pexels.com/photos/2134/stairs-home-loft-chicago.jpg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2134/stairs-home-loft-chicago.jpg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 3,
      title: "Rénovation Appartement Rabat",
      category: "Résidentiel",
      year: "2024",
      area: "120 m²",
      description: "Rénovation complète d'un appartement avec cuisine ouverte, salle de bain moderne et dressing sur mesure.",
      before: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      after: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 4,
      title: "Hangar Industriel Casablanca",
      category: "Industriel",
      year: "2023",
      area: "2000 m²",
      description: "Construction d'un hangar industriel avec structure métallique et équipements techniques modernes.",
      before: "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=800",
      after: "https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 5,
      title: "Villa avec Piscine Temara",
      category: "Résidentiel",
      year: "2024",
      area: "280 m²",
      description: "Construction d'une villa contemporaine avec piscine à débordement et terrasse moderne.",
      before: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800",
      after: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 6,
      title: "Bureaux Modernes Rabat",
      category: "Commercial",
      year: "2023",
      area: "800 m²",
      description: "Aménagement d'espaces bureaux modernes avec cloisons vitrées et mobilier contemporain.",
      before: "https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=800",
      after: "https://images.pexels.com/photos/2134/stairs-home-loft-chicago.jpg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2134/stairs-home-loft-chicago.jpg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    }
  ];

  const categories = ["Tous", "Résidentiel", "Commercial", "Industriel"];
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects = selectedCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Nos Réalisations</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez nos projets les plus récents et laissez-vous inspirer par notre savoir-faire 
            et notre attention aux détails.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.after} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => openModal(project)}
                      className="opacity-0 group-hover:opacity-100 bg-orange-500 text-white p-3 rounded-full transition-all duration-300 transform scale-75 group-hover:scale-100"
                    >
                      <Eye className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                  <div className="flex justify-between text-gray-600 text-sm mb-3">
                    <span>{project.year}</span>
                    <span>{project.area}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  
                  <button
                    onClick={() => openModal(project)}
                    className="mt-4 w-full bg-orange-500 hover:bg-black text-white py-2 rounded-lg font-semibold transition-all duration-300"
                  >
                    Voir le projet
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Avant / Après</h2>
            <p className="text-xl text-gray-600">Découvrez la transformation de nos projets</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-2 h-64">
                  <div className="relative">
                    <img src={project.before} alt="Avant" className="w-full h-full object-cover" />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-3 py-1 rounded text-sm">
                      Avant
                    </div>
                  </div>
                  <div className="relative">
                    <img src={project.after} alt="Après" className="w-full h-full object-cover" />
                    <div className="absolute bottom-2 right-2 bg-orange-500 text-white px-3 py-1 rounded text-sm">
                      Après
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-black text-lg">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.category} • {project.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt={selectedProject.title}
                className="w-full h-96 object-cover"
              />
              
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
              
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full"
              >
                ×
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-black mb-2">{selectedProject.title}</h2>
                  <div className="flex gap-4 text-gray-600">
                    <span>{selectedProject.category}</span>
                    <span>{selectedProject.year}</span>
                    <span>{selectedProject.area}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {selectedProject.description}
              </p>
              
              <div className="flex gap-2">
                {selectedProject.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentImageIndex === index ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Votre projet sera le prochain !
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Rejoignez nos clients satisfaits et concrétisez votre vision
          </p>
          <button 
            onClick={() => (window as any).goToContact?.()}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Démarrer mon projet
          </button>
        </div>
      </section>
    </div>
  );
};

export default Realizations;