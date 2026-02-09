'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { Button } from '@/components/ui/Button'
import styles from './Navigation.module.css'

export function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const navigation = [
    { name: 'Home', href: isHome ? '#hero' : '/#hero' },
    { name: 'Sobre', href: isHome ? '#metodo' : '/#metodo' },
    { name: 'Serviços', href: isHome ? '#servicos' : '/#servicos' },
    { name: 'Contato', href: isHome ? '#contato' : '/#contato' },
  ]

  const services = [
    { name: 'Personal Training', href: isHome ? '#servicos' : '/#servicos' },
    { name: 'Pilates', href: isHome ? '#servicos' : '/#servicos' },
    { name: 'Método Integrado', href: isHome ? '#servicos' : '/#servicos' },
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoTitle}>Letícia Ferreira</span>
          <span className={styles.logoSubtitle}>Personal & Pilates</span>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={styles.navLink}
            >
              {item.name}
            </Link>
          ))}
          
          <Button variant="primary" href="https://wa.me/5532984138413">
            Agendar Avaliação
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={styles.mobileMenuButton}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${isMenuOpen ? styles.open : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Navigation */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        {navigation.map((item) => (
          <div key={item.name}>
            <Link
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={styles.mobileNavLink}
            >
              {item.name}
            </Link>
            {item.name === 'Serviços' && (
              <div className={styles.mobileSubMenu}>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={styles.mobileSubNavLink}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <Button
          variant="primary"
          href="https://wa.me/5532984138413"
        >
          Agendar Avaliação
        </Button>
      </div>
    </header>
  )
}
