# Diretrizes de Engenharia — Studio Michele Afrodite

Este documento registra os padrões arquiteturais aplicados na plataforma web do **Studio Michele Afrodite**:

1. **Next.js App Router & Performance:** Componentes otimizados, tipagem estrita em TypeScript e zero Layout Shift (CLS).
2. **Design System Quiet Luxury:** Variáveis semânticas configuradas em CSS-first (`@theme` no Tailwind v4) refletindo a paleta oficial Dourado Afrodite (`#C6934B`), Terracota (`#A66E4E`), Creme Alabastro (`#FAF7F2`) e Obsidiana (`#12100E`).
3. **Acessibilidade & Semântica Moderna:** Uso de `<dialog>` nativo com `overscroll-behavior: contain`, `<details name="...">` exclusivo para o FAQ, labels explícitos e respeito a `prefers-reduced-motion`.
4. **SEO Local & Dados Estruturados:** JSON-LD `HealthAndBeautyBusiness` + `BeautySalon` e `FAQPage` configurados para o endereço no Pme Offices Tower (Pagani, Palhoça - SC).
