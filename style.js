const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
        menuToggle.classList.toggle('open');
    });
});
document.addEventListener('DOMContentLoaded', function() {
  const burgerMenuButton = document.querySelector('.burger-menu-button');
  const burgerMenuOverlay = document.querySelector('.burger-menu-overlay');
  const closeMenuButton = document.querySelector('.close-menu-button');

  burgerMenuButton.addEventListener('click', function() {
      burgerMenuOverlay.classList.add('active');
  });

  closeMenuButton.addEventListener('click', function() {
      burgerMenuOverlay.classList.remove('active');
  });

  // Close menu when clicking outside of the menu
  document.addEventListener('click', function(event) {
      if (!burgerMenuOverlay.contains(event.target) && !burgerMenuButton.contains(event.target)) {
          burgerMenuOverlay.classList.remove('active');
      }
  });
});
