const boxes = document.querySelectorAll(`.box`);
const containers = document.querySelectorAll(`.container`);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.children[0].classList.toggle(`show`, entry.isIntersecting);
    });
  },
  {
    threshold: 0.5,
  }
);
containers.forEach((container) => observer.observe(container));
