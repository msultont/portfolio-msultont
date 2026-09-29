export default function Process() {
  const steps = [
    "DISCOVER",
    "REQUIREMENTS",
    "UI / SYSTEM DESIGN",
    "DEVELOPMENT",
    "INTEGRATION",
    "TESTING",
    "DELIVERY"
  ];

  return (
    <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">Software Development Process</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <div className="flex items-center justify-center h-12 w-full md:w-auto px-4 rounded-md bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700 tracking-wider">
              {step}
            </div>
            {index < steps.length - 1 && (
              <div className="text-gray-300 hidden md:block">→</div>
            )}
            {index < steps.length - 1 && (
              <div className="text-gray-300 md:hidden">↓</div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Demonstrated experience translating user stories into structured SRS/SDD, designing ERDs and UI/UX flows, and leading Agile sprints to deliver production-ready MVPs.
      </div>
    </section>
  );
}
