/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { BeautyScene } from './components/QuantumScene';
import { ServiceCard, TestimonialCard, ExclusiveFeature } from './components/Diagrams';
import { Menu, X, Droplets, Sparkles, MapPin, Phone, Instagram, ArrowDown, Sun, Flower } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-spa-base text-spa-text font-sans selection:bg-spa-terracotta selection:text-white overflow-x-hidden">
      
      {/* Navigation - Elegant & Warm */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-10'}`}>
        <div className="container mx-auto px-8 flex justify-between items-center relative">
          {/* Mobile Menu Button */}
          <button className="md:hidden z-50 text-spa-terracotta" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>

          {/* Desktop Left Links */}
          <div className="hidden md:flex gap-12 text-[10px] font-medium tracking-[0.25em] uppercase text-spa-terracotta/80">
             <a href="#sanctuary" onClick={scrollToSection('sanctuary')} className="hover:text-spa-text transition-colors">El Espacio</a>
             <a href="#rituals" onClick={scrollToSection('rituals')} className="hover:text-spa-text transition-colors">Tratamientos</a>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <h1 className={`font-serif tracking-widest font-medium text-spa-text transition-all duration-500 ${scrolled ? 'text-xl' : 'text-2xl md:text-3xl'}`}>
                ZM SANCTUARY
             </h1>
             <span className={`block text-[8px] tracking-[0.4em] uppercase text-spa-terracotta mt-1 transition-opacity ${scrolled ? 'opacity-0 h-0' : 'opacity-100'}`}>
                Wellness & Balance
             </span>
          </div>

          {/* Desktop Right Links */}
          <div className="hidden md:flex gap-12 text-[10px] font-medium tracking-[0.25em] uppercase text-spa-terracotta/80 items-center">
             <a href="#membership" onClick={scrollToSection('membership')} className="hover:text-spa-text transition-colors">Membresía</a>
             <a 
               href="#contact" 
               onClick={scrollToSection('contact')}
               className="border border-spa-terracotta text-spa-terracotta px-6 py-2 rounded-full hover:bg-spa-terracotta hover:text-white transition-all"
             >
               Reservar
             </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-spa-base flex flex-col items-center justify-center gap-8 transition-opacity duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
           <span className="text-xs text-spa-terracotta tracking-[0.3em] uppercase mb-4">Menú</span>
           <a href="#sanctuary" onClick={scrollToSection('sanctuary')} className="font-serif text-3xl italic text-spa-text hover:text-spa-terracotta">El Santuario</a>
           <a href="#rituals" onClick={scrollToSection('rituals')} className="font-serif text-3xl italic text-spa-text hover:text-spa-terracotta">Rituales</a>
           <a href="#contact" onClick={scrollToSection('contact')} className="font-serif text-3xl italic text-spa-text hover:text-spa-terracotta">Contacto</a>
      </div>

      {/* Hero Section - Warmth & Softness */}
      <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-spa-base to-[#FDF3F0]">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0 opacity-80">
            <BeautyScene />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-10">
            <div className="animate-fade-in-up space-y-8">
                <p className="text-spa-terracotta text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">
                    Caracas &bull; Holistic Spa
                </p>
                
                <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-spa-text leading-tight">
                    Armonía para <br/>
                    <span className="italic text-spa-terracotta font-light">cuerpo y alma</span>
                </h2>

                <p className="text-gray-500 font-light text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                    Un espacio diseñado en tonos tierra y texturas orgánicas para devolverle la calma a tus sentidos. La verdadera belleza nace de la paz interior.
                </p>

                <div className="pt-10 flex justify-center">
                    <button onClick={scrollToSection('sanctuary')} className="w-12 h-12 rounded-full border border-spa-sand flex items-center justify-center text-spa-terracotta hover:border-spa-terracotta transition-all animate-bounce duration-[3s]">
                        <ArrowDown size={16} />
                    </button>
                </div>
            </div>
        </div>
      </header>

      <main>
        {/* The Sanctuary Section */}
        <section id="sanctuary" className="py-32 bg-white relative">
            <div className="container mx-auto px-6 md:px-20">
                <div className="flex flex-col md:flex-row gap-20 items-center">
                    <div className="w-full md:w-1/2 relative group">
                        {/* Spa Image - Relaxing Beige Tones */}
                        <div className="rounded-[3rem] overflow-hidden aspect-[3/4] shadow-[20px_20px_60px_#d1d1d1,-20px_-20px_60px_#ffffff] relative z-10">
                            <img 
                                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1900&auto=format&fit=crop" 
                                alt="Woman Relaxing in Spa" 
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-[3s] opacity-90" 
                            />
                        </div>
                         {/* Decorative shape */}
                         <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-spa-rose rounded-full -z-10 blur-2xl opacity-60"></div>
                    </div>

                    <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
                        <span className="text-spa-terracotta text-xs font-bold tracking-[0.3em] uppercase">Nuestra Esencia</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-spa-text leading-tight">
                            Suavidad que <br/>transforma.
                        </h2>
                        <div className="w-16 h-[1px] bg-spa-sand mx-auto md:mx-0"></div>
                        <p className="text-gray-500 font-light text-lg leading-relaxed">
                            En <strong className="font-medium text-spa-terracotta">ZM Sanctuary</strong>, nos alejamos del ruido para abrazar la calidez. Nuestro entorno combina maderas claras, lino natural y aromas de vainilla y sándalo para crear una atmósfera de protección.
                        </p>
                        <p className="text-gray-500 font-light text-lg leading-relaxed">
                            Aquí no solo cuidamos tu piel, cuidamos tu energía. Cada rincón está pensado para que te sientas abrazada, segura y profundamente relajada.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Rituals / Services */}
        <section id="rituals" className="py-32 bg-spa-base overflow-hidden">
            <div className="container mx-auto px-6 mb-16 text-center">
                <span className="text-spa-terracotta text-[10px] font-bold tracking-[0.3em] uppercase">Experiencias</span>
                <h2 className="font-serif text-4xl mt-4 text-spa-text">Menú de Bienestar</h2>
            </div>
            
            {/* Horizontal Scroll Area */}
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-8 px-6 pb-12">
                <ServiceCard 
                    title="Masaje Sueco" 
                    description="Movimientos suaves y largos con aceites tibios de almendra para una relajación total del sistema nervioso." 
                    price="60 Min / Ref. 80"
                    icon={<Flower size={18} />}
                    delay={0}
                />
                <ServiceCard 
                    title="Ritual de Rosas" 
                    description="Exfoliación corporal con pétalos de rosa y sales del Himalaya, seguido de una envoltura hidratante." 
                    price="90 Min / Ref. 120"
                    icon={<Sparkles size={18} />}
                    delay={0.2}
                    highlighted={true}
                />
                <ServiceCard 
                    title="Sauna Detox" 
                    description="Sesión privada en nuestra sauna de madera de cedro para purificar la piel antes de cualquier tratamiento." 
                    price="45 Min / Ref. 50"
                    icon={<Sun size={18} />}
                    delay={0.4}
                />
            </div>
            
            <div className="text-center mt-12">
                <button className="text-[10px] font-bold tracking-[0.2em] uppercase border-b border-spa-terracotta pb-1 text-spa-terracotta hover:text-spa-text transition-colors">
                    Ver Carta Completa
                </button>
            </div>
        </section>

        {/* Gallery Section - Fixed Images */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96 w-full">
                    {/* Oils/Stones - Warm Beige */}
                    <div className="h-full overflow-hidden rounded-2xl relative group">
                        <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Massage Oils" />
                        <div className="absolute inset-0 bg-spa-terracotta/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    
                    {/* Facial/Relax - Soft Pink/White */}
                    <div className="h-full overflow-hidden rounded-2xl relative group">
                        <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Facial Treatment" />
                        <div className="absolute inset-0 bg-spa-terracotta/10 group-hover:bg-transparent transition-colors"></div>
                    </div>

                    {/* Interior - Clean Beige */}
                    <div className="h-full overflow-hidden rounded-2xl relative group">
                        <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Relaxation Room" />
                        <div className="absolute inset-0 bg-spa-terracotta/10 group-hover:bg-transparent transition-colors"></div>
                    </div>

                    {/* Sauna - Warm Wood (Fixed) */}
                    <div className="h-full overflow-hidden rounded-2xl relative group">
                        <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Sauna Interior" />
                        <div className="absolute inset-0 bg-spa-terracotta/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                </div>
            </div>
        </section>

        {/* Membership Feature */}
        <section id="membership" className="container mx-auto px-6 py-20">
            <ExclusiveFeature />
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-32 bg-spa-base relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute -right-20 top-40 w-96 h-96 bg-spa-rose rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-20 max-w-5xl relative z-10">
                <div className="bg-white p-12 md:p-24 shadow-xl shadow-spa-rose/30 border border-white rounded-[2rem]">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="font-serif text-4xl mb-6 text-spa-text">Tu Momento</h2>
                            <p className="text-gray-500 font-light mb-10">
                                Reserva tu espacio de paz. Atendemos con cita previa para garantizar la privacidad y el silencio que mereces.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-gray-600 font-serif text-lg hover:text-spa-terracotta transition-colors cursor-pointer group">
                                    <Phone size={20} className="text-spa-sand group-hover:text-spa-terracotta" strokeWidth={1} />
                                    <span>+58 (212) 999-ROSE</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-600 font-serif text-lg hover:text-spa-terracotta transition-colors cursor-pointer group">
                                    <Instagram size={20} className="text-spa-sand group-hover:text-spa-terracotta" strokeWidth={1} />
                                    <span>@ZMSanctuary</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-600 font-serif text-lg hover:text-spa-terracotta transition-colors cursor-pointer group">
                                    <MapPin size={20} className="text-spa-sand group-hover:text-spa-terracotta" strokeWidth={1} />
                                    <span>Altamira Village, Caracas</span>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-6">
                            <div className="group">
                                <label className="block text-[10px] uppercase tracking-widest text-spa-terracotta mb-2">Nombre</label>
                                <input type="text" className="w-full bg-spa-base rounded-md px-4 border border-transparent py-3 focus:outline-none focus:border-spa-terracotta transition-all font-serif text-gray-700" />
                            </div>
                            <div className="group">
                                <label className="block text-[10px] uppercase tracking-widest text-spa-terracotta mb-2">Experiencia</label>
                                <select className="w-full bg-spa-base rounded-md px-4 border border-transparent py-3 focus:outline-none focus:border-spa-terracotta transition-all font-serif text-gray-500">
                                    <option>Seleccione...</option>
                                    <option>Masaje Sueco</option>
                                    <option>Ritual de Rosas</option>
                                    <option>Sauna & Relax</option>
                                </select>
                            </div>
                            <button className="w-full py-4 bg-spa-text text-white hover:bg-spa-terracotta transition-colors duration-500 text-xs font-bold tracking-[0.2em] uppercase mt-4 rounded-md shadow-lg shadow-spa-terracotta/20">
                                Confirmar Cita
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

      </main>

      <footer className="bg-white py-12 border-t border-spa-rose/30">
        <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-xl tracking-widest text-spa-text mb-8">ZM SANCTUARY</h2>
            <div className="flex justify-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-8">
                <a href="#" className="hover:text-spa-terracotta">Servicios</a>
                <a href="#" className="hover:text-spa-terracotta">Ubicación</a>
                <a href="#" className="hover:text-spa-terracotta">Contacto</a>
            </div>
            <p className="text-[10px] text-gray-300 font-light">
                © 2024 ZM Sanctuary. Caracas, Venezuela.
            </p>
        </div>
      </footer>
    </div>
  );
};

export default App;