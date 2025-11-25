// ==========================================
// ACCESSIBILITY.JS - Acessibilidade
// ==========================================

const accessibility = {
    // Estado de acessibilidade
    state: {
        highContrast: localStorage.getItem('pv-high-contrast') === 'true',
        librasEnabled: localStorage.getItem('pv-libras-enabled') === 'true'
    },

    // Inicializa acessibilidade
    init() {
        this.applyHighContrast();
        this.setupToggleButtons();
        this.setupLibras();
    },

    // Aplica alto contraste
    applyHighContrast() {
        if (this.state.highContrast) {
            document.body.classList.add('high-contrast');
            this.updateToggleButton('contrast-toggle', true);
        } else {
            document.body.classList.remove('high-contrast');
            this.updateToggleButton('contrast-toggle', false);
        }
    },

    // Toggle alto contraste
    toggleHighContrast() {
        this.state.highContrast = !this.state.highContrast;
        localStorage.setItem('pv-high-contrast', this.state.highContrast);
        this.applyHighContrast();
        this.announce('Alto contraste ' + (this.state.highContrast ? 'ativado' : 'desativado'));
    },

    // Toggle Libras
    toggleLibras() {
        this.state.librasEnabled = !this.state.librasEnabled;
        localStorage.setItem('pv-libras-enabled', this.state.librasEnabled);
        this.updateToggleButton('libras-toggle', this.state.librasEnabled);
        this.announce('Libras ' + (this.state.librasEnabled ? 'ativada' : 'desativada'));
        
        if (this.state.librasEnabled) {
            this.showLibrasContainer();
        } else {
            this.hideLibrasContainer();
        }
    },

    // Configura botões de toggle
    setupToggleButtons() {
        const contrastBtn = document.getElementById('contrast-toggle');
        const librasBtn = document.getElementById('libras-toggle');

        if (contrastBtn) {
            contrastBtn.addEventListener('click', () => this.toggleHighContrast());
        }
        if (librasBtn) {
            librasBtn.addEventListener('click', () => this.toggleLibras());
        }
    },

    // Atualiza estado visual do botão
    updateToggleButton(buttonId, isActive) {
        const btn = document.getElementById(buttonId);
        if (btn) {
            btn.setAttribute('aria-pressed', isActive);
            if (isActive) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        }
    },

    // Configura container de Libras
    setupLibras() {
        if (this.state.librasEnabled) {
            this.showLibrasContainer();
        }
    },

    // Mostra container de Libras
    showLibrasContainer() {
        let container = document.getElementById('libras-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'libras-container';
            container.className = 'libras-container';
            container.setAttribute('aria-label', 'Intérprete de Libras');
            container.innerHTML = `
                <div class="libras-header">
                    <span>🤟 Libras</span>
                    <button class="libras-close" aria-label="Fechar Libras" onclick="accessibility.toggleLibras()">×</button>
                </div>
                <div class="libras-video">
                    <div class="placeholder">
                        <p>🤟 Intérprete de Libras em breve</p>
                        <small>Integração com serviço de Libras</small>
                    </div>
                </div>
            `;
            document.body.insertBefore(container, document.body.firstChild);
        }
        container.style.display = 'block';
    },

    // Esconde container de Libras
    hideLibrasContainer() {
        const container = document.getElementById('libras-container');
        if (container) {
            container.style.display = 'none';
        }
    },

    // Anuncia mudanças (para leitores de tela)
    announce(message) {
        const liveRegion = document.getElementById('a11y-announcer');
        if (liveRegion) {
            liveRegion.textContent = message;
        }
    },

    // Melhora contraste de cores dinamicamente
    enhanceContrast() {
        if (this.state.highContrast) {
            // CSS custom properties já mudam o contraste
            const style = document.querySelector('style[data-accessibility="contrast"]');
            if (!style) {
                const newStyle = document.createElement('style');
                newStyle.setAttribute('data-accessibility', 'contrast');
                newStyle.textContent = `
                    body.high-contrast {
                        --primary-color: #000;
                        --secondary-color: #000;
                        --text-color: #FFF;
                        background-color: #000;
                    }
                    body.high-contrast .navbar {
                        background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
                    }
                    body.high-contrast .hero {
                        background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
                        color: #FFF;
                    }
                    body.high-contrast .hero h1,
                    body.high-contrast .hero p {
                        color: #FFF;
                        text-shadow: 2px 2px 0px #FFD93D;
                    }
                    body.high-contrast main {
                        background-color: #000;
                        color: #FFF;
                    }
                    body.high-contrast .info-card,
                    body.high-contrast .about-card,
                    body.high-contrast .quiz-content,
                    body.high-contrast .results-content,
                    body.high-contrast .intro-content {
                        background: #1a1a1a;
                        color: #FFF;
                        border: 3px solid #FFD93D;
                    }
                    body.high-contrast .btn-primary {
                        background: #FFD93D;
                        color: #000;
                        border: 2px solid #000;
                    }
                    body.high-contrast .btn-secondary {
                        background: #4ECDC4;
                        color: #000;
                        border: 2px solid #000;
                    }
                    body.high-contrast #map {
                        border: 3px solid #FFD93D;
                    }
                    body.high-contrast .map-legend {
                        background: #1a1a1a;
                        color: #FFF;
                        border: 2px solid #FFD93D;
                    }
                    body.high-contrast .legend-item,
                    body.high-contrast .ethnia-item {
                        color: #FFF;
                    }
                `;
                document.head.appendChild(newStyle);
            }
        }
    }
};

// Inicializa quando o DOM está pronto
document.addEventListener('DOMContentLoaded', function() {
    accessibility.init();
    accessibility.enhanceContrast();
});
