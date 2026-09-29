import { portfolioData } from '../data/portfolio';
import Link from 'next/link';

export default function Hero() {
  const { personal } = portfolioData;
  return (
    <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32 px-4 mx-auto max-w-5xl">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {personal.name}
        </h1>
        <h2 className="mt-4 text-xl sm:text-2xl font-medium text-gray-700">
          {personal.role} <span className="text-gray-400">/</span> {personal.subRole}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {personal.headline}
        </p>
        
        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <a
            href="#projects"
            className="rounded-md bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#experience"
            className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
          >
            View Experience
          </a>
          <a
            href={personal.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
          >
            LinkedIn <span aria-hidden="true">→</span>
          </a>
          <a
            href={personal.contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium leading-6 text-gray-500 hover:text-gray-900 transition-colors ml-auto sm:ml-4"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
