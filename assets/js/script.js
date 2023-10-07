// menu click _*_*_*_*_*_*_*_*_*_*_*_*_*_
const menuLi = document.querySelectorAll('.menu-li')
menuLi.forEach((val) => {
  // resetting
  val.classList.remove('fw-bold')
  val.classList.remove('text-light')
  // clicked
  val.addEventListener('click', () => {
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
