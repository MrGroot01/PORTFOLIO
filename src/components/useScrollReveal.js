import { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up, .fade-in');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  });
};

export default useScrollReveal;
