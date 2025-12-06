/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Gem, Diamond, Sparkles, Flower } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    price: string;
    icon: React.ReactNode;
    delay: number;
    highlighted?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price, icon, delay, highlighted = false }) => {
  return (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className={`group relative p-8 flex flex-col items-center text-center w-full md:w-80 rounded-[2rem] transition-all duration-700 border ${highlighted ? 'bg-white shadow-[0_15px_40px_-10px_rgba(197,157,147,0.3)] border-spa-terracotta/30' : 'bg-white border-transparent hover:border-spa-rose hover:shadow-lg hover:shadow-spa-rose/20'}`}
    >
        <div className={`mb-6 p-4 rounded-full transition-colors duration-500 ${highlighted ? 'text-white bg-spa-terracotta' : 'text-spa-terracotta bg-spa-base group-hover:bg-spa-rose'}`}>
            {icon}
        </div>
        
        <h3 className="font-serif text-2xl mb-4 text-spa-text">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light">
            {description}
        </p>
        
        <div className="mt-auto w-full">
            <span className="block text-spa-terracotta text-[10px] font-bold tracking-widest uppercase mb-4 py-2 border-t border-dashed border-spa-rose">{price}</span>
        </div>
    </motion.div>
  );
};

export const TestimonialCard: React.FC<{ quote: string, author: string, role: string }> = ({ quote, author, role }) => {
    return (
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-50">
           {/* Not used in this layout variant but kept for compatibility */}
        </div>
    )
}

export const ExclusiveFeature: React.FC = () => {
    return (
        <div className="relative rounded-[2rem] bg-[#E6D2B5] text-spa-text p-12 md:p-20 overflow-hidden text-center shadow-xl">
            {/* Pattern Overlay */}
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-multiply"></div>
            {/* Soft Glow */}
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white rounded-full blur-[100px] opacity-40"></div>
            
            <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
                <Flower className="text-white mb-6" size={32} strokeWidth={1} />
                <h3 className="font-serif text-3xl md:text-5xl mb-6 text-[#5D4037]">Membresía Harmony</h3>
                <p className="text-[#5D4037]/80 font-light mb-10 text-lg leading-relaxed">
                    Un programa pensado para tu equilibrio mensual. Disfruta de un masaje mensual, acceso ilimitado a áreas húmedas y descuentos exclusivos en productos de skincare orgánico.
                </p>
                <button className="px-10 py-4 bg-white text-spa-terracotta text-xs font-bold tracking-[0.25em] uppercase hover:bg-spa-base transition-all duration-500 rounded-full shadow-lg">
                    Ver Beneficios
                </button>
            </div>
        </div>
    )
}

// Retaining exports
export const SurfaceCodeDiagram = () => <div />;
export const TransformerDecoderDiagram = () => <div />;
export const PerformanceMetricDiagram = () => <div />;