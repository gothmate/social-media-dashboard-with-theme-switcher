const activate = document.getElementById('activate')
const holder = document.querySelector('.holder')
const mode = document.getElementById('mode')
const darkToLight = document.querySelector('body')
const dMode = document.querySelectorAll('.bloco')
const overview = document.querySelectorAll('.overview')

let active = true
const dark = darkToLight.classList.contains('dark')
console.log(dark)
activate.addEventListener('click', modeActivation())

function modeActivation() {
  if (active && dark) {
    active = false
    holder.style = 'justify-content: end'
    mode.innerHTML = `Dark Mode`
    darkToLight.classList.remove('dark')
    dMode.forEach(item => {
      item.classList.add('dmode')
    })
    overview.forEach(item => {
      item.classList.add('lmode')
    })
    return
  }
  if (!active) {
    active = true
    holder.style = 'justify-content: flex-start'
    mode.innerHTML = `Light Mode`
    darkToLight.classList.add('dark')
    dMode.forEach(item => {
      console.log(item)
      item.classList.remove('dmode')
    })
    overview.forEach(item => {
      item.classList.remove('lmode')
    })
    return
  }
}
