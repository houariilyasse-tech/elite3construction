import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Hammer, Building, Wrench, Star } from 'lucide-react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const realizations = [
    {
      id: 1,
      title: "Villa Moderne Mohammedia",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Immeuble Commercial Casa",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Rénovation Appartement",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const services = [
    {
      icon: <Building className="h-12 w-12 text-orange-500" />,
      title: "Construction de Bâtiments",
      description: "Construction complète de villas, immeubles et bâtiments commerciaux"
    },
    {
      icon: <Hammer className="h-12 w-12 text-orange-500" />,
      title: "Rénovation Complète",
      description: "Rénovation intérieure et extérieure, modernisation de bâtiments"
    },
    {
      icon: <Wrench className="h-12 w-12 text-orange-500" />,
      title: "Structures Métalliques",
      description: "Conception et réalisation de structures métalliques sur mesure"
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Benali",
      text: "Excellent travail sur ma villa. Qualité irréprochable et respect des délais.",
      rating: 5
    },
    {
      name: "Fatima Zahra",
      text: "Rénovation parfaite de mon appartement. Équipe professionnelle et à l'écoute.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % realizations.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % realizations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + realizations.length) % realizations.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-black/70 to-black/50">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Construire la qualité, élever la confiance
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Votre partenaire de confiance pour tous vos projets de construction et rénovation
            </p>
            <button 
              onClick={() => (window as any).goToContact?.()}
              className="bg-orange-500 hover:bg-black text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Demander un devis
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600">Excellence et innovation dans chaque projet</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-500">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realizations Slider */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Nos Réalisations</h2>
            <p className="text-xl text-gray-600">Découvrez nos projets les plus récents</p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {realizations.map((realization) => (
                  <div key={realization.id} className="w-full flex-shrink-0 relative">
                    <img 
                      src={realization.image} 
                      alt={realization.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                      <h3 className="text-2xl font-bold text-white">{realization.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-black text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-black text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            <div className="flex justify-center mt-6 space-x-2">
              {realizations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Avis Clients</h2>
            <p className="text-xl text-gray-600">La satisfaction de nos clients est notre priorité</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-black">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé
          </p>
          <button 
            onClick={() => (window as any).goToContact?.()}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Demander un devis gratuit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;