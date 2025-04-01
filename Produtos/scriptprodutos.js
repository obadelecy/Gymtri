// Adicionando comportamento de rolagem suave aos links da navegação
document.querySelectorAll('.navbar-list a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Impede o comportamento padrão de navegação
  
      // Obtém o alvo do link (o ID da seção que o link está apontando)
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      // Rola suavemente até a seção correspondente
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  

// Função de redirecionamento para a página de compra
function comprar(produtoId) {
    // Redireciona para a página específica de compra do produto
    window.location.href = `compra.html?produto=${produtoId}`;
}

// Inicializa o slide atual
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-image");

// Função para mostrar o slide atual
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

// Função para ir ao próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Função para ir ao slide anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Mostra o primeiro slide
showSlide(currentSlide);

// Alterna automaticamente a cada 3 segundos
setInterval(nextSlide, 3000);


// Função para adicionar animação de pulsação aos produtos ao passar o mouse
produtos.forEach(produto => {
    produto.addEventListener('mouseover', () => {
        produto.classList.add('pulse');
    });

    produto.addEventListener('mouseout', () => {
        produto.classList.remove('pulse');
    });
});

// Adicionando efeito de aumento na imagem ao passar o mouse
const imagensProdutos = document.querySelectorAll('.product img');

// Função para aumentar a imagem dos produtos ao passar o mouse
imagensProdutos.forEach(imagem => {
    imagem.addEventListener('mouseover', () => {
        imagem.style.transform = 'scale(1.2)';
        imagem.style.transition = 'transform 0.3s ease';
    });

    imagem.addEventListener('mouseout', () => {
        imagem.style.transform = 'scale(1)';
    });
});


