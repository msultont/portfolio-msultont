export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Muhammad Sulton Tauhid. All rights reserved.
        </p>
        <p className="text-xs text-gray-400 italic">
          &quot;an endless learner&quot;
        </p>
      </div>
    </footer>
  );
}
