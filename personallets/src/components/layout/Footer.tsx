import Link from 'next/link'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Button } from '@/components/ui/Button'
import styles from './Footer.module.css'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Contato', href: '/contato' },
  ],
  services: [
    { name: 'Personal Training', href: '/servicos#personal-training' },
    { name: 'Pilates', href: '/servicos#pilates' },
    { name: 'Método Integrado', href: '/servicos#metodo-integrado' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://instagram.com/ferreiralets.fit',
      icon: FaInstagram,
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/5532984138413',
      icon: FaWhatsapp,
    },
  ],
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Main footer content */}
        <div className={styles.footerGrid}>
          {/* Brand column */}
          <div className={styles.footerBrand}>
            <h3 className={styles.footerTitle}>Letícia Ferreira</h3>
            <p className={styles.footerDescription}>
              Personal Training e Pilates em Juiz de Fora. Treinamento técnico
              e personalizado para transformação real do seu corpo.
            </p>
            <Button variant="primary" href="https://wa.me/5532984138413">
              Agendar Avaliação Gratuita
            </Button>
          </div>

          {/* Navigation column */}
          <div>
            <h4 className={styles.footerHeading}>Navegação</h4>
            <ul className={styles.footerList}>
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className={styles.footerLink}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Contact info */}
        <div className={styles.contactInfo}>
          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <h4>WhatsApp</h4>
              <a
                href="https://wa.me/5532984138413"
                className={styles.footerLink}
              >
                (32) 98413-8413
              </a>
            </div>
            <div className={styles.contactItem}>
              <h4>Email</h4>
              <a
                href="mailto:contato@leticiaferreira.fit"
                className={styles.footerLink}
              >
                contato@leticiaferreira.fit
              </a>
            </div>
            <div className={styles.contactItem}>
              <h4>Localização</h4>
              <p>Juiz de Fora, MG</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Letícia Ferreira. Todos os direitos reservados.
          </p>

          {/* Social links */}
          <div className={styles.socialLinks}>
            {navigation.social.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={item.name}
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
