# Letícia Ferreira Site v2.0

## ✨ Mudanças Principais

### ❌ Removido
- Tailwind CSS
- Emojis

### ✅ Adicionado
- **CSS Modules** - Estilos modulares e scoped
- **CSS Variables** - Sistema de design com variáveis CSS nativas
- **React Icons** - Ícones profissionais SVG (FontAwesome, Material, Game Icons)
- **CSS Grid & Flexbox avançado** - Layouts modernos
- **Animações CSS puras** - Performance otimizada
- **Dark mode ready** - Variáveis preparadas para tema escuro

## 🚀 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar produção
npm start
```

## 📦 Dependências

```json
{
  "react-icons": "^5.0.1",  // Ícones profissionais
  "clsx": "^2.1.0"           // Utility para classNames
}
```

## 🎨 Sistema de Design

### Cores (CSS Variables)
```css
--color-verde-principal: #2D5016
--color-verde-medio: #4A7C2C
--color-verde-claro: #8BB174
--color-verde-very-light: #E8F3E3
--color-dourado: #C9A961
```

### Tipografia
```css
--font-display: 'PP Editorial New'
--font-body: 'Inter'
--fs-display-xl: clamp(3.5rem, 8vw, 5.25rem)
--fs-body: clamp(1rem, 1.25vw, 1.125rem)
```

### Espaçamento
```css
--space-xs: 0.5rem
--space-sm: 1rem
--space-md: 1.5rem
--space-lg: 2rem
--space-xl: 3rem
--space-2xl: 4rem
--space-3xl: 6rem
--space-4xl: 8rem
```

## 📁 Estrutura

```
src/
├── app/
│   ├── layout.tsx              # Layout raiz
│   ├── page.tsx                # Homepage
│   ├── sobre/
│   │   ├── page.tsx            # Página Sobre
│   │   └── sobre.module.css    # Estilos Sobre
│   ├── servicos/
│   │   ├── page.tsx            # Página Serviços
│   │   └── servicos.module.css # Estilos Serviços
│   └── contato/
│       ├── page.tsx            # Página Contato
│       └── contato.module.css  # Estilos Contato
├── components/
│   ├── ui/
│   │   ├── Button.tsx          # Componente Button
│   │   └── Button.module.css   # Estilos Button
│   ├── layout/
│   │   ├── Navigation.tsx      # Header/Nav
│   │   ├── Navigation.module.css
│   │   ├── Footer.tsx          # Rodapé
│   │   └── Footer.module.css
│   └── home/
│       ├── index.tsx           # Todos componentes Home
│       └── Home.module.css     # Estilos Home
└── styles/
    └── globals.css             # Estilos globais + variáveis
```

## 🎯 Principais Melhorias

### 1. Performance
- **CSS Modules** = CSS com escopo, sem conflitos
- **CSS Puro** = Sem runtime JS do Tailwind
- **Tree-shaking** = Importa só ícones usados
- **Critical CSS** = Inline no primeiro carregamento

### 2. Manutenibilidade
- **Variáveis CSS** = Mudar cores/fontes em um lugar
- **Componentes isolados** = Cada componente tem seu CSS
- **TypeScript** = Type safety completo

### 3. Acessibilidade
- **Ícones com aria-label** = Screen readers funcionam
- **Focus visible** = Navegação por teclado clara
- **Contrast ratio** = WCAG AA compliant
- **Reduced motion** = Respeita preferências do usuário

## 🔧 Customizações Comuns

### Mudar Cores
Edite `src/styles/globals.css`:
```css
:root {
  --color-verde-principal: #SUA_COR;
}
```

### Adicionar Novo Ícone
```tsx
import { FaSeuIcone } from 'react-icons/fa'

<FaSeuIcone />
```

Biblioteca completa: https://react-icons.github.io/react-icons/

### Criar Nova Página
1. Crie pasta: `src/app/nova-pagina/`
2. Adicione `page.tsx`
3. Opcional: Adicione `nova-pagina.module.css`

## 📱 Responsividade

Todo CSS usa:
- `clamp()` para tipografia fluida
- Media queries mobile-first
- Grid/Flexbox responsivo
- Variáveis adaptativas

## 🎨 Ícones Usados

### React Icons Pacotes
- `react-icons/fa` - FontAwesome
- `react-icons/gi` - Game Icons
- `react-icons/md` - Material Design
- `react-icons/hi` - Hero Icons

### Principais Ícones
- **FaWhatsapp** - WhatsApp
- **FaInstagram** - Instagram
- **FaDumbbell** - Treino/Força
- **FaCheckCircle** - Check/Sucesso
- **FaStar** - Estrelas/Avaliação
- **GiYoga** - Pilates/Yoga
- **FaBrain** - Estratégia
- **FaChartLine** - Evolução

## 🚀 Deploy

Funciona em qualquer plataforma Next.js:

```bash
# Vercel (recomendado)
vercel --prod

# Netlify
netlify deploy --prod

# Docker
docker build -t leticia-site .
docker run -p 3000:3000 leticia-site
```

## ✅ Checklist Pré-Deploy

- [ ] Substituir imagens placeholder
- [ ] Testar todos os links
- [ ] Validar WhatsApp (5532984138413)
- [ ] Testar em mobile/desktop
- [ ] Lighthouse score > 90
- [ ] Validar acessibilidade

## 🐛 Troubleshooting

### Build Error
```bash
# Limpar cache
rm -rf .next node_modules
npm install
npm run build
```

### Ícones não aparecem
Verifique import:
```tsx
import { FaIcone } from 'react-icons/fa'  // ✅ Correto
import { FaIcone } from 'react-icons'      // ❌ Errado
```

### CSS não aplicado
CSS Modules precisam extensão `.module.css`:
```tsx
import styles from './Component.module.css'  // ✅
import styles from './Component.css'          // ❌
```

## 📚 Documentação

- [Next.js](https://nextjs.org/docs)
- [React Icons](https://react-icons.github.io/react-icons/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [MDN CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

## 🎉 Pronto!

Site profissional, performático e 100% sem Tailwind ou emojis.

**Dúvidas?** Consulte o código ou documentação acima.
