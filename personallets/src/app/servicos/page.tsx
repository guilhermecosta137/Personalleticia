import { Button } from '@/components/ui/Button'
import styles from './servicos.module.css'

export default function ServicosPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Nossos Serviços</h1>
          <p>Transforme seu corpo com treinamentos personalizados e técnicas especializadas</p>
        </div>
      </section>

      <section id="personal-training" className={styles.service}>
        <div className={styles.serviceContent}>
          <div className={styles.serviceText}>
            <h2>Personal Training</h2>
            <p>
              Treinamento personalizado com acompanhamento individual. Cada sessão é
              planejada especificamente para suas necessidades, objetivos e limitações.
              Foco em resultados reais e sustentáveis.
            </p>
            <ul>
              <li>Avaliação física completa</li>
              <li>Planejamento nutricional</li>
              <li>Acompanhamento contínuo</li>
              <li>Técnicas avançadas de treinamento</li>
            </ul>
            <Button variant="primary" href="https://wa.me/5532984138413">
              Saber Mais
            </Button>
          </div>
        </div>
      </section>

      <section id="pilates" className={styles.service}>
        <div className={styles.serviceContent}>
          <div className={styles.serviceText}>
            <h2>Pilates</h2>
            <p>
              Método de exercícios que trabalha o corpo de forma integrada,
              fortalecendo músculos profundos, melhorando a postura e aumentando
              a flexibilidade. Ideal para prevenção de lesões e reabilitação.
            </p>
            <ul>
              <li>Melhora da postura</li>
              <li>Aumento da flexibilidade</li>
              <li>Fortalecimento do core</li>
              <li>Prevenção de lesões</li>
            </ul>
            <Button variant="primary" href="https://wa.me/5532984138413">
              Agendar Aula Experimental
            </Button>
          </div>
        </div>
      </section>

      <section id="metodo-integrado" className={styles.service}>
        <div className={styles.serviceContent}>
          <div className={styles.serviceText}>
            <h2>Método Integrado</h2>
            <p>
              Combinação de técnicas de treinamento funcional, pilates e exercícios
              terapêuticos. Abordagem holística que integra corpo e mente para
              resultados completos e duradouros.
            </p>
            <ul>
              <li>Treinamento funcional</li>
              <li>Exercícios terapêuticos</li>
              <li>Abordagem holística</li>
              <li>Resultados duradouros</li>
            </ul>
            <Button variant="primary" href="https://wa.me/5532984138413">
              Saber Mais
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
