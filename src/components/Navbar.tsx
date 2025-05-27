'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 w-full z-50 transition-shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-heading font-bold text-primary">
            SOS Motores
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary">
              Início
            </Link>
            <Link href="/#servicos" className="text-gray-600 hover:text-primary">
              Serviços
            </Link>
            <Link href="/#quem-somos" className="text-gray-600 hover:text-primary">
              Quem Somos
            </Link>
            <Link href="/orcamento" className="btn-primary">
              Pedir Orçamento
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
                onClick={toggleMenu}
              >
                Início
              </Link>
              <Link
                href="/#servicos"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
                onClick={toggleMenu}
              >
                Serviços
              </Link>
              <Link
                href="/#quem-somos"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
                onClick={toggleMenu}
              >
                Quem Somos
              </Link>
              <Link
                href="/orcamento"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
                onClick={toggleMenu}
              >
                Pedir Orçamento
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 