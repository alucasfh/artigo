// Contador regressivo de 14 minutos
class CountdownTimer {
    constructor() {
        this.duration = 14 * 60; // 14 minutos em segundos
        this.minutesElement = document.getElementById('minutes');
        this.secondsElement = document.getElementById('seconds');
        this.timer = null;
        
        this.init();
    }
    
    init() {
        // Verifica se já existe um timer salvo no localStorage
        const savedTime = localStorage.getItem('countdownTime');
        const savedTimestamp = localStorage.getItem('countdownTimestamp');
        
        if (savedTime && savedTimestamp) {
            const now = Date.now();
            const elapsed = Math.floor((now - parseInt(savedTimestamp)) / 1000);
            const remaining = parseInt(savedTime) - elapsed;
            
            if (remaining > 0) {
                this.duration = remaining;
            } else {
                // Se o tempo expirou, reinicia
                this.resetTimer();
            }
        } else {
            // Primeira visita, salva o tempo inicial
            this.resetTimer();
        }
        
        this.startTimer();
    }
    
    resetTimer() {
        this.duration = 14 * 60; // 14 minutos
        localStorage.setItem('countdownTime', this.duration.toString());
        localStorage.setItem('countdownTimestamp', Date.now().toString());
    }
    
    startTimer() {
        this.updateDisplay();
        
        this.timer = setInterval(() => {
            this.duration--;
            
            if (this.duration <= 0) {
                this.resetTimer();
                this.showTimeUpMessage();
            }
            
            this.updateDisplay();
            
            // Atualiza o localStorage a cada segundo
            localStorage.setItem('countdownTime', this.duration.toString());
            localStorage.setItem('countdownTimestamp', Date.now().toString());
        }, 1000);
    }
    
    updateDisplay() {
        const minutes = Math.floor(this.duration / 60);
        const seconds = this.duration % 60;
        
        this.minutesElement.textContent = minutes.toString().padStart(2, '0');
        this.secondsElement.textContent = seconds.toString().padStart(2, '0');
        
        // Efeito visual quando o tempo está acabando (últimos 2 minutos)
        if (this.duration <= 120) {
            this.addUrgencyEffect();
        } else {
            this.removeUrgencyEffect();
        }
    }
    
    addUrgencyEffect() {
        const header = document.querySelector('.fixed-header');
        const timeUnits = document.querySelectorAll('.time-unit');
        
        header.style.animation = 'pulseRed 1s infinite';
        timeUnits.forEach(unit => {
            unit.style.animation = 'shake 0.5s infinite';
        });
    }
    
    removeUrgencyEffect() {
        const header = document.querySelector('.fixed-header');
        const timeUnits = document.querySelectorAll('.time-unit');
        
        header.style.animation = '';
        timeUnits.forEach(unit => {
            unit.style.animation = '';
        });
    }
    
    showTimeUpMessage() {
        // Mostra uma mensagem quando o tempo acaba
        const countdownText = document.querySelector('.countdown-text');
        countdownText.innerHTML = '🔥 NOVA OPORTUNIDADE! Contador reiniciado - não perca esta chance!';
        countdownText.style.color = '#dc2626';
        countdownText.style.fontWeight = '700';
        
        // Volta ao texto normal depois de 5 segundos
        setTimeout(() => {
            countdownText.innerHTML = 'Compre em até 14 minutos e ganhe um brinde exclusivo direto no WhatsApp!';
            countdownText.style.color = '';
            countdownText.style.fontWeight = '500';
        }, 5000);
    }
}

