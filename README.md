# 💖 Página de Vendas Feminina - Beleza & Autocuidado

Uma página de vendas moderna, elegante e persuasiva voltada para o público feminino, com foco em produtos de beleza e autocuidado.

## ✨ Características

- **Design Feminino**: Cores suaves (rosa, lilás, bege) com elementos de destaque
- **Responsivo**: Adaptado para celular e desktop
- **Contador Regressivo**: 14 minutos que reinicia a cada acesso
- **10 Produtos**: Cards atraentes com imagens, descrições e preços
- **Botão WhatsApp**: Flutuante para contato direto
- **Animações Suaves**: Efeitos de hover e scroll
- **Performance Otimizada**: Carregamento rápido

## 🚀 Como Usar

1. **Baixe os arquivos**:
   - `index.html` (estrutura da página)
   - `styles.css` (estilos e design)
   - `script.js` (funcionalidades)

2. **Personalize os produtos**:
   - Substitua as imagens pelos seus produtos
   - Altere nomes, descrições e preços
   - Adicione seus links de afiliado nos botões

3. **Configure o WhatsApp**:
   - No arquivo `index.html`, linha do botão WhatsApp, substitua `5511999999999` pelo seu número

## 🎨 Personalização

### Cores
No arquivo `styles.css`, você pode alterar as cores principais:
```css
/* Cor primária (roxo/rosa) */
background: linear-gradient(135deg, #d946ef 0%, #c026d3 100%);

/* Cor dos botões (vermelho) */
background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
```

### Produtos
Para cada produto no `index.html`:
1. **Imagem**: Substitua a URL do Unsplash pela imagem do seu produto
2. **Nome**: Altere o texto dentro da tag `<h3>`
3. **Descrição**: Modifique o parágrafo abaixo do nome
4. **Preços**: Ajuste os valores em "old-price" e "current-price"
5. **Link**: Substitua `#` no `onclick` pelo seu link de afiliado

### Contador
No arquivo `script.js`, você pode alterar o tempo:
```javascript
this.duration = 14 * 60; // 14 minutos em segundos
// Para 10 minutos: this.duration = 10 * 60;
```

### Imagens Recomendadas
Use imagens de alta qualidade (300x300px mínimo) de:
- **Unsplash**: https://unsplash.com
- **Pexels**: https://pexels.com
- **Pixabay**: https://pixabay.com

Busque por: "skincare", "beauty products", "cosmetics", "lifestyle"

## 📱 Responsividade

A página é totalmente responsiva e funciona perfeitamente em:
- Smartphones (320px+)
- Tablets (768px+)
- Desktops (1024px+)

## 🛠️ Funcionalidades Técnicas

### Contador Regressivo
- Salva o tempo no `localStorage`
- Continua funcionando mesmo se a página for recarregada
- Reinicia automaticamente quando chega a zero
- Efeitos visuais nos últimos 2 minutos

### Animações
- Cards aparecem gradualmente ao fazer scroll
- Efeito hover nos produtos
- Botão WhatsApp com animação bounce
- Parallax sutil no hero

### Performance
- Imagens otimizadas
- CSS minificado
- JavaScript modular
- Preload de imagens

## 📞 Suporte

Para personalizar ainda mais a página ou adicionar novas funcionalidades:

1. **Analytics**: Adicione Google Analytics ou Facebook Pixel
2. **Pagamento**: Integre com processadores de pagamento
3. **Email**: Configure captura de leads
4. **SEO**: Adicione meta tags personalizadas

## 🔧 Estrutura dos Arquivos

```
/
├── index.html          # Estrutura principal
├── styles.css          # Estilos e design
├── script.js           # Funcionalidades JavaScript
└── README.md           # Este arquivo
```

## 📋 Checklist de Personalização

- [ ] Substituir todas as imagens pelos seus produtos
- [ ] Alterar nomes e descrições dos produtos
- [ ] Adicionar links de afiliado nos botões
- [ ] Configurar número do WhatsApp
- [ ] Personalizar cores se desejar
- [ ] Testar em dispositivos móveis
- [ ] Verificar todos os links
- [ ] Otimizar imagens para web

## 🚨 Importante

- Use apenas imagens livres de direitos autorais
- Teste todos os links antes de publicar
- Verifique se a página carrega rápido no celular
- Mantenha as descrições persuasivas mas honestas

## 💡 Dicas de Conversão

1. **Imagens**: Use fotos de produtos em uso, lifestyle
2. **Descrições**: Foque nos benefícios, não apenas nas características
3. **Preços**: Mostre sempre o preço original cortado
4. **Urgência**: As mensagens de estoque limitado criam senso de urgência
5. **WhatsApp**: Muitas pessoas preferem comprar via WhatsApp

---

**Criado com 💖 para empreendedoras digitais**