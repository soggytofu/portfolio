'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { name: 'HOME', href: '/' },
  { name: 'PROJECTS', href: '/projects' },
  { name: 'ABOUT', href: '/about' },
]

export function Header() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/4"></div> {/* Spacer */}
        <nav className="flex-1">
          <ul className="flex justify-center space-x-6">
            {tabs.map((tab) => (
              <li key={tab.name}>
                <Link 
                  href={tab.href} 
                  className={`transition-colors ${
                    isActive(tab.href)
                      ? 'text-blue-400 font-bold' 
                      : 'hover:text-blue-400'
                  }`}
                >
                  {tab.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-1/4 flex justify-end">
          <Link href="/about" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
            <span className="text-lg font-semibold">Regis Pak</span>
            <Image
              src="/images/RegisSakuraPFP.jpg"
              alt="Regis Pak"
              width={40}
              height={40}
              className="object-cover"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}

