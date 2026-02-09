'use client'

import Link from 'next/link'
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'primary-large' | 'primary-huge' | 'outline' | 'ghost'

interface BaseButtonProps {
  variant?: ButtonVariant
  className?: string
  children: ReactNode
  icon?: ReactNode
  loading?: boolean
}

type ButtonAsButton = BaseButtonProps & 
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

type ButtonAsLink = BaseButtonProps & 
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantMap: Record<ButtonVariant, string> = {
  'primary': styles.primary,
  'primary-large': styles.primaryLarge,
  'primary-huge': styles.primaryHuge,
  'outline': styles.outline,
  'ghost': styles.ghost,
}

export function Button({ 
  variant = 'primary', 
  className = '',
  children, 
  href,
  icon,
  loading = false,
  ...props 
}: ButtonProps) {
  const variantClass = variantMap[variant]
  const classes = `${styles.button} ${variantClass} ${className}`.trim()

  // WhatsApp link detection
  const isWhatsApp = href?.includes('wa.me') || href?.includes('whatsapp')
  const whatsappHref = isWhatsApp && href 
    ? href.startsWith('http') 
      ? href 
      : `https://wa.me/${href.replace(/\D/g, '')}?text=Olá! Gostaria de agendar uma avaliação.`
    : href

  const content = (
    <>
      {loading ? null : icon || (isWhatsApp && <FaWhatsapp />)}
      {children}
    </>
  )

  if (href) {
    // External link
    if (href.startsWith('http') || href.startsWith('mailto:') || isWhatsApp) {
      return (
        <a
          href={whatsappHref || href}
          className={classes}
          target={isWhatsApp || href.startsWith('http') ? '_blank' : undefined}
          rel={isWhatsApp || href.startsWith('http') ? 'noopener noreferrer' : undefined}
          data-loading={loading}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      )
    }

    // Internal link
    return (
      <Link href={href} className={classes} data-loading={loading} {...(props as Record<string, unknown>)}>
        {content}
      </Link>
    )
  }

  // Button element
  return (
    <button 
      className={classes} 
      data-loading={loading}
      disabled={loading || (props as ButtonHTMLAttributes<HTMLButtonElement>).disabled}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  )
}
