
  const menuToggle = document.getElementById('menu');
  const navMenu = document.getElementById('navMenu');

  menuToggle.addEventListener('click', function (e) {
    e.preventDefault();
    navMenu.classList.toggle('active');
  });
