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

//Menu open

const menuBtn = document.querySelector('.header__menu-name'),
 mainMenu = document.querySelector('.menu');

const openBlockMenu = () => {
  mainMenu.classList.toggle('display-flex')
}

const openSlowMenu = () => {
  mainMenu.classList.toggle('opacity-show')
}

menuBtn.addEventListener('click', () => {
  
  

  if (!mainMenu.classList.contains('display-flex')) {
    openBlockMenu()
    setTimeout(openSlowMenu, 100)
  } else {
    openSlowMenu()
    setTimeout(openBlockMenu, 1100)
  }

});

