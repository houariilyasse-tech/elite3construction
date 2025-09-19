import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Realizations from './pages/Realizations';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Fonction pour naviguer vers la page contact
  const goToContact = () => {
    setCurrentPage('contact');
  };

  // Rendre la fonction disponible globalement pour les boutons
  React.useEffect(() => {
    (window as any).goToContact = goToContact;
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'services':
        return <Services />;
      case 'realizations':
        return <Realizations />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;