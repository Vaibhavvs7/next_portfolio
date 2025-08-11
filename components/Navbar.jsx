import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-xl text-purple-700">My Portfolio</span>
        <div className="space-x-6">
          <a href="#about" className="text-gray-700 hover:text-purple-700 transition font-medium">About</a>
          <a href="#projects" className="text-gray-700 hover:text-purple-700 transition font-medium">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-purple-700 transition font-medium">Contact</a>
        </div>
      </div>
    </nav>
  )
}
      
