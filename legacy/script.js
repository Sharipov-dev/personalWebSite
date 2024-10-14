document.addEventListener('DOMContentLoaded', function () {
  const fadeInElements = document.querySelectorAll('.fade-in');
  let counter = 0;
  fadeInElements.forEach((element, index) => {
    if (counter === 1) {
      const profileElement = document.getElementsByClassName('profile')[0];
      if (profileElement) {
        profileElement.classList.add('hoverable');
      }
    }
    if (counter === 2) {
      const descriptionElement =
        document.getElementsByClassName('description')[0];
      if (descriptionElement) {
        descriptionElement.classList.add('hoverable');
      }
    }
    counter++;
    setTimeout(() => {
      element.classList.add('visible');
    }, index * 200);
  });
});
