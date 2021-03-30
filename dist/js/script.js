
const navDots = document.querySelectorAll('.right-panel__dot'),
  firstBlock = document.querySelector('.first'),
  secondBlock = document.querySelector('.second'),
  thirdBlock = document.querySelector('.third'),
  fourthBlock = document.querySelector('.fourth'),
  fifthBlock = document.querySelector('.fifth'),
  blocks = [firstBlock, secondBlock, thirdBlock, fourthBlock, fifthBlock];

const menuLinks = document.querySelectorAll('.menu__link'),
rightPanel = document.querySelector('.right-panel');

let scrollToBlock = (block) => {
  block.scrollIntoView({
    block: 'center',
    behavior: 'smooth'
  });
};

//Menu navigation 

menuLinks.forEach((link, i) => {
  link.addEventListener('click', (e) => {

    e.preventDefault();

    switch(i) {
      case 0:
        scrollToBlock(firstBlock)
        break
      case 1:
        scrollToBlock(secondBlock)
        break
      case 2:
        scrollToBlock(thirdBlock)
        break
      case 3:
        scrollToBlock(fourthBlock)
        break
      case 4:
        scrollToBlock(fifthBlock)
        break
    }
  });
});

// Navigation width dots

navDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {

    switch(i) {
      case 0:
        scrollToBlock(firstBlock)
        break
      case 1:
        scrollToBlock(secondBlock)
        break
      case 2:
        scrollToBlock(thirdBlock)
        break
      case 3:
        scrollToBlock(fourthBlock)
        break
      case 4:
        scrollToBlock(fifthBlock)
        break
    }
  })
});

//Main menu open

const headerMenu = document.querySelector('.header__menu'),
headerMenuName = document.querySelector('.header__menu-name'),
headerLine = document.querySelector('.header__menu-line'),
headerItem = document.querySelector('.header__menu-item'),
menuLeftBlock = document.querySelector('.menu__left-block'),
footerLinks = document.querySelectorAll('.footer__link-icon');

const menuBtn = document.querySelector('.header__menu-name'),
 mainMenu = document.querySelector('.menu');

const openBlockMenu = () => {
  mainMenu.classList.toggle('display-flex');
};

const openSlowMenu = () => {
  mainMenu.classList.toggle('opacity-show');
};

const openLeftBlock = () => {
  menuLeftBlock.classList.add('transform-left-block')
}

menuBtn.addEventListener('click', () => {
  
  rightPanel.classList.toggle('right-panel-transform')

  if (!(mainBlock.scrollTop >= blockHeight)) {
    headerMenu.classList.toggle('red-color')
    headerMenuName.classList.toggle('transform-menu-name')
    headerLine.classList.toggle('red-background')
    headerItem.classList.toggle('visibility-hidden')
    footerLinks.forEach(link => {
      link.classList.toggle('red-fill')
    })
  } 
  
  if (headerMenuName.innerHTML === 'Меню') {
    headerMenuName.innerHTML = 'Закрыть'
  } else {
    headerMenuName.innerHTML = 'Меню'
  }

  if (!mainMenu.classList.contains('display-flex')) {
    openBlockMenu();
    setTimeout(openSlowMenu, 100);
    setTimeout(openLeftBlock, 300)
  } else {
    openSlowMenu();
    setTimeout(openBlockMenu, 800);
  }
  
});


//About btn open text 

const secondPhoto = document.querySelector('.second__photo'),
secondInfo = document.querySelector('.second__info'),
secondSubtitle = document.querySelector('.second__subtitle'),
secondSeeAll = document.querySelector('.second__see-all'),
aboutBtn = document.querySelector('.about-see-btn');

aboutBtn.addEventListener('click', () => {
 
  secondBlock.classList.toggle('second-add-bg')
  aboutBtn.classList.toggle('animation-none')

  function photoMove() {
    if (!secondPhoto.classList.contains('second-photo-open')) {
      secondPhoto.classList.remove('second-photo-hide')
      secondPhoto.classList.add('second-photo-open')
    } else {
      secondPhoto.classList.remove('second-photo-open')
      secondPhoto.classList.add('second-photo-hide')
    }
  }

  function secondInfoOpen() {
    secondInfo.classList.toggle('second-info-open')
  }

  function subtitleOpen() {
    secondSubtitle.classList.toggle('subtitle-open')
  }

  if (!secondPhoto.classList.contains('second-photo-open')) {
    secondInfoOpen()
    setTimeout(photoMove, 1000)
    setTimeout(subtitleOpen, 3000)
    secondSeeAll.classList.add('visibility-hidden')
    aboutBtn.classList.add('second-btn-animation')
  } else {
    secondSubtitle.scrollTo(0, 0)
    subtitleOpen()
    photoMove()
    setTimeout(secondInfoOpen, 1800)
    setTimeout(function() {
      secondSeeAll.innerHTML = 'Прочитать всю историю'
      secondSeeAll.classList.remove('visibility-hidden')
      aboutBtn.classList.remove('second-btn-animation')
    }, 2000)
    
  }


});


//Change color width scroll

const mainBlock = document.querySelector('.main'),
asideCounter = document.querySelector('.right-panel__active');
let blockHeight = getComputedStyle(firstBlock).height.slice(0, -2)

  mainBlock.addEventListener('scroll', () => {

    if (mainBlock.scrollTop >= blockHeight) {
      headerMenu.classList.add('red-color')
      headerLine.classList.add('red-background')
      footerLinks.forEach(link => {
        link.classList.add('red-fill')
      })
    } else if (mainBlock.scrollTop <= blockHeight && !mainMenu.classList.contains('display-flex')) {
      headerMenu.classList.remove('red-color')
      headerLine.classList.remove('red-background')
      footerLinks.forEach(link => {
        link.classList.remove('red-fill')
      })
    }

    navDots.forEach(dot => {

      if (mainBlock.scrollTop < blockHeight) {
        dot.classList.remove('red-background-dot')
        navDots[0].classList.add('red-background-dot')
        asideCounter.innerHTML = '01'
      } else if (mainBlock.scrollTop >= blockHeight && mainBlock.scrollTop < (blockHeight * 2)) {
        dot.classList.remove('red-background-dot')
        navDots[1].classList.add('red-background-dot')
        asideCounter.innerHTML = '02'
      } else if (mainBlock.scrollTop >= (blockHeight * 2) && mainBlock.scrollTop < (blockHeight * 3)) {
        dot.classList.remove('red-background-dot')
        navDots[2].classList.add('red-background-dot')
        asideCounter.innerHTML = '03'
      } else if (mainBlock.scrollTop >= (blockHeight * 3) && mainBlock.scrollTop < (blockHeight * 4)) {
        dot.classList.remove('red-background-dot')
        navDots[3].classList.add('red-background-dot')
        asideCounter.innerHTML = '04'
      } else if (mainBlock.scrollTop >= (blockHeight * 4) && mainBlock.scrollTop < (blockHeight * 5)) {
        dot.classList.remove('red-background-dot')
        navDots[4].classList.add('red-background-dot')
        asideCounter.innerHTML = '05'
      }
    })
  });

  

