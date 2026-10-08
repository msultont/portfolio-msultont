import { portfolioData } from '../data/portfolio';

export default function Education() {
  const { education, certification } = portfolioData;

  return (
    <section id="education" className="py-20 bg-gray-50 border-y border-gray-100 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Education</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">{education.university}</h3>
              <p className="text-gray-900 font-medium mt-1">{education.degree}</p>
              <p className="text-sm text-gray-500 mt-1">GPA: {education.gpa}</p>
              <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                <span className="font-medium text-gray-900">Thesis:</span> {education.thesis}
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Certification</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">{certification.name}</h3>
              <p className="text-gray-900 font-medium mt-1">{certification.score}</p>
              <p className="text-sm text-gray-500 mt-1">{certification.year}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
