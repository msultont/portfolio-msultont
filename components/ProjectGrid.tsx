import { portfolioData } from '../data/portfolio';
import ProjectCard from './ProjectCard';

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Selected Software Projects</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Practical applications built to solve business workflows, data processing, and spatial planning.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {portfolioData.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
