import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="font-semibold text-lg text-gray-900">
              Sulton Wibawa
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">About</Link>
            <Link href="#projects" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Projects</Link>
            <Link href="#experience" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Experience</Link>
            <Link href="#skills" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Skills</Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Contact</Link>
            <Link href="/cv-LEAN(ENGLISH).pdf" target="_blank" className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">Resume</Link>
          </div>
          {/* Mobile menu button (Simplified for this version) */}
          <div className="md:hidden flex items-center">
             <span className="text-xs text-gray-500">Menu</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
