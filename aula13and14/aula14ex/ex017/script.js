function calcularTabuada() {
  let txtn = document.getElementById('txtnum')
  let tab = document.getElementById('seltabuada')

  if (txtn.value.length === 0) {
    window.alert('ERR, O campo não pode estar vazio!')
  }
  else {
    let n = Number(txtn.value)
    tab.innerHTML = ''
    for (let c = 1; c <= 10; c++) {
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n * c}`
      item.value = `tab${c}`
      tab.appendChild(item)
    }
  }
}