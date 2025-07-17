"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from "next/dynamic";
const ArrowLeftIcon = dynamic(() =>
  import("@heroicons/react/24/solid").then((mod) => mod.ArrowLeftIcon),
  { ssr: false }
);
 
// test solid vs outline
export default function BrandingService() {
  return (
    <main className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          href="/#services" 
          className="inline-flex items-center text-gray-600 hover:text-primary transition-colors duration-300"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Services
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Branding <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create a powerful brand identity that resonates with your target audience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2>Our Branding Services</h2>
            <p>
              At Neural Flow, we help businesses build strong, memorable brands that connect with their 
              audience and stand out in the market. Our comprehensive branding services cover everything 
              from visual identity to brand strategy.
            </p>

            <h3>What We Offer</h3>
            <ul>
              <li>
                <strong>Brand Strategy:</strong> Developing your brand's core values and positioning
              </li>
              <li>
                <strong>Visual Identity:</strong> Logo design, color palette, and typography
              </li>
              <li>
                <strong>Brand Guidelines:</strong> Comprehensive brand usage rules
              </li>
              <li>
                <strong>Brand Assets:</strong> Templates and design elements
              </li>
            </ul>

            <h3>Benefits</h3>
            <ul>
              <li>Strong brand recognition</li>
              <li>Consistent brand messaging</li>
              <li>Increased customer trust</li>
              <li>Better market positioning</li>
              <li>Competitive advantage</li>
              <li>Long-term brand value</li>
            </ul>

            <h3>Our Process</h3>
            <ol>
              <li>
                <strong>Discovery:</strong> Understanding your business and target audience
              </li>
              <li>
                <strong>Strategy:</strong> Developing your brand positioning
              </li>
              <li>
                <strong>Design:</strong> Creating your visual identity
              </li>
              <li>
                <strong>Implementation:</strong> Applying your brand across all touchpoints
              </li>
              <li>
                <strong>Guidelines:</strong> Creating comprehensive brand guidelines
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Brand?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help create your unique brand identity
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
} 
