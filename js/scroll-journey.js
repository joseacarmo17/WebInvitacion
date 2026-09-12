(() => {
  const journey = document.querySelector('.scroll-journey');
  if (!journey) return;

  const bus = journey.querySelector('.scroll-journey__bus');
  const fill = journey.querySelector('.scroll-journey__fill');
  let framePending = false;

  function updateJourney() {
    framePending = false;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    journey.hidden = scrollableHeight <= 0;
    if (journey.hidden) return;

    const progress = Math.max(0, Math.min(1, window.scrollY / scrollableHeight));
    const travel = Math.max(0, journey.clientHeight - bus.clientHeight);
    bus.style.transform = `translateY(${progress * travel}px)`;
    fill.style.transform = `scaleY(${progress})`;
  }

  function scheduleUpdate() {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(updateJourney);
  }

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('load', scheduleUpdate);
  window.addEventListener('pageshow', scheduleUpdate);
  if ('ResizeObserver' in window) {
    new ResizeObserver(scheduleUpdate).observe(document.body);
  }
  updateJourney();
})();
