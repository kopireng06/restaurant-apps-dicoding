const onScrollListener = () => {
  const navLink = document.querySelectorAll('.nav-link');
  const logo = document.querySelector('.logo');
  const hamburger = document.querySelector('#hamburger');
  const navbar = document.querySelector('.navbar');
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    navbar.style.backgroundColor = 'white';
    navbar.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
    logo.style.color = 'rgb(0, 189, 133)';
    hamburger.style.filter = 'none';
    for (let i = 0; i <= navLink.length; i++) {
      navLink[i].style.color = 'rgb(0, 189, 133)';
    }
  } else {
    navbar.style.backgroundColor = 'transparent';
    navbar.style.boxShadow = 'none';
    logo.style.color = 'white';
    hamburger.style.filter = 'invert(100%) sepia(100%) saturate(0%) hue-rotate(65deg) brightness(107%) contrast(245%)';
    for (let i = 0; i <= navLink.length; i++) {
      navLink[i].style.color = 'white';
    }
  }
};

export default onScrollListener;
