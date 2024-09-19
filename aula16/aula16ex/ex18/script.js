// solicita um numero de 1 a 100
// ser adicionado visualmente e em um array na memoria do navegador
// nao pode adicionar um valor ja contido no array
// nao pode ser numero fora de 1 a 100
// nao pode caixa vazia
// fianalizar mostrando quantos numeros foram cadastrados
// o maior valor informado
// o menor valor informado
// a soma de todos os valores
// a media dos valores digitados
// se adicionar um numero depois do finalizar, cntinuar adicionando
// se adicionar ou finalizar sem nenhum valor mostrar erro

let num = document.getElementById('txtnum')
let list = document.getElementById('selnumlist')
let res = document.querySelector('div#res')
let valores = []

function adicionarNumero() {
  if (isValid(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `numero ${num.value}`
    list.appendChild(item)
    res.innerHTML = ''
  }
  else {
    window.alert('err, por favor adicione um número valido ou um numero que nao esta na lista.')
  }
  num.value = ''
  num.focus()
}

function analisarNumeros() {
  if (valores.length == 0) {
    window.alert('adicione valores antes de finalizar')
  } else {
    let tot = valores.length
    let menor = valores[0]
    let maior = valores[0]
    let soma = 0
    let media = 0
    //laço de percurso que varre o vetor 
    for (let pos in valores) {
      soma += valores[pos]
      if (valores[pos] > maior)
        maior = valores[pos]
      if (valores[pos] < menor)
        menor = valores[pos]
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p> temos ${tot} numeros.</p>`
    res.innerHTML += `<p> o maior numero é ${maior}.</p>`
    res.innerHTML += `<p>o menor é ${menor}.</p>`
    res.innerHTML += `<p> a soma de todos os valores é ${soma}.</p>`
    res.innerHTML += `<p>e a media dos valores é ${media}.</p>`
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function isValid(n) {
  if (Number(n) > 0 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}