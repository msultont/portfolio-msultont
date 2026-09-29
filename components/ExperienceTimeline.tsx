import { portfolioData } from '../data/portfolio';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 bg-gray-50 border-y border-gray-100 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">Professional Experience</h2>
        
        <div className="space-y-12">
          {portfolioData.experience.map((job) => (
            <div key={job.id} className="relative flex flex-col md:flex-row gap-4 md:gap-8 group">
              <div className="md:w-1/4 shrink-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">{job.period}</h3>
                <div className="text-base font-medium text-gray-900">{job.company}</div>
              </div>
              <div className="md:w-3/4">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{job.role}</h4>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map(tech => (
                    <span key={tech} className="text-xs font-medium text-gray-500 bg-white border border-gray-200 px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
