function soma (a,b){
return a + b
}

function multiplicacao (a,b){
return a * b
}

function subtracao (a,b){
return a - b
}

function divisao (a,b){
return a / b
}

console.log (&quot;Digite 2 números&quot;)
let numero1 = Number(prompt(&quot;Digite o número 1: &quot;))
let numero2 = Number(prompt(&quot;Digite o número 2: &quot;))
let resultado
let operacao = prompt(&quot;Digite a operação que você deseja:\n-Adição\n-Subtração\n-
Multiplicação\n-Divisão\nDigite aqui:&quot;)

switch (operacao){
case &quot;Adição&quot;:
case &quot;adição&quot;:
case &quot;adicão&quot;:
case &quot;adicao&quot;:
resultado = soma(numero1,numero2)
console.log (&quot;Resultado:&quot;, resultado)

break
case &quot;Subtração&quot;:
case &quot;subtração&quot;:
case &quot;subtracão&quot;:
case &quot;subtracao&quot;:
resultado = subtracao(numero1,numero2)
console.log (&quot;Resultado:&quot;, resultado)
break
case &quot;Multiplicação&quot;:
case &quot;multiplicação&quot;:
case &quot;multiplicaçao&quot;:
case &quot;multiplicacao&quot;:
resultado = multiplicacao(numero1,numero2)
console.log (&quot;Resultado:&quot;, resultado)
break
case &quot;Divisão&quot;:
case &quot;divisão&quot;:
case &quot;divisao&quot;:
case &quot;Divisao&quot;:
resultado = divisao(numero1,numero2)
console.log (&quot;Resultado:&quot;, resultado)
break
default:
console.log (&quot;Opção inválida&quot;)

}