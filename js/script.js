const navDots = document.querySelectorAll('.right-panel__dot'),
  secondBlock = document.querySelector('.second');


let scrollToBlock = (block) => {
  block.scrollIntoView({
    block: 'end',
    behavior: 'smooth'
  });
};

navDots.forEach(dot => {
  dot.addEventListener('click', () => {
    scrollToBlock(secondBlock)
  })
});