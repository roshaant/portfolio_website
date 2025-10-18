const backToTop = document.getElementById('backToTop');
const workExperienceSection = document.querySelector('.work-experience');

window.addEventListener('scroll', () => {
  const workExperienceOffset = workExperienceSection.offsetTop;
  if (window.scrollY > workExperienceOffset) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
