 let num = [5,2,3,4]
 num.sort()
 num.push(1)
 console.log(`O vetor com os elementos [${num}] ,tem um total de ${num.length}`);
 console.log(`O primeiro valor do vetor é ${num[0]}`);
 let pos = num.indexOf(5)
 if (pos === -1){
console.log('valor não encontrado');
 } else{
 console.log(`o valor 4 esta na posição ${pos}`);
 }