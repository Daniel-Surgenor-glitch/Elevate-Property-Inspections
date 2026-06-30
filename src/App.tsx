/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Phone, Mail, Menu, X, ArrowRight, CheckCircle, Clock } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  // Logo and Hero Image Paths generated earlier
  const logoPath = "/src/assets/images/logo_1782825756910.jpg";
  const heroImagePath = "/src/assets/images/hero_image_1782825769891.jpg";

  // Business Details
  const businessName = "Elevate Property Inspections";
  const phoneNumber = "07477650228";
  const emailAddress = "elevatepropertyinspections@outlook.com";

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans flex flex-col selection:bg-[#A5A58D] selection:text-white">
      {/* 1. TOP UTILITY HEADER (Phone & Email Contact Info) */}
      <div className="bg-[#2D3E40] text-[#E8E6E1] py-2 px-4 sm:px-6 md:px-8 text-xs sm:text-sm font-medium border-b border-[#3D5254]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-end items-center gap-3 sm:gap-6">
          {/* Phone Link */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-2 hover:text-white transition-colors duration-200 group"
            id="phone-link"
          >
            <span className="p-1 rounded-md bg-[#3D5254] text-[#E8E6E1] group-hover:bg-[#6B705C] group-hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
            </span>
            <span className="tracking-wide">{phoneNumber}</span>
          </a>

          {/* Divider on Desktop */}
          <span className="hidden sm:inline text-[#3D5254]">|</span>

          {/* Email Link */}
          <a
            href={`mailto:${emailAddress}`}
            className="flex items-center gap-2 hover:text-white transition-colors duration-200 group"
            id="email-link"
          >
            <span className="p-1 rounded-md bg-[#3D5254] text-[#E8E6E1] group-hover:bg-[#6B705C] group-hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
            </span>
            <span className="lowercase tracking-wide">{emailAddress}</span>
          </a>
        </div>
      </div>

      {/* 2. MAIN SLEEK NAVIGATION MENU */}
      <header className="bg-white sticky top-0 z-40 shadow-xs border-b border-stone-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Brand Name Left Hand Side */}
          <div className="flex items-center gap-3 md:gap-4 select-none">
            <div className="relative group overflow-hidden rounded-lg shadow-sm border border-stone-100 p-0.5 bg-white">
              <img
                src={logoPath}
                alt={`${businessName} Logo`}
                className="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
                id="brand-logo"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg md:text-xl text-[#2D3E40] leading-tight tracking-tight uppercase">
                Elevate
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-[#6B705C] tracking-wider uppercase">
                Property Inspections
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-semibold text-[#6B705C] hover:text-[#2D3E40] uppercase tracking-wide transition-colors py-2">
              Home
            </a>
            <a href="#about" className="text-sm font-semibold text-[#6B705C] hover:text-[#2D3E40] uppercase tracking-wide transition-colors py-2">
              About
            </a>
            <a href="#services" className="text-sm font-semibold text-[#6B705C] hover:text-[#2D3E40] uppercase tracking-wide transition-colors py-2">
              Services
            </a>
            
            {/* Contact CTA Button */}
            <button
              onClick={() => setShowContactModal(true)}
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-[#A5A58D] rounded-full shadow-sm hover:bg-[#6B705C] hover:shadow-md active:bg-[#525647] transition-all duration-200 cursor-pointer uppercase tracking-wider"
              id="nav-contact-button"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#6B705C] hover:text-[#2D3E40] hover:bg-[#FAF9F6] rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-stone-200 bg-white absolute top-full left-0 w-full shadow-lg animate-fade-in z-50">
            <div className="px-4 pt-3 pb-6 space-y-3 flex flex-col">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#6B705C] hover:text-[#2D3E40] px-3 py-2 rounded-lg hover:bg-[#FAF9F6] transition-colors uppercase tracking-wide"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#6B705C] hover:text-[#2D3E40] px-3 py-2 rounded-lg hover:bg-[#FAF9F6] transition-colors uppercase tracking-wide"
              >
                About
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#6B705C] hover:text-[#2D3E40] px-3 py-2 rounded-lg hover:bg-[#FAF9F6] transition-colors uppercase tracking-wide"
              >
                Services
              </a>
              <hr className="border-stone-100 my-1" />
              {/* Contact Button in Mobile Menu */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowContactModal(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-base font-bold text-white bg-[#A5A58D] rounded-full hover:bg-[#6B705C] transition-colors mt-2 cursor-pointer uppercase tracking-wider"
                id="mobile-contact-button"
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO IMAGE SECTION (Full-Width, Stretched) */}
      <main id="home" className="flex-grow flex flex-col">
        <div className="relative w-full overflow-hidden flex-grow flex items-stretch" style={{ minHeight: 'calc(100vh - 128px)' }}>
          {/* Stretched Hero Image covering the whole available space */}
          <img
            src={heroImagePath}
            alt="Elevate Property Inspections Aerial Drone View of Properties"
            className="w-full object-cover select-none animate-fade-in grayscale-[10%] brightness-[90%]"
            style={{ width: '100%', height: '100%', minHeight: 'calc(100vh - 128px)' }}
            referrerPolicy="no-referrer"
            id="hero-image"
          />
          
          {/* Subtly darkened overlay gradient for premium cinematic styling */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-[#2D3E40]/15 to-transparent pointer-events-none" />
        </div>

        {/* 3.1. ABOUT US SECTION (White Background, Two-Column Layout) */}
        <section id="about" className="bg-white py-16 sm:py-24 border-b border-stone-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Extensive About Text */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-[#6B705C] font-bold text-xs tracking-wider uppercase">
                    <span className="w-8 h-0.5 bg-[#6B705C]"></span>
                    Who We Are
                  </div>
                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#2D3E40] tracking-tight">
                    About Elevate Property Inspections
                  </h2>
                </div>

                <div className="text-stone-600 space-y-5 text-sm sm:text-base leading-relaxed">
                  <p>
                    At <strong className="text-[#2D3E40] font-semibold">Elevate Property Inspections</strong>, we provide professional drone inspections, aerial photography, and property media services across Belfast and throughout Northern Ireland. We help homeowners, landlords, estate agents, property managers, construction companies, and commercial clients access high-quality aerial data safely, quickly, and cost-effectively.
                  </p>
                  <p>
                    Our specialist services include roof inspections, chimney inspections, gutter inspections, and drone property surveys, allowing us to identify visible defects without the need for expensive scaffolding or access equipment. Whether you're buying a property, investigating a leak, checking storm damage, or carrying out routine maintenance, our detailed aerial inspections provide clear imagery and video to help you make informed decisions.
                  </p>
                  <p>
                    We also work closely with estate agents and property professionals, producing professional real estate photography, aerial property photography, drone videos, and 360° virtual property tours that help properties stand out online and attract more buyers and tenants.
                  </p>
                  <p>
                    For the construction industry, we provide construction progress monitoring, site progress photography, drone construction surveys, and regular aerial updates to document projects from start to finish. These services are ideal for contractors, developers, architects, and project managers who require accurate visual records for clients, stakeholders, and marketing.
                  </p>
                  <p>
                    Based in Belfast, Elevate Property Inspections proudly serves customers throughout Northern Ireland, delivering reliable, professional, and fully insured drone services with a strong focus on quality, safety, and customer satisfaction.
                  </p>
                  <p className="font-medium text-[#2D3E40]">
                    Whether you need a drone roof inspection, chimney inspection, gutter survey, property inspection, construction progress monitoring, aerial photography, drone videography, or a 360° virtual property tour, Elevate Property Inspections is your trusted partner for professional aerial inspection and imaging services across Northern Ireland.
                  </p>
                </div>
              </div>

              {/* Right Column: Replicated Interactive Action Box - Sized Slightly Bigger */}
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <div className="bg-[#FAF9F6] p-8 sm:p-10 md:p-12 rounded-3xl shadow-xl border border-stone-200/80 transition-transform duration-300 hover:shadow-2xl">
                  <div className="flex items-center gap-2.5 text-[#6B705C] font-bold text-xs sm:text-sm tracking-wider uppercase mb-3">
                    <CheckCircle className="w-4.5 h-4.5 text-[#6B705C]" />
                    Professional Drone Surveys
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#2D3E40] tracking-tight mb-4">
                    Aerial Property Inspections
                  </h3>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
                    Safe, reliable, and high-definition drone-eye aerial inspections. Delivering crystal-clear surveying for residential and commercial buildings across the region.
                  </p>
                  <div className="flex flex-col gap-4">
                    <button
                      onClick={() => setShowContactModal(true)}
                      className="flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#A5A58D] rounded-full hover:bg-[#6B705C] shadow-md hover:shadow-lg transition-all cursor-pointer uppercase tracking-wider w-full"
                      id="about-cta-contact"
                    >
                      Get In Touch
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="flex items-center justify-center px-8 py-4 text-base font-bold text-[#2D3E40] bg-stone-200/80 hover:bg-stone-200 rounded-full transition-colors uppercase tracking-wider w-full text-center border border-stone-300/40"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* 4. SLEEK CONTACT INTERACTION MODAL (FALLBACK) */}
      {showContactModal && (
        <div className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in" id="contact-modal">
          <div className="bg-[#FAF9F6] rounded-2xl max-w-md w-full shadow-2xl border border-stone-200 overflow-hidden transform transition-all">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#2D3E40] to-[#1C292B] text-white p-6 relative">
              <button
                onClick={() => setShowContactModal(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
                aria-label="Close dialog"
                id="close-modal-x"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="font-display font-bold text-xl mb-1 uppercase tracking-tight">Contact Our Experts</h2>
              <p className="text-[#E8E6E1] text-xs font-medium uppercase tracking-wider">Elevate Property Inspections</p>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <p className="text-stone-600 text-sm leading-relaxed">
                Reach out today to discuss your property survey, drone imaging requirements, or request a quick, free estimate.
              </p>

              {/* Action Channels */}
              <div className="space-y-4">
                {/* Phone Link Channel */}
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center gap-4 p-4 rounded-xl border border-stone-200 bg-white hover:bg-[#A5A58D]/10 hover:border-[#A5A58D] transition-all duration-200 group"
                  id="modal-phone-button"
                >
                  <div className="p-3 rounded-lg bg-[#FAF9F6] text-[#6B705C] group-hover:bg-[#6B705C] group-hover:text-white transition-all border border-stone-200">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Direct Call</div>
                    <div className="text-base font-bold text-[#2D3E40] tracking-wide">{phoneNumber}</div>
                  </div>
                </a>

                {/* Email Link Channel */}
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex items-center gap-4 p-4 rounded-xl border border-stone-200 bg-white hover:bg-[#A5A58D]/10 hover:border-[#A5A58D] transition-all duration-200 group"
                  id="modal-email-button"
                >
                  <div className="p-3 rounded-lg bg-[#FAF9F6] text-[#6B705C] group-hover:bg-[#6B705C] group-hover:text-white transition-all border border-stone-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Send Email</div>
                    <div className="text-sm font-bold text-[#2D3E40] break-all select-all">{emailAddress}</div>
                  </div>
                </a>
              </div>

              {/* Service Info Accent */}
              <div className="flex items-center gap-3 p-3.5 rounded-lg bg-white text-[#2D3E40] text-xs border border-stone-200">
                <Clock className="w-4 h-4 text-[#6B705C] shrink-0" />
                <span>We typically respond to all email inquiries within 2 hours.</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-stone-100 p-4 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setShowContactModal(false)}
                className="px-5 py-2 text-sm font-bold text-stone-600 hover:text-[#2D3E40] hover:bg-stone-200 rounded-full transition-colors cursor-pointer uppercase tracking-wider"
                id="close-modal-button"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
