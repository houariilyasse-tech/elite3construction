import React from 'react';
import { Building, Home, Wrench, Ruler, PaintBucket, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Building className="h-16 w-16 text-orange-500" />,
      title: "Construction de Bâtiments",
      description: "Construction complète de villas, immeubles résidentiels et bâtiments commerciaux avec les dernières techniques et matériaux de qualité.",
      features: ["Villas personnalisées", "Immeubles résidentiels", "Bâtiments commerciaux", "Structures industrielles"]
    },
    {
      icon: <Home className="h-16 w-16 text-orange-500" />,
      title: "Rénovation Intérieure/Extérieure",
      description: "Modernisation complète de vos espaces avec une approche sur mesure pour transformer votre vision en réalité.",
      features: ["Rénovation complète", "Aménagement intérieur", "Façades modernes", "Extensions de maison"]
    },
    {
      icon: <Wrench className="h-16 w-16 text-orange-500" />,
      title: "Structures Métalliques",
      description: "Conception, fabrication et installation de structures métalliques robustes pour tous types de projets industriels.",
      features: ["Charpentes métalliques", "Hangars industriels", "Escaliers métalliques", "Garde-corps design"]
    },
    {
      icon: <Ruler className="h-16 w-16 text-orange-500" />,
      title: "Études & Plans Techniques",
      description: "Services d'ingénierie complets avec études de faisabilité, plans détaillés et suivi technique de projet.",
      features: ["Études de faisabilité", "Plans architecturaux", "Calculs de structure", "Suivi de chantier"]
    },
    {
      icon: <PaintBucket className="h-16 w-16 text-orange-500" />,
      title: "Finitions & Décoration",
      description: "Services de finition haut de gamme pour parfaire vos espaces avec attention aux moindres détails.",
      features: ["Peinture professionnelle", "Revêtements modernes", "Carrelage & sols", "Plafonds décoratifs"]
    },
    {
      icon: <Shield className="h-16 w-16 text-orange-500" />,
      title: "Maintenance & SAV",
      description: "Service après-vente et maintenance préventive pour assurer la pérennité de vos constructions.",
      features: ["Maintenance préventive", "Réparations urgentes", "Garantie étendue", "Support technique"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Nos Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Elite3Construction vous accompagne dans tous vos projets de construction et rénovation 
            avec expertise, qualité et innovation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="mr-6">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-black">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="px-8 pb-8">
                  <button 
                    onClick={() => (window as any).goToContact?.()}
                    className="w-full bg-orange-500 hover:bg-black text-white py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Demander un devis
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Notre Processus</h2>
            <p className="text-xl text-gray-600">Une méthode éprouvée pour garantir le succès de votre projet</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Analyse de vos besoins et conseils personnalisés" },
              { step: "02", title: "Étude", desc: "Élaboration des plans et devis détaillé" },
              { step: "03", title: "Réalisation", desc: "Exécution des travaux avec suivi qualité" },
              { step: "04", title: "Livraison", desc: "Réception des travaux et garantie" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Un projet en tête ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Nos experts sont à votre disposition pour étudier votre projet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => (window as any).goToContact?.()}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Demander un devis gratuit
            </button>
            <button 
              onClick={() => window.location.href = 'tel:+212657914466'}
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;