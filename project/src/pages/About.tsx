import React from 'react';
import { Award, Users, Clock, Shield, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Award className="h-12 w-12 text-orange-500" />,
      title: "Qualité",
      description: "Nous utilisons uniquement des matériaux de première qualité et respectons les normes les plus strictes."
    },
    {
      icon: <Target className="h-12 w-12 text-orange-500" />,
      title: "Innovation",
      description: "Nous adoptons les dernières technologies et techniques pour offrir des solutions modernes."
    },
    {
      icon: <Clock className="h-12 w-12 text-orange-500" />,
      title: "Respect des Délais",
      description: "Nous nous engageons à livrer tous nos projets dans les délais convenus avec nos clients."
    }
  ];

  const stats = [
    { number: "50+", label: "Projets Réalisés" },
    { number: "8+", label: "Années d'Expérience" },
    { number: "100%", label: "Clients Satisfaits" },
    { number: "24/7", label: "Support Client" }
  ];

  const team = [
    {
      name: "Mohammed El Amrani",
      role: "Directeur Général",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      experience: "12 ans d'expérience"
    },
    {
      name: "Fatima Benali",
      role: "Architecte Senior",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      experience: "8 ans d'expérience"
    },
    {
      name: "Hassan Alaoui",
      role: "Ingénieur Structure",
      image: "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400",
      experience: "10 ans d'expérience"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">À Propos d'Elite3Construction</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Depuis plus de 8 ans, Elite3Construction s'impose comme un acteur majeur du secteur 
              de la construction au Maroc, alliant expertise technique et innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Notre Histoire</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Elite3Construction a été fondée en 2016 avec une vision claire : révolutionner 
                  le secteur de la construction au Maroc en alliant qualité, innovation et respect 
                  de l'environnement.
                </p>
                <p>
                  Depuis nos débuts modestes à Mohammedia, nous avons grandi pour devenir l'un 
                  des acteurs les plus respectés de la région, avec des projets d'envergure 
                  réalisés dans tout le Royaume.
                </p>
                <p>
                  Notre équipe de professionnels passionnés s'engage chaque jour à dépasser 
                  les attentes de nos clients et à contribuer au développement urbain durable 
                  du pays.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Elite3Construction"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-lg">
                <div className="text-3xl font-bold">8+</div>
                <div className="text-sm">Années d'Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes fondamentaux qui guident notre travail et nos relations avec nos clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Elite3Construction en Chiffres</h2>
            <p className="text-xl text-gray-300">Des résultats qui parlent d'eux-mêmes</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-white text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Notre Équipe</h2>
            <p className="text-xl text-gray-600">
              Des professionnels passionnés au service de vos projets
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="h-12 w-12 text-orange-500 mr-4" />
                <h3 className="text-3xl font-bold text-black">Notre Mission</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Offrir à nos clients des solutions de construction innovantes, durables et de haute 
                qualité, en dépassant leurs attentes à chaque projet. Nous nous engageons à créer 
                des espaces qui améliorent la qualité de vie tout en respectant l'environnement.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Heart className="h-12 w-12 text-orange-500 mr-4" />
                <h3 className="text-3xl font-bold text-black">Notre Vision</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Devenir la référence en matière de construction au Maroc, reconnue pour son 
                excellence, son innovation et son engagement envers le développement durable. 
                Nous aspirons à façonner l'avenir urbain du pays avec des projets emblématiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Nos Certifications</h2>
            <p className="text-xl text-gray-600">
              Des garanties de qualité et de professionnalisme
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="h-16 w-16 text-orange-500" />, title: "ISO 9001:2015", desc: "Management Qualité" },
              { icon: <Award className="h-16 w-16 text-orange-500" />, title: "Qualification BTP", desc: "Bâtiments & Travaux Publics" },
              { icon: <Users className="h-16 w-16 text-orange-500" />, title: "Certification CNSS", desc: "Sécurité au Travail" },
              { icon: <Clock className="h-16 w-16 text-orange-500" />, title: "Garantie Décennale", desc: "Protection Client" }
            ].map((cert, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à nous rejoindre ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Faites confiance à Elite3Construction pour concrétiser vos projets les plus ambitieux
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => (window as any).goToContact?.()}
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Demander un devis
            </button>
            <button 
              onClick={() => window.location.href = 'tel:+212657914466'}
              className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;