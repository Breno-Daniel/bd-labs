// Rola suavemente até a seção com id="contact" ao carregar a página
window.onload = function() {
  scrollToSection();
};

// rolagem com reaveal effect 
  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // só anima uma vez
        }
      });
    }, {
      threshold: 0.5
    });

    // Aplica a observação a todos os elementos com a classe 'reveal'
    document.querySelectorAll(".reveal").forEach(el => {
      observer.observe(el);
    });
  });

//skill buttons para mudar a cor do fundo (just for style)
const skillButtons = document.querySelectorAll(".skill-btn");
const originalBg = document.body.style.backgroundColor;

skillButtons.forEach(button => {
  button.addEventListener("mouseenter", () => {
    const color = button.getAttribute("data-color");
    document.body.style.backgroundColor = color;
  });

  button.addEventListener("mouseleave", () => {
    document.body.style.backgroundColor = originalBg || "#0e0e0e"; // fundo padrão
  });
});

//side bar para mobile
 function scrollToSection() {
  window.scrollTo({top:0, behavior:'smooth'});
};

  const menuBtn = document.getElementById("toggleSidebar");
  const sidebar = document.getElementById("sidebar");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  // Opcional: esconder sidebar ao clicar em um link
  document.querySelectorAll("#sidebar a").forEach(link => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("active");
    });
  });

//formulario com EMAILJS

document.getElementById('form-contato').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = this;

  emailjs.sendForm('service_8jgdr8h', 'template_4273nse', form)
    .then(() => {
      showModalMessage('Mensagem enviada com sucesso!', 'success');
      form.reset();
    })
    .catch(() => {
      showModalMessage('Erro ao enviar. Tente novamente mais tarde.', 'error');
    });
});

// Função que exibe o modal
function showModalMessage(text, type) {
  const modal = document.getElementById('modal-message');
  const content = document.getElementById('modal-content');

  content.textContent = text;
  content.className = `modal-content ${type}`;
  modal.style.display = 'flex';

  // Ocultar após 2 segundos
  setTimeout(() => {
    modal.style.display = 'none';
  }, 2000);
}

