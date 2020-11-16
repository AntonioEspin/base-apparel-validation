let email = document.getElementById('correo')
let button = document.getElementById('button')
let iconError = document.getElementById('icon-error')
let message = document.getElementById('message')

button.addEventListener('submit', (e)=> {
  let valor = email.value
  console.log(e)
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
    console.log('Correo exitoso')
  }
  else {
    e.preventDefault()
    iconError.classList.remove('is-active');
    message.classList.remove('is-active');
    email.style.border = "2px solid hsl(0, 93%, 68%)"
    button.style.opacity = '0.5'
  }
})