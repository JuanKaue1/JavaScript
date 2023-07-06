// scroll
document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  const scrollProgress = document.getElementById('scrollProgress');

  window.addEventListener('scroll', function () {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const progress = (scrollTop / (scrollHeight - windowHeight)) * 100;

    scrollProgress.style.width = `${progress}%`;

    if (scrollTop > 100) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});


const home = document.querySelector('.back-img');
const back = document.querySelector('.back');
const element = document.getElementById('myElement');

// back
back.addEventListener('click', () => {
  window.location.href = './index.html'
});

// hover
back.addEventListener('mouseenter', () => {
  home.src = './assets/img/home_hover.png'
});

back.addEventListener('mouseleave', () => {
  home.src = './assets/img/home.png'
});

