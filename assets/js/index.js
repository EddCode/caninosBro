const init = _ => {
  const scrollFromTop = window.pageYOffset
  console.log(scrollFromTop)
}

init()

const listener = _ => {
  init()
}

window.addEventListener('scroll', listener)
