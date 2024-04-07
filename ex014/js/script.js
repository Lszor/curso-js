function load() {

  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var hd1 = document.getElementById('hd1')
  var ft1 = document.getElementById('ft1')
  var date = new Date()
  var hour = date.getHours()
  msg.innerHTML = `Agora são ${hour} horas.`
  if (hour >= 0 && hour < 12) {
    //manha
    img.src = 'fotomanha.png'
    document.body.style.background = '#dbddda'
    ft1.style.color = 'black'
    hd1.style.color = 'black'
    msg.innerHTML += ` <p> <span> <strong>BOM DIA!!</strong> </span> </p>`
  } else
    if (hour >= 12 && hour < 18) {
      img.src = 'fototarde.png'
      document.body.style.background = '#517e7a'
      ft1.style.color = '#d9d79c'
      hd1.style.color = '#d9d79c'
      msg.innerHTML += ` <p> <span> <strong>BOA TARDE!!</strong> </span> </p>`
      // tarde
    } else {
      img.src = 'fotonoite.png'
      document.body.style.background = '#5d446b'
      ft1.style.color = '#e9eef9'
      hd1.style.color = '#e9eef9'
      msg.innerHTML += ` <p> <span> <strong>BOA NOITE!!</strong> </span> </p>`
      //noite
    }
}