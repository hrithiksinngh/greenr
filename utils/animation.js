function instersectioOberserverCallback(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('showAnimation');
    } else {
      entry.target.classList.remove('showAnimation');
    }
  });
}

function afterCallback(observer) {
  const hiddenElements = document.querySelectorAll('.hiddenAnimation');
  hiddenElements.forEach(el => observer.observe(el));
}

const rootMargin = {
  rootMargin: '30px',
};

export default { instersectioOberserverCallback, afterCallback, rootMargin };
