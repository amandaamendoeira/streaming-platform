// =====================================================
// FUNCIONALIDADE DARK/LIGHT MODE
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Carrega o tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeToggle.checked = true; // Marca o checkbox se for light
    }

    // Alterna o tema ao mudar o checkbox
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
	const perfilLinks = document.querySelectorAll('.profile-link');

	perfilLinks.forEach(link => {
		link.addEventListener('click', () => {
			// Encontrar o elemento de nome e a imagem dentro do perfil clicado
			const item = link.closest('.profile');
			if (!item) return;

			const nomeEl = item.querySelector('figcaption');
			const imgEl = item.querySelector('img');

			const nome = nomeEl ? nomeEl.textContent.trim() : '';
			let imgSrc = imgEl ? imgEl.getAttribute('src') : '';

			// Ajusta caminho relativo para que funcione a partir de catalogo/catalogo.html
			// Se for um caminho relativo como "assets/1.jpg", prefixa "../" para apontar ao root
			if (imgSrc && !imgSrc.startsWith('http') && !imgSrc.startsWith('/') && !imgSrc.startsWith('..')) {
				imgSrc = '../' + imgSrc;
			}

			try {
				localStorage.setItem('perfilAtivoNome', nome);
				localStorage.setItem('perfilAtivoImagem', imgSrc);
			} catch (e) {
				// Silenciar erros de localStorage (ex: modo privado)
				console.warn('Não foi possível salvar o perfil ativo no localStorage', e);
			}

			// Deixar o link navegar normalmente para catalogo.html
		});
	});
});