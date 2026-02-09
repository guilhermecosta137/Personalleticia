'use client'

import { Button } from '@/components/ui/Button'
import {
  FaDumbbell,
  FaBrain,
  FaChartLine,
  FaCheckCircle,
  FaStar,
  FaChevronDown,
  FaArrowDown,
  FaSpa
} from 'react-icons/fa'
import styles from './Home.module.css'

// Hero Section
export function HeroSection() {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Personal Training & Pilates</span>
            <h1 className={styles.heroTitle}>
              Seu corpo é capaz
              <em> de muito mais</em>
            </h1>
            <p className={styles.lead}>
              Treinamento técnico e personalizado que respeita seu ponto de partida
              e te leva além do que você imaginava possível.
            </p>
            <div className={styles.ctaGroup}>
              <Button variant="primary-large" href="https://wa.me/5532984138413">
                Agendar Avaliação Gratuita
              </Button>
              <Button variant="ghost" href="#metodo">
                Conheça o Método
              </Button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src="/personal.jpg" alt="Letícia Ferreira" className={styles.heroImg} />
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <FaArrowDown />
      </div>
    </section>
  )
}

// Social Proof Strip
export function SocialProofStrip() {
  const stats = [
    { number: '8+', label: 'Anos de experiência' },
    { number: '200+', label: 'Alunos transformados' },
    { number: '2', label: 'Especialidades integradas' },
    { number: '100%', label: 'Treinos personalizados' },
  ]

  return (
    <section className={styles.socialProof}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.stat}>
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Method Section
export function MethodSection() {
  const pillars = [
    {
      icon: <FaDumbbell />,
      title: 'Força & Performance',
      description: 'Treinos de personal training focados em resultados mensuráveis: hipertrofia, emagrecimento, condicionamento e performance atlética.'
    },
    {
      icon: <FaSpa />,
      title: 'Mobilidade & Postura',
      description: 'Pilates terapêutico e funcional para correção postural, prevenção de lesões e qualidade de movimento no dia a dia.'
    },
    {
      icon: <FaBrain />,
      title: 'Estratégia Personalizada',
      description: 'Cada corpo é único. Cada objetivo também. Sua programação é construída sob medida, ajustada semanalmente conforme seus resultados.'
    },
    {
      icon: <FaChartLine />,
      title: 'Evolução Constante',
      description: 'Progressões inteligentes, periodização científica e acompanhamento próximo para garantir que você nunca estagne.'
    }
  ]

  return (
    <section className={styles.methodSection} id="metodo">
      <div className="container">
        <div className={styles.methodIntro}>
          <span className={styles.eyebrow}>O Diferencial</span>
          <h2 className={styles.heroTitle} style={{ fontSize: 'var(--fs-display-md)' }}>
            Personal Training
            <em>+ Pilates =</em>
            Transformação Completa
          </h2>
          <p className={styles.lead}>
            A maioria dos profissionais domina apenas uma modalidade.
            Aqui, você tem acesso a duas expertises integradas em um só lugar.
          </p>
        </div>

        <div className={styles.pillarsGrid}>
          {pillars.map((pillar, index) => (
            <div key={index} className={styles.pillarCard}>
              <div className={styles.pillarIcon}>{pillar.icon}</div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDescription}>{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary-large" href="https://wa.me/5532984138413">
            Quero Treinar com a Letícia
          </Button>
        </div>
      </div>
    </section>
  )
}

// For Who Section
export function ForWhoSection() {
  const checklistItems = [
    'Quer resultados reais, não promessas vazias',
    'Valoriza acompanhamento técnico e personalizado',
    'Busca equilíbrio entre estética e funcionalidade',
    'Precisa de treinos que respeitem suas limitações',
    'Quer evoluir sem lesões ou frustrações',
    'Busca uma profissional que realmente entenda seu corpo'
  ]

  return (
    <section className={styles.forWhoSection}>
      <div className="container">
        <div className={styles.forWhoGrid}>
          <div>
            <h2 className={styles.heroTitle} style={{ fontSize: 'var(--fs-display-sm)' }}>
              Esse trabalho é para você que:
            </h2>
            
            <div>
              {checklistItems.map((item, index) => (
                <div key={index} className={styles.checklistItem}>
                  <FaCheckCircle className={styles.checkIcon} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className={styles.quoteBlock}>
              <p className={styles.quoteText}>
                &ldquo;Não trabalho com fórmulas prontas. Trabalho com pessoas reais,
                com histórias, limitações e potenciais únicos. Se você busca
                transformação de verdade, com técnica e humanidade, você está
                no lugar certo.&rdquo;
              </p>
              <span className={styles.quoteAuthor}>— Letícia Ferreira</span>
            </div>

            <Button variant="primary" href="https://wa.me/5532984138413">
              Agendar Minha Avaliação
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
export function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'Comecei do zero, com medo de me machucar. A Letícia montou um treino que respeitava minhas limitações e ao mesmo tempo me desafiava. Em 4 meses, eliminei dores nas costas e ganhei uma confiança que eu não tinha há anos.',
      author: 'Marina S.',
      service: 'Pilates Terapêutico'
    },
    {
      quote: 'Já treinei em várias academias, mas nunca tive um acompanhamento tão técnico e personalizado. Bati meu recorde pessoal de força e pela primeira vez entendi o que significa treinar certo.',
      author: 'Rafael M.',
      service: 'Personal Training'
    },
    {
      quote: 'A combinação de pilates e musculação mudou completamente minha relação com exercício. Perdi medidas, ganhei postura e hoje me sinto mais forte e confiante do que nunca.',
      author: 'Juliana T.',
      service: 'Método Integrado'
    }
  ]

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Resultados Reais</span>
          <h2 className={styles.heroTitle} style={{ fontSize: 'var(--fs-display-md)' }}>
            Quem treina, transforma
          </h2>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={styles.star} />
                ))}
              </div>
              <p className={styles.testimonialQuote}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <div className={styles.testimonialAuthor}>
                  {testimonial.author}
                </div>
                <div className={styles.testimonialService}>
                  {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Services Overview
export function ServicesOverview() {
  const benefits = {
    personal: [
      'Avaliação física completa',
      'Periodização científica',
      'Ajustes semanais de treino',
      'Suporte via WhatsApp'
    ],
    pilates: [
      'Avaliação postural detalhada',
      'Exercícios terapêuticos personalizados',
      'Foco em prevenção de lesões',
      'Integração com treino de força'
    ]
  }

  return (
    <section id="servicos" className={styles.servicesSection}>
      <div className="container">
        <h2 className={`${styles.heroTitle} text-center`} style={{ fontSize: 'var(--fs-display-md)', marginBottom: 'var(--space-3xl)' }}>
          Como posso te ajudar
        </h2>

        <div className={styles.servicesGrid}>
          {/* Personal Training */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceContent}>
              <h3 className={styles.pillarTitle} style={{ fontSize: 'var(--fs-heading-lg)' }}>
                Personal Training
              </h3>
              <p style={{ marginBottom: 'var(--space-lg)' }}>
                Treinos personalizados para hipertrofia, emagrecimento,
                condicionamento físico ou performance atlética. Presencial
                ou online, com acompanhamento técnico semanal.
              </p>
              <ul className={styles.benefitsList}>
                {benefits.personal.map((item, i) => (
                  <li key={i}>
                    <FaCheckCircle />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" href="/servicos#personal-training">
                Saber Mais
              </Button>
            </div>
          </div>

          {/* Pilates */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceContent}>
              <h3 className={styles.pillarTitle} style={{ fontSize: 'var(--fs-heading-lg)' }}>
                Pilates
              </h3>
              <p style={{ marginBottom: 'var(--space-lg)' }}>
                Pilates clínico e funcional para correção postural, reabilitação,
                fortalecimento do core e melhora da qualidade de movimento.
                Atendimento individual ou em dupla.
              </p>
              <ul className={styles.benefitsList}>
                {benefits.pilates.map((item, i) => (
                  <li key={i}>
                    <FaCheckCircle />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" href="/servicos#pilates">
                Saber Mais
              </Button>
            </div>
          </div>
        </div>

        {/* Combo Highlight */}
        <div className={styles.comboHighlight}>
          <span className={styles.badge}>Recomendado</span>
          <h3 className={styles.heroTitle} style={{ fontSize: 'var(--fs-display-sm)', color: 'var(--color-branco)' }}>
            Método Integrado: Personal + Pilates
          </h3>
          <p style={{ fontSize: 'var(--fs-body-lg)', marginBottom: 'var(--space-xl)', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', opacity: 0.9 }}>
            A combinação perfeita para quem busca resultados completos:
            força, mobilidade, postura e performance em um programa único.
          </p>
          <Button 
            variant="primary" 
            href="https://wa.me/5532984138413"
          >
            Quero o Método Completo
          </Button>
        </div>
      </div>
    </section>
  )
}

// FAQ Section
export function FAQSection() {
  const faqs = [
    {
      question: 'Nunca treinei antes. Consigo acompanhar?',
      answer: 'Sim! Trabalho com todos os níveis, do iniciante ao avançado. Seu treino é montado respeitando seu condicionamento atual e evolui no seu ritmo. Ninguém começa expert — o importante é começar certo.'
    },
    {
      question: 'Qual a diferença entre personal training e pilates?',
      answer: 'Personal training foca em força, hipertrofia, emagrecimento e condicionamento. Pilates trabalha mobilidade, postura, core e prevenção de lesões. Juntos, formam o método mais completo de transformação corporal.'
    },
    {
      question: 'Como funciona o acompanhamento?',
      answer: 'Fazemos avaliação inicial completa, montamos seu programa personalizado e ajustamos semanalmente conforme sua evolução. Você tem suporte via WhatsApp para dúvidas e acompanhamento próximo.'
    },
    {
      question: 'Atende presencial ou online?',
      answer: 'Ambos! Personal training pode ser presencial ou online. Pilates preferencialmente presencial para correções técnicas, mas também ofereço opção remota para quem já tem experiência.'
    },
    {
      question: 'Quanto tempo até ver resultados?',
      answer: 'Resultados iniciais aparecem entre 4-8 semanas com treino consistente. Transformações profundas acontecem a partir de 3-6 meses. O importante é entender: não vendemos milagres, vendemos método e consistência.'
    }
  ]

  return (
    <section className={styles.faqSection}>
      <div className="container container-narrow">
        <h2 className={`${styles.heroTitle} text-center`} style={{ fontSize: 'var(--fs-display-md)', marginBottom: 'var(--space-3xl)' }}>
          Dúvidas frequentes
        </h2>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <details key={index} className={styles.faqItem}>
              <summary className={styles.faqSummary}>
                <span className={styles.faqQuestion}>{faq.question}</span>
                <FaChevronDown className={styles.faqIcon} />
              </summary>
              <div className={styles.faqAnswer}>
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

// Final CTA
export function FinalCTA() {
  return (
    <section id="contato" className={styles.finalCta}>
      <div className="container">
        <div className={styles.finalCtaContent}>
          <h2 className={styles.heroTitle} style={{ fontSize: 'var(--fs-display-md)', color: 'var(--color-branco)' }}>
            Pronto para a sua
            <br />
            transformação?
          </h2>
          <p style={{ fontSize: 'var(--fs-body-lg)', marginBottom: 'var(--space-xl)', opacity: 0.9 }}>
            Agende sua avaliação gratuita e descubra como o método certo
            pode mudar completamente sua relação com exercício e resultados.
          </p>
          
          <div className={styles.benefitsRow}>
            <div className={styles.benefitItem}>
              <FaCheckCircle />
              <span>Avaliação física completa</span>
            </div>
            <div className={styles.benefitItem}>
              <FaCheckCircle />
              <span>Plano personalizado</span>
            </div>
            <div className={styles.benefitItem}>
              <FaCheckCircle />
              <span>Zero compromisso</span>
            </div>
          </div>

          <Button 
            variant="primary-huge" 
            href="https://wa.me/5532984138413"
            className={styles.animatePulse}
          >
            Agendar Avaliação Gratuita
          </Button>
          
          <p className={styles.disclaimer}>
            Respondo pessoalmente no WhatsApp • Vagas limitadas por mês
          </p>

          <div className={styles.trustBadges}>
            <span className={styles.trustBadge}>CREF Ativo</span>
            <span className={styles.trustBadge}>Formação Pilates</span>
            <span className={styles.trustBadge}>8+ Anos Experiência</span>
          </div>
        </div>
      </div>
    </section>
  )
}
