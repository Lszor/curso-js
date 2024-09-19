function criarTabuada() {
  let txtn = document.getElementById('txtnum')
  let tab = document.getElementById('seltabuada')
  if (txtn.value.length === 0) {
    window.alert('ERR, Por favor digite um numero.')
  } else {
    let num = Number(txtn.value)
    tab.innerHTML = ''
    for (let c = 1; c <= 10; c++) {
      // let res = num * c
      let item = document.createElement('option')
      // para linguagens php
      item.value = `tab${c}`
      // text é a parte de dentro do option
      item.text = `${num} x ${c} = ${num * c}`
      tab.appendChild(item)
    }
  }
}