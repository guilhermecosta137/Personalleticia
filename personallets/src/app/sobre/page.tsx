import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import styles from './sobre.module.css'

export default function SobrePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Sobre Letícia Ferreira</h1>
          <p>Personal Trainer e Instrutora de Pilates em Juiz de Fora</p>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h2>Minha História</h2>
            <p>
              Há mais de 8 anos dedicando minha carreira ao movimento humano,
              descobri que cada corpo tem uma história única e merece ser tratado
              com respeito, técnica e humanidade.
            </p>
            <p>
              Formada em Educação Física, especializada em Personal Training e
              Pilates, acredito que o verdadeiro resultado vem da combinação
              entre conhecimento científico e conexão pessoal.
            </p>
            <p>
              Meu método integra força e mobilidade, estética e funcionalidade,
              resultados e bem-estar. Não trabalho com fórmulas prontas — trabalho
              com pessoas reais.
            </p>
          </div>
          <div className={styles.aboutImage}>
            <Image
              src="/personal.jpg"
              alt="Letícia Ferreira"
              width={500}
              height={600}
              className={styles.image}
            />
          </div>
        </div>
      </section>

      <section className={styles.qualifications}>
        <div className={styles.container}>
          <h2>Formação e Especializações</h2>
          <div className={styles.qualificationsGrid}>
            <div className={styles.qualification}>
              <h3>Bacharel em Educação Física</h3>
              <p>Fundamentação sólida em anatomia, fisiologia e treinamento esportivo</p>
            </div>
            <div className={styles.qualification}>
              <h3>Especialista em Personal Training</h3>
              <p>Treinamento personalizado focado em resultados mensuráveis</p>
            </div>
            <div className={styles.qualification}>
              <h3>Instrutora de Pilates</h3>
              <p>Método completo para correção postural e fortalecimento funcional</p>
            </div>
            <div className={styles.qualification}>
              <h3>CREF Ativo</h3>
              <p>Registro profissional ativo no Conselho Regional de Educação Física</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.approach}>
        <div className={styles.container}>
          <h2>Minha Abordagem</h2>
          <div className={styles.approachGrid}>
            <div className={styles.approachItem}>
              <h3>Técnica sem Compromissos</h3>
              <p>
                Cada exercício, cada progressão, cada ajuste é baseado em
                evidências científicas e experiência prática.
              </p>
            </div>
            <div className={styles.approachItem}>
              <h3>Acompanhamento Personalizado</h3>
              <p>
                Seu treino evolui com você. Ajustes semanais garantem que
                você nunca estagne ou se frustre.
              </p>
            </div>
            <div className={styles.approachItem}>
              <h3>Humanidade em Primeiro Lugar</h3>
              <p>
                Resultados duradouros vêm de processos que respeitam seu
                corpo, sua história e seus limites.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Pronto para começar sua transformação?</h2>
          <p>
            Agende sua avaliação gratuita e descubra como podemos trabalhar juntos
            para alcançar seus objetivos.
          </p>
          <Button variant="primary-large" href="https://wa.me/5532984138413">
            Agendar Avaliação Gratuita
          </Button>
        </div>
      </section>
    </main>
  )
}
