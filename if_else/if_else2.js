let idade = 15
let categoria
if (idade >= 60){
    categoria = "idosa"
    console.log("Idade final: " + idade)
    console.log("Categoria: " + categoria)
}
else {
    if (idade < 12){
        categoria = "criança"
        console.log("Idade final: " + idade)
        console.log("Categoria: " + categoria)
    }
    if (idade >= 18 && idade < 60){
        categoria = "adulta"
        console.log("Idade final: " + idade)
        console.log("Categoria: " + categoria)
    }
    if (idade >= 12 && idade < 18){
        categoria = "adolescente"
        console.log("Idade final: " + idade)
        console.log("Categoria: " + categoria)
    }
}




let idade = 27

if (idade >= 18 && idade < 70) {
    console.log("Voto obrigatório.")
}

if (idade < 18) {
    console.log("Não vota.")
}

if (idade >= 70) {
    console.log("Voto facultativo.")
} else {
}

let numero = 0
if (numero > 0) {
    console.log("Positivo")
}

if (numero < 0) {
    console.log("Negativo")
}
else if (numero == 0) {
    console.log("Zero")
}


let combustivel = prompt("Digite um combustível: \n")
if (combustivel === "Gasolina") {
    console.log("Você escolheu Gasolina")
}

if (combustivel === "Álcool") {
    console.log("Você escolheu Álcool")
}

if (combustivel === "Diesel") {
    console.log("Opção inválida")
}


let velocidade = 75

if (velocidade <= 60) {
    console.log("Dentro do limite")
}

if (velocidade <= 80) {
    console.log("Atenção")
}

if (velocidade > 80) {
    console.log("Multado")
}