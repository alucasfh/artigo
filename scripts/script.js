

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const itens = document.querySelectorAll('.content');

itens.forEach((item) => observer.observe(item));





