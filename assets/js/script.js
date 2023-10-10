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
document.querySelectorAll('.header-button>div').forEach(val => {
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
})

// scroll animation
const moverFigure = document.querySelectorAll('.glass-mover>div>figure')
let flag2 = 0
window.addEventListener('scroll', e => {
  if (flag2 <= 0) {
    flag2 -= 10
    if (flag2 == -1400) {
      flag2 = 0
    }
  }
  moverFigure.forEach(val => {
    val.style.transform = `translateX(${flag2}px)`
  })
})

// fixed menu on top
// 
const menuScroll = document.querySelector('.head-nav-menu')
menuScroll.style.transition = '1s'
window.addEventListener('scroll', (e) => {
  menuScroll.style.left = '400px'
  if (window.scrollY > 50) {
    menuScroll.style.position = 'fixed'
    menuScroll.style.left = '0'
  } if (window.scrollY < 50) {
    menuScroll.style.left = '400px'
    omenuScroll.style.opacity = '0'
    setTimeout(() => {
      menuScroll.style.position = 'relative'
      menuScroll.style.backgroundColor = 'rgba(0, 0, 0,0.5);'
      menuScroll.style.left = '0'
      omenuScroll.style.opacity = '1'
    }, 1000)
  }
})
