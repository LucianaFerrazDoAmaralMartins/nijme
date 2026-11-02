document.addEventListener('DOMContentLoaded', () => {
    // Lógica do Menu Mobile
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Lógica do Seletor de Tema
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        const currentTheme = localStorage.getItem('theme');

        // Aplica o tema salvo ou o padrão do sistema
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            if (currentTheme === 'dark') {
                themeToggleButton.checked = true;
            }
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggleButton.checked = true;
        }

        themeToggleButton.addEventListener('change', function() {
            if (this.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Cookie Consent Banner
    const consentBanner = document.getElementById('cookie-consent-banner');
    const acceptButton = document.getElementById('cookie-consent-accept');

    if (consentBanner && acceptButton) { // Ensure elements exist before trying to use them
        if (!localStorage.getItem('privacyConsent')) {
            consentBanner.style.display = 'flex';
        }
        acceptButton.addEventListener('click', () => {
            localStorage.setItem('privacyConsent', 'true');
            consentBanner.style.display = 'none';
        });
    }
});