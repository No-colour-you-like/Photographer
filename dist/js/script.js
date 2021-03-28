
const navDots = document.querySelectorAll('.right-panel__dot'),
  firstBlock = document.querySelector('.first'),
  secondBlock = document.querySelector('.second'),
  thirdBlock = document.querySelector('.third'),
  fourthBlock = document.querySelector('.fourth'),
  fifthBlock = document.querySelector('.fifth');


let scrollToBlock = (block) => {
  block.scrollIntoView({
    block: 'end',
    behavior: 'smooth'
  });
};

//Change header and footer color scroll




// document.addEventListener('wheel', (e) => {

//   if (e.deltaY < 0) {
//     scrollToBlock(firstBlock)
//   } else if (e.deltaY > 0) {
//     scrollToBlock(secondBlock)
//   }

// })

const headerMenuName = document.querySelector('.header__menu'),
headerLine = document.querySelector('.header__menu-line');
const blocks = [firstBlock, secondBlock, thirdBlock, fourthBlock, fifthBlock]

navDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {

    blocks.forEach(item => {
      item.classList.remove('active')
    });

    switch(i) {
      case 0:
        scrollToBlock(firstBlock)
        firstBlock.classList.add('active')
        break
      case 1:
        scrollToBlock(secondBlock)
        secondBlock.classList.add('active')
        break
      case 2:
        scrollToBlock(thirdBlock)
        thirdBlock.classList.add('active')
        break
      case 3:
        scrollToBlock(fourthBlock)
        fourthBlock.classList.add('active')
        break
      case 4:
        scrollToBlock(fifthBlock)
        fifthBlock.classList.add('active')
        break
    }

    if (firstBlock.classList.contains('active')) {
      headerMenuName.classList.remove('red-color')
      headerMenuName.classList.add('grey-color')
      headerLine.classList.remove('red-background')
      headerLine.classList.add('grey-background')
    } else  {
      headerMenuName.classList.remove('grey-color')
      headerMenuName.classList.add('red-color')
      headerLine.classList.remove('grey-background')
      headerLine.classList.add('red-background')
    }
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
    setTimeout(openBlockMenu, 800)
  }
  
});



let blockHeight = getComputedStyle(firstBlock).height

// const btn = document.querySelector('.right-panel__active');
// blockHeight = blockHeight.slice(0, -2)

// document.addEventListener('click', () => {
  
//   window.scrollBy({
//     top: blockHeight,
//     behavior: 'smooth'
//   })
// });

//About btn open text 

const secondPhoto = document.querySelector('.second__photo'),
aboutBtn = document.querySelector('.about-see-btn');

aboutBtn.addEventListener('click', () => {
 
  if (!secondPhoto.classList.contains('second-photo-open')) {
    secondPhoto.classList.remove('second-photo-hide')
    secondPhoto.classList.add('second-photo-open')
  } else {
    secondPhoto.classList.remove('second-photo-open')
    secondPhoto.classList.add('second-photo-hide')
  }
  
});