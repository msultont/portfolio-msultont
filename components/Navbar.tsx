import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="shrink-0">
            <Link href="/" className="font-semibold text-lg text-gray-900">
              Sulton
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="#about"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/cv-LEAN (ENGLISH).pdf"
              target="_blank"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
            >
              Resume
            </Link>
          </div>
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none text-sm font-medium text-gray-700">
              Menu
            </summary>
            <div className="absolute right-0 top-full mt-3 flex min-w-40 flex-col gap-4 rounded-md border border-gray-200 bg-white p-4 shadow-lg">
              <Link href="#about" className="text-sm text-gray-700">About</Link>
              <Link href="#projects" className="text-sm text-gray-700">Projects</Link>
              <Link href="#experience" className="text-sm text-gray-700">Experience</Link>
              <Link href="#skills" className="text-sm text-gray-700">Skills</Link>
              <Link href="#contact" className="text-sm text-gray-700">Contact</Link>
              <Link
                href="/cv-LEAN (ENGLISH).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600"
              >
                Resume
              </Link>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
