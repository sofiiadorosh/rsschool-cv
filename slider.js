const track = document.querySelector('[data-carousel-track]');
const prevButton = document.querySelector('[data-carousel-prev]');
const nextButton = document.querySelector('[data-carousel-next]');

if (track && prevButton && nextButton) {
  const EDGE_TOLERANCE = 1;

  const updateControls = () => {
    const maxScroll = track.scrollWidth - track.clientWidth;

    prevButton.disabled = track.scrollLeft <= EDGE_TOLERANCE;
    nextButton.disabled = track.scrollLeft >= maxScroll - EDGE_TOLERANCE;
  };

  const scrollByCard = (direction) => {
    const card = track.firstElementChild;

    if (!card) {
      return;
    }

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: 'smooth',
    });
  };

  prevButton.addEventListener('click', () => scrollByCard(-1));
  nextButton.addEventListener('click', () => scrollByCard(1));
  track.addEventListener('scroll', updateControls);
  window.addEventListener('resize', updateControls);

  updateControls();
}
