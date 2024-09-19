function parimpar(n){
  if (n%2 === 0){
    return 'Par'
  } else {
    return 'Ímpar'
  }
}
let n = 23
let res = parimpar(n)
console.log(` O numero ${n} é ${res}`);
