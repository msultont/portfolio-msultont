interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    link?: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col p-6 rounded-xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all h-full">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-50">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
