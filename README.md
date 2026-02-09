# Letícia Ferreira - Personal Website

[![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2.0-61dafb)](https://reactjs.org/)
[![CSS Modules](https://img.shields.io/badge/CSS%20Modules-Scoped-orange)](https://github.com/css-modules/css-modules)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000)](https://vercel.com/)

Um site profissional e performático para Letícia Ferreira, especialista em pilates, yoga e treinamento pessoal. Construído com tecnologias modernas, focando em performance, acessibilidade e experiência do usuário excepcional.

## 📋 Sumário

- [Visão Geral](#-visão-geral)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Arquitetura e Tecnologias](#-arquitetura-e-tecnologias)
- [Otimizações de Performance](#-otimizações-de-performance)
- [Acessibilidade](#-acessibilidade)
- [Instalação e Uso](#-instalação-e-uso)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Deploy](#-deploy)
- [Contribuição](#-contribuição)

## 🎯 Visão Geral

Este projeto baseia numa arquitetura mais robusta e performática utilizando CSS Modules e variáveis CSS nativas. O foco principal foi criar uma base sólida para escalabilidade, manutenção e experiência do usuário premium.

#### ✅ Adicionado
- **CSS Modules** - Estilos modulares e scoped para evitar conflitos
- **CSS Variables** - Sistema de design centralizado com variáveis nativas
- **React Icons** - Biblioteca de ícones SVG profissionais e otimizados
- **CSS Grid & Flexbox avançado** - Layouts responsivos e modernos
- **Animações CSS puras** - Performance otimizada sem JavaScript
- **Dark mode ready** - Infraestrutura preparada para tema escuro

## ✨ Funcionalidades Principais

- **Landing Page Otimizada**: Hero section com call-to-action, seções de prova social, metodologia, público-alvo, depoimentos, visão geral de serviços, FAQ e CTA final.
- **Páginas Institucionais**: Sobre, Serviços e Contato com conteúdo dinâmico e formulários funcionais.
- **Sistema de Design Consistente**: Paleta de cores verde e dourado, tipografia escalável com clamp(), espaçamento responsivo.
- **Navegação Fluida**: Header responsivo com links para WhatsApp e Instagram integrados.
- **Formulários Interativos**: Contato com validação e integração com WhatsApp.
- **SEO Otimizado**: Meta tags, estrutura semântica HTML5, performance-first.

## 🏗️ Arquitetura e Tecnologias

### Stack Tecnológico
- **Framework**: Next.js 14 (App Router) - SSR/SSG híbrido para performance
- **Linguagem**: TypeScript 5.3 - Type safety e DX aprimorado
- **Styling**: CSS Modules + CSS Variables - Scoped styles sem conflitos
- **Ícones**: React Icons (FontAwesome, Game Icons) - SVG otimizados
- **Utilitários**: clsx - Condicional classNames

### Padrões de Desenvolvimento
- **Component-Based Architecture**: Componentes reutilizáveis e isolados
- **CSS-in-JS Avoidance**: CSS puro para melhor performance
- **Mobile-First Design**: Responsividade nativa com clamp() e Grid/Flexbox
- **Semantic HTML**: Acessibilidade e SEO otimizados
- **Clean Code**: Estrutura organizada, nomes descritivos, comentários relevantes

### Estrutura do Projeto
```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout com providers
│   ├── page.tsx                 # Homepage
│   ├── sobre/page.tsx           # Página Sobre
│   ├── servicos/page.tsx        # Página Serviços
│   └── contato/page.tsx         # Página Contato
├── components/                   # Componentes reutilizáveis
│   ├── ui/                      # Componentes base (Button)
│   ├── layout/                  # Layout components (Nav, Footer)
│   └── home/                    # Home-specific components
└── styles/
    └── globals.css              # CSS Variables + resets
```

## ⚡ Otimizações de Performance

### Build e Bundle
- **Tree Shaking**: Importação seletiva de ícones React Icons
- **Code Splitting**: Páginas carregadas sob demanda via App Router
- **Image Optimization**: Next.js Image component (não implementado ainda)
- **CSS Minification**: Build process otimiza CSS Modules

### Runtime Performance
- **CSS Puro**: Zero runtime overhead (vs Tailwind)
- **Animações CSS**: Hardware-accelerated, sem JavaScript
- **Critical CSS**: Inline styles para first paint
- **Lazy Loading**: Componentes carregados conforme necessário

### Métricas Alvo
- **Lighthouse Score**: >90 em Performance, Acessibilidade, SEO
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## ♿ Acessibilidade

### WCAG 2.1 AA Compliance
- **Semântica HTML**: Uso correto de headings, landmarks, ARIA labels
- **Navegação por Teclado**: Focus visible em todos os elementos interativos
- **Contraste de Cores**: Ratio mínimo 4.5:1 para texto normal
- **Screen Readers**: Aria-labels em ícones, alt-text em imagens
- **Reduced Motion**: Respeita preferência do usuário (prefers-reduced-motion)

### Implementações Específicas
- **Focus Management**: Estados de foco visíveis e lógicos
- **Color Independence**: Design não depende apenas de cores
- **Text Scaling**: Tipografia responsiva com clamp()
- **Error Handling**: Validação de formulários com mensagens acessíveis

## 🚀 Instalação e Uso

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
# Clonar repositório
git clone https://github.com/seu-usuario/leticia-ferreira-site.git
cd leticia-ferreira-site

# Instalar dependências
npm install
```

### Desenvolvimento
```bash
# Rodar em modo dev
npm run dev

# Abrir http://localhost:3000
```

### Build para Produção
```bash
# Build otimizado
npm run build

# Preview da build
npm start
```

### Scripts Disponíveis
- `npm run dev` - Desenvolvimento com hot reload
- `npm run build` - Build de produção
- `npm run start` - Servir build local
- `npm run lint` - Verificar código com ESLint
- `npm run type-check` - Verificar tipos TypeScript

## 🎨 Sistema de Design

### Design Tokens (CSS Variables)
```css
/* Cores */
--color-verde-principal: #2D5016;
--color-verde-medio: #4A7C2C;
--color-verde-claro: #8BB174;
--color-verde-very-light: #E8F3E3;
--color-dourado: #C9A961;

/* Tipografia */
--font-display: 'PP Editorial New', serif;
--font-body: 'Inter', sans-serif;
--fs-display-xl: clamp(3.5rem, 8vw, 5.25rem);
--fs-body: clamp(1rem, 1.25vw, 1.125rem);

/* Espaçamento */
--space-xs: 0.5rem;
--space-sm: 1rem;
--space-md: 1.5rem;
--space-lg: 2rem;
--space-xl: 3rem;
--space-2xl: 4rem;
--space-3xl: 6rem;
--space-4xl: 8rem;
```

### Responsividade
- **Mobile-First**: Breakpoints progressivos
- **Fluid Typography**: clamp() para escalabilidade automática
- **Flexible Layouts**: Grid e Flexbox adaptativos
- **Touch-Friendly**: Botões e links com tamanho mínimo adequado

## 🔧 Customizações e Extensibilidade

### Adicionar Nova Seção na Homepage
1. Crie componente em `src/components/home/`
2. Importe e adicione em `src/app/page.tsx`
3. Estilize com CSS Module dedicado

### Integrar com CMS
O projeto é preparado para integração com headless CMS como:
- **Strapi**: Para conteúdo dinâmico
- **Sanity**: Para rich content
- **Contentful**: Para gerenciamento de conteúdo

### Implementar Dark Mode
Variáveis CSS já preparadas - basta toggle da classe `.dark` no `:root`

### Otimizar Imagens
Substitua placeholders por:
```tsx
import Image from 'next/image'
<Image src="/hero-image.jpg" alt="Descrição" width={800} height={600} priority />
```

## 🚀 Deploy e CI/CD

### Plataformas Suportadas
- **Vercel** (Recomendado): Deploy automático com preview deployments
- **Netlify**: Build hooks e form handling
- **Railway**: Deploy direto do GitHub
- **Docker**: Containerização completa

### Pipeline de Deploy
```yaml
# .github/workflows/deploy.yml
name: Deploy
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - run: npm run export  # Para static hosting
```

### Variáveis de Ambiente
```env
# .env.local
NEXT_PUBLIC_WHATSAPP_NUMBER=5532984138413
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/leticiaferreira
NEXT_PUBLIC_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## 📊 Monitoramento e Analytics

### Performance Monitoring
- **Lighthouse CI**: Testes automatizados de performance
- **Web Vitals**: Métricas Core Web Vitals tracking
- **Sentry**: Error tracking e monitoring

### Analytics Integration
```tsx
// src/components/Analytics.tsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export function Analytics() {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Track page views
      gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      })
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return null
}
```

## 🧪 Testes e Qualidade

### Estratégia de Testes
- **Unit Tests**: Componentes isolados com Jest + React Testing Library
- **Integration Tests**: Fluxos completos com Playwright
- **E2E Tests**: Cenários críticos automatizados
- **Visual Regression**: Storybook + Chromatic

### Configuração Básica
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
}
```

## 🤝 Contribuição

### Processo de Contribuição
1. Fork o projeto
2. Crie uma branch feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

### Padrões de Código
- **ESLint + Prettier**: Formatação automática
- **Conventional Commits**: Padrão de mensagens de commit
- **Semantic Versioning**: Versionamento automático
- **Code Reviews**: Aprovação obrigatória para merges

### Guidelines
- Mantenha commits pequenos e focados
- Escreva testes para novas funcionalidades
- Atualize documentação quando necessário
- Siga os padrões de nomenclatura estabelecidos

## 📈 Roadmap

### Próximas Features
- [ ] **Blog Integrado**: Sistema de posts com MDX
- [ ] **Sistema de Agendamento**: Calendário interativo
- [ ] **Área do Cliente**: Portal personalizado
- [ ] **Multi-idioma**: Suporte i18n
- [ ] **PWA**: App instalável offline
- [ ] **Email Marketing**: Integração com Mailchimp

### Melhorias Técnicas
- [ ] **Image Optimization**: Next.js Image component
- [ ] **Bundle Analysis**: Webpack Bundle Analyzer
- [ ] **Performance Budget**: Limites de tamanho de bundle
- [ ] **Accessibility Audit**: Ferramentas automatizadas

## 📄 Licença

Este projeto está sob a licença da leticia ferreira

---

**⭐ Star este repositório se achou útil!**

Site desenvolvido por Guilherme
