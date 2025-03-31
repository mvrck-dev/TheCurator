import type React from "react"
import Link from "next/link"
import { TheCuratorLogo } from "./the-curator-logo"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4">
      <Link href="/" className="flex items-center">
        <TheCuratorLogo />
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/upload">Upload</NavLink>
        <NavLink href="/books">Books</NavLink>
        <NavLink href="/contribute">Contribute</NavLink>
      </div>

      {/* Mobile menu button */}
      <button className="md:hidden text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-menu"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-white/90 hover:text-white transition-colors duration-200 text-lg font-light tracking-wide"
    >
      {children}
    </Link>
  )
}