// Animações dinâmicas para produtos
class ProductAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        this.observeProducts();
        this.addButtonEffects();
    }
    
    observeProducts() {
        // Intersection Observer para animar produtos quando entram na viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Inicialmente oculta os produtos
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = `all 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });
    }
    
    addButtonEffects() {
        const buyButtons = document.querySelectorAll('.buy-btn');
        
        buyButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                // Efeito de ripple no botão
                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 255, 255, 0.6)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                ripple.style.left = e.offsetX - 10 + 'px';
                ripple.style.top = e.offsetY - 10 + 'px';
                ripple.style.width = '20px';
                ripple.style.height = '20px';
                
                button.style.position = 'relative';
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }
}

// Efeitos de scroll suave
class SmoothEffects {
    constructor() {
        this.init();
    }
    
    init() {
        this.addScrollEffects();
        this.addHeaderScrollEffect();
    }
    
    addScrollEffects() {
        let ticking = false;
        
        const updateOnScroll = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            // Parallax no hero
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = `translateY(${rate * 0.1}px)`;
            }
            
            ticking = false;
        };
        
        const requestScrollUpdate = () => {
            if (!ticking) {
                requestAnimationFrame(updateOnScroll);
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    }
    
    addHeaderScrollEffect() {
        const header = document.querySelector('.fixed-header');
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                header.style.backdropFilter = 'blur(20px)';
                header.style.background = 'linear-gradient(135deg, rgba(217, 70, 239, 0.95) 0%, rgba(192, 38, 211, 0.95) 100%)';
            } else {
                header.style.backdropFilter = 'blur(10px)';
                header.style.background = 'linear-gradient(135deg, #d946ef 0%, #c026d3 100%)';
            }
            
            lastScrollTop = scrollTop;
        }, { passive: true });
    }
}

// Simulação de stock baixo (efeito psicológico)
class StockEffect {
    constructor() {
        this.init();
    }
    
    init() {
        const urgencyMessages = document.querySelectorAll('.urgency');
        const messages = [
            '⚡ Restam apenas 3 unidades com brinde grátis!',
            '🔥 Últimas 5 unidades disponíveis!',
            '⏰ Apenas 2 unidades restantes!',
            '💨 Estoque limitado - últimas peças!',
            '🎁 Só restam 4 unidades com brinde!'
        ];
        
        urgencyMessages.forEach((msg, index) => {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            
            // Atualiza mensagem aleatoriamente a cada 30-60 segundos
            setInterval(() => {
                const newMessage = messages[Math.floor(Math.random() * messages.length)];
                msg.textContent = newMessage;
                
                // Efeito de destaque
                msg.style.animation = 'none';
                setTimeout(() => {
                    msg.style.animation = 'pulse 2s infinite';
                }, 100);
            }, 30000 + Math.random() * 30000); // Entre 30-60 segundos
        });
    }
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    // Inicia todas as funcionalidades
    new CountdownTimer();
    new ProductAnimations();
    new SmoothEffects();
    new StockEffect();
    
    // Adiciona estilos de animação dinâmicos
    addDynamicStyles();
    
    // Preload de imagens para melhor performance
    preloadImages();
});

// Função para adicionar estilos de animação dinâmicos
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes pulseRed {
            0%, 100% { 
                background: linear-gradient(135deg, #d946ef 0%, #c026d3 100%);
            }
            50% { 
                background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
            }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-2px); }
            75% { transform: translateX(2px); }
        }
        
        .loading-placeholder {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
        }
        
        @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }
    `;
    document.head.appendChild(style);
}

// Função para preload de imagens
function preloadImages() {
    const images = document.querySelectorAll('img[src]');
    images.forEach(img => {
        const imagePreload = new Image();
        imagePreload.src = img.src;
    });
}

// Função para tracking de cliques nos botões (opcional)
function trackButtonClick(productName) {
    // Aqui você pode adicionar código de analytics
    console.log(`Produto clicado: ${productName}`);
    
    // Exemplo de como enviar dados para Google Analytics (se implementado)
    // gtag('event', 'purchase_intent', {
    //     'product_name': productName,
    //     'timestamp': new Date().toISOString()
    // });
}

// Adiciona listeners para tracking nos botões
document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            trackButtonClick(productName);
        });
    });
});

// Service Worker para cache (opcional - melhora performance)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registrado com sucesso');
            })
            .catch(registrationError => {
                console.log('Falha no registro do SW');
            });
    });
}