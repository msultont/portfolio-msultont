import { portfolioData } from '../data/portfolio';

export default function About() {
  const { personal, metrics } = portfolioData;

  return (
    <section id="about" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">About Muhammad Sulton Tauhid</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {personal.about}
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-6 border-b border-gray-200 pb-2">
            Demonstrated Impact
          </h3>
          <ul className="space-y-6">
            {metrics.map((metric, index) => (
              <li key={index}>
                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                <div className="text-sm text-gray-600 mt-1 leading-snug">{metric.label}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
