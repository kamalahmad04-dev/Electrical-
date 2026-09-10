import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { SERVICES_DATA } from './data/servicesData';
import { PROJECTS_DATA } from './data/projectsData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { HsePage } from './pages/HsePage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialService, setQuoteInitialService] = useState<string | undefined>();
  const [quoteInitialVoltage, setQuoteInitialVoltage] = useState<string | undefined>();
  const [quoteInitialNotes, setQuoteInitialNotes] = useState<string | undefined>();

  const [inspectingServiceId, setInspectingServiceId] = useState<string | null>(null);
  const [inspectingProjectId, setInspectingProjectId] = useState<string | null>(null);

  // Sync hash routing if user bookmarks or changes URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'services', 'projects', 'hse', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (service?: string, voltage?: string, notes?: string) => {
    setQuoteInitialService(service);
    setQuoteInitialVoltage(voltage);
    setQuoteInitialNotes(notes);
    setQuoteModalOpen(true);
  };

  const handleOpenQuoteWithSpecs = (specs: string) => {
    setQuoteInitialNotes(specs);
    setQuoteInitialService('Underground Cable Laying (Trefoil)');
    setQuoteInitialVoltage('132 kV Transmission');
    setQuoteModalOpen(true);
  };

  const selectedServiceObj = SERVICES_DATA.find((s) => s.id === inspectingServiceId) || null;
  const selectedProjectObj = PROJECTS_DATA.find((p) => p.id === inspectingProjectId) || null;

  return (
    <div className="min-h-screen bg-[#070B14] flex flex-col selection:bg-amber-500 selection:text-slate-950 font-sans antialiased">
      {/* Sticky Global Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main View Area */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
            onSelectService={(id) => setInspectingServiceId(id)}
            onSelectProject={(id) => setInspectingProjectId(id)}
            onOpenQuoteWithSpecs={handleOpenQuoteWithSpecs}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onOpenQuoteModalWithService={(title, voltage) =>
              handleOpenQuoteModal(title, voltage)
            }
            onOpenQuoteWithSpecs={handleOpenQuoteWithSpecs}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onSelectProject={(id) => setInspectingProjectId(id)}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        )}

        {currentPage === 'hse' && (
          <HsePage
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global High-Voltage Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Technical RFQ / Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => {
          setQuoteModalOpen(false);
          setQuoteInitialService(undefined);
          setQuoteInitialVoltage(undefined);
          setQuoteInitialNotes(undefined);
        }}
        initialService={quoteInitialService}
        initialVoltage={quoteInitialVoltage}
        initialNotes={quoteInitialNotes}
      />

      {/* Service Detail Inspector Modal */}
      <ServiceDetailModal
        service={selectedServiceObj}
        onClose={() => setInspectingServiceId(null)}
        onSelectForQuote={(title, voltage) => {
          setInspectingServiceId(null);
          handleOpenQuoteModal(title, voltage);
        }}
      />

      {/* Project Detail Inspector Modal */}
      <ProjectDetailModal
        project={selectedProjectObj}
        onClose={() => setInspectingProjectId(null)}
        onOpenQuoteModal={() => {
          setInspectingProjectId(null);
          handleOpenQuoteModal();
        }}
      />
    </div>
  );
}
