"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from "next/dynamic";
const ArrowLeftIcon = dynamic(() =>
  import("@heroicons/react/24/outline").then((mod) => mod.ArrowLeftIcon),
  { ssr: false }
);
 // test solid vs outline


export default function WebDevelopmentService() {
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
              Web Development <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your digital presence with modern, scalable, and high-performance web solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2>Our Web Development Approach</h2>
            <p>
              At Neural Flow, we specialize in creating cutting-edge web applications that drive business growth. 
              Our development process combines technical expertise with creative problem-solving to deliver 
              solutions that exceed expectations.
            </p>

            <h3>Technologies We Use</h3>
            <ul>
              <li>
                <strong>Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Python, Django, Express
              </li>
              <li>
                <strong>Database:</strong> PostgreSQL, MongoDB, Redis
              </li>
              <li>
                <strong>DevOps:</strong> Docker, AWS, CI/CD
              </li>
            </ul>

            <h3>Key Features</h3>
            <ul>
              <li>Responsive design for all devices</li>
              <li>Optimized performance and loading times</li>
              <li>SEO-friendly architecture</li>
              <li>Secure and scalable infrastructure</li>
              <li>Real-time updates and notifications</li>
              <li>Analytics and tracking integration</li>
            </ul>

            <h3>Our Process</h3>
            <ol>
              <li>
                <strong>Discovery:</strong> Understanding your requirements and business goals
              </li>
              <li>
                <strong>Planning:</strong> Creating a detailed project roadmap and architecture
              </li>
              <li>
                <strong>Development:</strong> Building with clean, maintainable code
              </li>
              <li>
                <strong>Testing:</strong> Comprehensive quality assurance
              </li>
              <li>
                <strong>Deployment:</strong> Smooth launch and ongoing support
              </li>
            </ol>

            <h3>Why Choose Us?</h3>
            <ul>
              <li>Experienced development team</li>
              <li>Modern tech stack and best practices</li>
              <li>Focus on user experience</li>
              <li>Regular updates and communication</li>
              <li>Post-launch support and maintenance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help transform your ideas into reality
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
