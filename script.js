window.addEventListener('load', () => {
  const h1 = document.querySelector('h1');
  h1.style.opacity = 0;
  h1.style.transform = 'translateY(-20px)';
  setTimeout(() => {
    h1.style.transition = 'all 1s ease';
    h1.style.opacity = 1;
    h1.style.transform = 'translateY(0)';
  }, 500);
});
