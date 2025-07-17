import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function WorkflowAutomationService() {
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
              Workflow <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Automation</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your business processes with intelligent automation solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2>Our Workflow Automation Solutions</h2>
            <p>
              At Neural Flow, we specialize in creating custom automation solutions that streamline your 
              business processes, reduce manual work, and increase efficiency. Our automation tools are 
              designed to work seamlessly with your existing systems.
            </p>

            <h3>What We Offer</h3>
            <ul>
              <li>
                <strong>Custom Scripts:</strong> Tailored automation scripts for your specific needs
              </li>
              <li>
                <strong>Process Optimization:</strong> Analysis and improvement of existing workflows
              </li>
              <li>
                <strong>Integration Solutions:</strong> Connecting different systems and platforms
              </li>
              <li>
                <strong>Automated Reporting:</strong> Real-time data collection and reporting
              </li>
            </ul>

            <h3>Benefits</h3>
            <ul>
              <li>Reduced manual workload</li>
              <li>Increased accuracy and consistency</li>
              <li>Faster process completion</li>
              <li>Cost savings through efficiency</li>
              <li>Improved employee satisfaction</li>
              <li>Better data management</li>
            </ul>

            <h3>Our Process</h3>
            <ol>
              <li>
                <strong>Analysis:</strong> Understanding your current workflows and pain points
              </li>
              <li>
                <strong>Design:</strong> Creating the optimal automation solution
              </li>
              <li>
                <strong>Development:</strong> Building and testing the automation
              </li>
              <li>
                <strong>Implementation:</strong> Smooth integration with your systems
              </li>
              <li>
                <strong>Support:</strong> Ongoing maintenance and optimization
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Workflows?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help streamline your business processes
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