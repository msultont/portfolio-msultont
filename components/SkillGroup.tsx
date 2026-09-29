import { portfolioData } from '../data/portfolio';

export default function SkillGroup() {
  const { skills } = portfolioData;

  const categories = [
    { label: "Frontend", items: skills.frontend },
    { label: "Backend", items: skills.backend },
    { label: "Database", items: skills.database },
    { label: "GIS / Data", items: skills.gis_data },
    { label: "Engineering Practices", items: skills.engineering },
    { label: "Additional", items: skills.additional },
  ];

  return (
    <section id="skills" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">Engineering Stack</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {categories.map(category => (
          <div key={category.label}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4 pb-2 border-b border-gray-100">
              {category.label}
            </h3>
            <ul className="space-y-2">
              {category.items.map(item => (
                <li key={item} className="text-gray-600 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
