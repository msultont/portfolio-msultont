import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-mt-16">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
        Contact Muhammad Sulton Tauhid
      </h2>
      <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        Open to software engineering opportunities and technical collaborations.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href={personal.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
        >
          LinkedIn
        </a>
      </div>
      
      <div className="mt-8">
        <a
          href={personal.contact.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
