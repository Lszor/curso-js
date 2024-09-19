function fazerContagem() {
  let ini = document.getElementById('txtinicio')
  let fim = document.getElementById('txtfim')
  let passo = document.getElementById('txtpasso')
  let res = document.querySelector('div#res')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = `Impossivel contar`
  }
  else {
    res.innerHTML = `Contando: `
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
      window.alert('o passo nao pode ser menor ou igual a zero, cosiderando passo como 1')
      p = 1
    }

    if (i <= f) {
      for (let c = i; c <= f; c += p) {

        res.innerHTML += ` ${c} &#128073;`
      }
    }
    else {
      //regressiva
      for (let c = i; c >= f; c -= p) {

        res.innerHTML += ` ${c} &#128073;`
      }
    }
    res.innerHTML += `&#128640;`
  }


}