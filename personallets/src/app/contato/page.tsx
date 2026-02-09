import { Button } from '@/components/ui/Button'
import styles from './contato.module.css'

export default function ContatoPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Entre em Contato</h1>
          <p>Agende sua avaliação gratuita e comece sua transformação hoje</p>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>Vamos Conversar?</h2>
              <p>
                Estou aqui para ajudar você a alcançar seus objetivos de saúde e bem-estar.
                Entre em contato para agendar uma avaliação gratuita e descobrir como podemos
                trabalhar juntos.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.detail}>
                  <h3>Localização</h3>
                  <p>Juiz de Fora, MG</p>
                </div>
                <div className={styles.detail}>
                  <h3>WhatsApp</h3>
                  <p>(32) 98413-8413</p>
                </div>
                <div className={styles.detail}>
                  <h3>Email</h3>
                  <p>contato@leticiaferreira.fit</p>
                </div>
              </div>

              <Button variant="primary-large" href="https://wa.me/5532984138413">
                Agendar Avaliação Gratuita
              </Button>
            </div>

            <div className={styles.contactForm}>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nome</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Telefone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Mensagem</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>

                <Button variant="primary" type="submit">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
