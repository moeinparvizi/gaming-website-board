// menu click _*_*_*_*_*_*_*_*_*_*_*_*_*_
const menuLi = document.querySelectorAll('.menu-li')
// resetting function
const menuLiResetting = () => {
  menuLi.forEach(val => {
    val.classList.remove('fw-bold')
    val.classList.remove('text-light')
  })
}
menuLi.forEach((val) => {
  // clicked
  val.addEventListener('click', () => {
    // resetting
    menuLiResetting()
    val.classList.toggle('fw-bold')
    val.classList.toggle('text-light')
  })
})
// frist one
menuLi[0].classList.add('fw-bold')
menuLi[0].classList.add('text-light')

// header button if hover
const buttonHover = (val) => {
  val.addEventListener('mouseover', () => {
    val.classList.add('animate__animated')
    val.classList.add('animate__pulse')
    val.style.opacity = '.8'
  })
  val.addEventListener('mouseleave', () => {
    val.classList.remove('animate__animated')
    val.classList.remove('animate__pulse')
    val.style.opacity = '1'
  })
}
document.querySelectorAll('.header-button>div').forEach(v => {
  buttonHover(v)
})
document.querySelectorAll('.virtual-reality>div>div>.header-button-two').forEach(v => {
  buttonHover(v)
})

// scroll animation
const moverFigure = document.querySelectorAll('.glass-mover>div>figure')
const moverFigure2 = document.querySelectorAll('.glass-mover2>div>figure')
let flag2 = 0
window.addEventListener('scroll', e => {
  if (flag2 <= 0) {
    flag2 -= 10
    if (flag2 == -1400) {
      flag2 = 0
    }
  }
  moverFigure.forEach(val => {
    glassMoverTransform(val)
  })
  moverFigure2.forEach(val => {
    glassMoverTransform(val)
  })
})
const glassMoverTransform = (v) => {
  v.style.transform = `translateX(${flag2}px)`
}

// fixed menu on top
// 
const menuScroll = document.querySelector('.head-nav-menu')
menuScroll.style.transition = '1s'
menuScroll.style.backgroundColor = 'rgba(0, 0, 0, 0)'
menuScroll.style.paddingRight = '40px'
menuScroll.style.borderRadius = '30px'
window.addEventListener('scroll', () => {
  menuScroll.style.left = '400px'
  menuScroll.style.backgroundColor = 'rgba(255, 255, 255, 0)'
  if (window.scrollY > 500) {
    menuScroll.style.position = 'fixed'
    menuScroll.style.zIndex = '99999 !important'
    menuScroll.style.left = '0'
    menuScroll.style.backgroundColor = 'rgba(0,0,0, .1)'
  } if (window.scrollY < 500) {
    menuScroll.style.left = '400px'
    menuScroll.style.opacity = '0'
    menuScroll.style.position = 'relative'
    setTimeout(() => {
      menuScroll.style.left = '0'
      menuScroll.style.opacity = '1'
    }, 1000)
  }
})

// click on icon menu
let flag3 = true
document.querySelector('.mobile-menu>i').addEventListener('click', e => {
  e.target.style.transition = '1s'
  if (flag3 == true) {
    e.target.style.opacity = '0'
    e.target.classList.remove('bi-list')
    setTimeout(() => {
      e.target.classList.add('bi-x-lg')
      e.target.style.opacity = '1'
    }, 500)
    openningMenu()
    flag3 = false
  } else {
    e.target.style.opacity = '0'
    e.target.classList.remove('bi-x-lg')
    setTimeout(() => {
      e.target.classList.add('bi-list')
      e.target.style.opacity = '1'
    }, 500)
    openningMenu()
    flag3 = true
  }
})
const mobileMenuList = document.querySelector('.mobile-menu-list')
mobileMenuList.style.transition = '1s'
const openningMenu = () => {
  if (flag3 == true) {
    mobileMenuList.style.left = '0'
  } else {
    mobileMenuList.style.left = '-3000px'
  }
}
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  // spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

