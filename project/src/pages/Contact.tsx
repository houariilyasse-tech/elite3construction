import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      project: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-8 w-8 text-orange-500" />,
      title: "Adresse",
      details: ["BD Palestine 4 LOT Houria 1", "Étage 2 Appartement 3", "Mohammedia, Maroc"]
    },
    {
      icon: <Phone className="h-8 w-8 text-orange-500" />,
      title: "Téléphone",
      details: ["+212.6.57.91.44.66"]
    },
    {
      icon: <Mail className="h-8 w-8 text-orange-500" />,
      title: "Email",
      details: ["elite3construction@gmail.com"]
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Horaires",
      details: ["Lun - Ven: 8h00 - 18h00", "Sam: 8h00 - 12h00", "Dim: Fermé"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Contactez-Nous</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Nous sommes à votre disposition pour étudier votre projet et vous accompagner 
            dans sa réalisation. N'hésitez pas à nous contacter !
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-black mb-8">Demander un Devis Gratuit</h2>
                
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-green-700">Votre message a été envoyé avec succès ! Nous vous répondrons rapidement.</span>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="+212 6 XX XX XX XX"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="project" className="block text-sm font-semibold text-gray-700 mb-2">
                        Type de projet
                      </label>
                      <select
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      >
                        <option value="">Sélectionner un type</option>
                        <option value="construction">Construction nouvelle</option>
                        <option value="renovation">Rénovation</option>
                        <option value="extension">Extension</option>
                        <option value="structure">Structure métallique</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Description du projet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                      placeholder="Décrivez votre projet en détail : surface, localisation, budget estimé, délais souhaités..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-black text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Envoyer ma demande
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Quick Contact */}
              <div className="bg-orange-500 p-6 rounded-lg text-white">
                <h3 className="text-xl font-bold mb-3">Besoin d'une réponse rapide ?</h3>
                <p className="mb-4">Appelez-nous directement pour un conseil immédiat</p>
                <a 
                  href="tel:+212657914466"
                  className="inline-flex items-center bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Notre Localisation</h2>
            <p className="text-xl text-gray-600">
              Venez nous rencontrer dans nos bureaux à Mohammedia
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  BD Palestine 4 LOT Houria 1, Étage 2 Appartement 3<br />
                  Mohammedia, Maroc
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Questions Fréquentes</h2>
            <p className="text-xl text-gray-600">
              Les réponses aux questions les plus courantes
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Combien de temps faut-il pour avoir un devis ?",
                answer: "Nous nous engageons à vous fournir un devis détaillé sous 48h après votre demande."
              },
              {
                question: "Proposez-vous un service de financement ?",
                answer: "Oui, nous travaillons avec plusieurs partenaires bancaires pour vous aider dans le financement de votre projet."
              },
              {
                question: "Quelle est la durée de garantie de vos travaux ?",
                answer: "Nous offrons une garantie décennale sur tous nos travaux de construction et une garantie de 2 ans sur les finitions."
              },
              {
                question: "Travaillez-vous uniquement dans la région de Mohammedia ?",
                answer: "Non, nous intervenons dans tout le Maroc. N'hésitez pas à nous contacter même si votre projet est éloigné."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-black mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Une question ? Un projet ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Notre équipe d'experts est là pour vous conseiller
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+212657914466"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Appeler maintenant
            </a>
            <a 
              href="mailto:elite3construction@gmail.com"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              <Mail className="h-5 w-5 mr-2" />
              Envoyer un email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;