const keyenter = new window.Event('enter')

window.document.addEventListener('keydown', e => {
  console.log(e)
  console.log(e['key'])
  if ('Enter'.localeCompare(e.code) === 0) {
    console.log('hey')
    window.dispatchEvent(keyenter)
  }
})

window.addEventListener('enter', e => console.log(e))
