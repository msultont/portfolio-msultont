import { portfolioData } from '../data/portfolio';

export default function EngineeringSnapshot() {
  const { skills } = portfolioData;

  return (
    <section className="py-12 border-y border-gray-100 bg-gray-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Frontend</h3>
            <div className="flex flex-col gap-1 text-sm text-gray-900 font-medium">
              <span>React</span>
              <span>Vue.js</span>
              <span>TypeScript</span>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Backend</h3>
            <div className="flex flex-col gap-1 text-sm text-gray-900 font-medium">
              <span>Django</span>
              <span>Python</span>
              <span>APIs</span>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Database</h3>
            <div className="flex flex-col gap-1 text-sm text-gray-900 font-medium">
              <span>PostgreSQL</span>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">GIS</h3>
            <div className="flex flex-col gap-1 text-sm text-gray-900 font-medium">
              <span>ArcGIS</span>
              <span>QGIS</span>
              <span>WebGIS</span>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Engineering</h3>
            <div className="flex flex-wrap md:flex-col gap-x-3 gap-y-1 text-sm text-gray-900 font-medium">
              <span>Agile</span>
              <span>Jira</span>
              <span>SRS / SDD</span>
              <span>Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
