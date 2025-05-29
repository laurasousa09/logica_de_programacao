let idioma = prompt(&quot;Qual o seu idioma? \n 1- Português \n 2- Inglês \n 3- Espanhol \n 4-
Francês \n Digite sua resposta: &quot;)
switch(idioma){
case &quot;Português&quot;:
case &quot;Portugues&quot;:
case &quot;português&quot;:
case &quot;portugues&quot;:
console.log(&quot;Seja bem-vindo!&quot;)
break
case &quot;Inglês&quot;:
case &quot;inglês&quot;:
case &quot;Ingles&quot;:
case &quot;ingles&quot;:
console.log(&quot;You are welcome!&quot;)
break
case &quot;Espanhol&quot;:
case &quot;espanhol&quot;:
console.log(&quot;Bienvenido&quot;)
break
case &quot;Francês&quot;:
case &quot;Frances&quot;:
case &quot;francês&quot;:
case &quot;frances&quot;:
console.log(&quot;Accueillir&quot;)
default:
console.log(&quot;Idioma não reconhecido&quot;)
}

let diaDaSemana = 4;

let nomeDia;

switch(diaDaSemana) {
case 1:
console.log(&quot;Domingo&quot;);
break;
case 2:
console.log(&quot;Segunda&quot;);
break;
case 3:
console.log(&quot;Terça&quot;);
break;
case 4:
console.log(&quot;Quarta&quot;);
break;
case 5:
console.log(&quot;Quinta&quot;);
break;
case 6:
console.log(&quot;Sexta&quot;);
break;
case 7:
console.log(&quot;Sábado&quot;);
break;
default:
console.log(&quot;Dia inválido&quot;);
}

let meioDeTransporte = Number(prompt(&quot;Digite um número de 1 a 4 pra saber seu meio de
transporte: &quot;))
switch(meioDeTransporte){

case 1:
console.log(&quot;Seu meio de transporte é um carro&quot;)
break
case 2:
console.log(&quot;Seu meio de transporte é uma bicicleta&quot;)
break
case 3:
console.log(&quot;Seu meio de transporte é um ônibus&quot;)
break
case 4:
console.log(&quot;Seu meio de transporte é um trem&quot;)
}

let nivel = Number(prompt(&quot;Digite o nível de urgência (1 = Baixa, 2 = Média, 3 = Alta):&quot;))
switch (nivel) {
case 1:
console.log(&quot;Urgência Baixa&quot;)
break
case 2:
console.log(&quot;Urgência Média&quot;)
break
case 3:
console.log(&quot;Urgência Alta&quot;)
break
default:
console.log(&quot;Nível inválido. Digite 1, 2 ou 3.&quot;)
}

let categoriaEscolhida = prompt(&quot;Digite a categoria do veículo (compacto, SUV, caminhão):&quot;)
switch(categoriaEscolhida){
case &quot;compacto&quot;:

case &quot;Compacto&quot;:
console.log(&quot;Veículos Compactos: Fiat Uno, Chevrolet Onix, Ford Ka.&quot;)
break
case &quot;su&quot;:
case &quot;Su&quot;:
console.log (&quot;SUVs: Jeep Compass, Toyota SW4, Honda HR-V.&quot;)
break
case &quot;caminhão&quot;:
case &quot;caminhao&quot;:
case &quot;Caminhao&quot;:
case &quot;Caminhão&quot;:
console.log(&quot;Caminhões: Scania R450, Volvo FH, Mercedes-Benz Actros.&quot;)
break
default:
console.log( &quot;Categoria inválida. Escolha entre: compacto, SUV ou caminhão.&quot;)
}

let categoria = Number(prompt(&quot;Por quantas horas o seu carro ficou no estacionamento?
\n&quot;))
switch (categoria) {
case 1:
console.log(&quot;Tarifa: R$ 5,00&quot;)
break
case 2:
console.log(&quot;Tarifa: R$ 10,00&quot;)
break
case 3:
console.log(&quot;Tarifa: R$ 15,00&quot;)
break
case 4:
console.log(&quot;Tarifa: R$ 25,00&quot;)

break
default:
console.log(&quot;Tarifa: R$ 50,00.&quot;)
}

let nivelEscolhido = parseInt(prompt(&quot;Escolha o nível de dificuldade (1 = Fácil, 2 = Médio, 3 =
Difícil):&quot;))
switch (nivelEscolhido) {
case 1:
console.log(&quot;Dificuldade: Fácil&quot;)
break
case 2:
console.log(&quot;Dificuldade: Médio&quot;)
break
case 3:
console.log(&quot;Dificuldade: Difícil&quot;)
break
default:
console.log(&quot;Número inválido. Digite 1, 2 ou 3.&quot;)
}

let categoriaEscolhida = prompt(&quot;Digite a categoria de serviço desejada (aula de yoga,
musculação, personal trainer):&quot;)
switch (categoriaEscolhida) {
case &quot;aula de yoga&quot;:
console.log(&quot;Você escolheu: Aula de Yoga - Foco em respiração, flexibilidade e
relaxamento.&quot;)
break
case &quot;musculação&quot;:
console.log(&quot;Você escolheu: Musculação - Treinos para força, hipertrofia e resistência.&quot;)
break
case &quot;personal trainer&quot;:

console.log(&quot;Você escolheu: Personal Trainer - Treino individualizado com
acompanhamento profissional.&quot;)
break
default:
console.log(&quot;Categoria inválida. Escolha entre: aula de yoga, musculação ou personal
trainer.&quot;)
}

let categoriaEscolhida = prompt(&quot;Escolha a categoria do ingresso (estudante, meia entrada,
inteira):&quot;)
switch (categoriaEscolhida) {
case &quot;estudante&quot;:
console.log(&quot;Preço do ingresso: R$ 20,00 (desconto para estudantes)&quot;)
break
case &quot;meia entrada&quot;:
console.log(&quot;Preço do ingresso: R$ 25,00 (meia entrada)&quot;)
break
case &quot;inteira&quot;:
console.log(&quot;Preço do ingresso: R$ 50,00 (ingresso inteiro)&quot;)
break
default:
console.log(&quot;Categoria inválida. Escolha entre: estudante, meia entrada ou inteira.&quot;)
}

let faixaEtaria = parseInt(prompt(&quot;Digite sua faixa etária (em anos):&quot;))
switch (true) {
case (faixaEtaria &gt;= 18 &amp;&amp; faixaEtaria &lt;= 30):
console.log(&quot;Nível de dificuldade: Moderado (18-30 anos)&quot;)
break
case (faixaEtaria &gt;= 31 &amp;&amp; faixaEtaria &lt;= 45):
console.log(&quot;Nível de dificuldade: Intermediário (31-45 anos)&quot;)
break

case (faixaEtaria &gt;= 46 &amp;&amp; faixaEtaria &lt;= 60):
console.log(&quot;Nível de dificuldade: Avançado (46-60 anos)&quot;)
break
case (faixaEtaria &gt; 60):
console.log(&quot;Nível de dificuldade: Leve (acima de 60 anos)&quot;)
break
case (faixaEtaria &lt; 18):
console.log(&quot;Exercícios intensos não recomendados para menores de 18 anos.&quot;)
break
default:
console.log(&quot;Faixa etária inválida.&quot;)
}

let generoEscolhido = prompt(&quot;Digite o gênero musical (Rock, Jazz, Clássico, Samba,
Eletrônica):&quot;)
switch (generoEscolhido) {
case &quot;rock&quot;:
case &quot;Rock&quot;:
console.log(&quot;Instrumentos para Rock: Guitarra, Bateria, Baixo.&quot;)
break
case &quot;jazz&quot;:
case &quot;Jazz&quot;:
console.log(&quot;Instrumentos para Jazz: Trompete, Saxofone, Piano.&quot;)
break
case &quot;clássico&quot;:
case &quot;classico&quot;:
case &quot;Classico&quot;:
case &quot;Clássico&quot;:
console.log(&quot;Instrumentos para Música Clássica: Violino, Piano, Violoncelo.&quot;)
break
case &quot;samba&quot;:

case &quot;Samba&quot;:
console.log(&quot;Instrumentos para Samba: Surdo, Tamborim, Pandeiro.&quot;)
break
case &quot;eletrônica&quot;:
case &quot;Eletrônica&quot;:
case &quot;Eletronica&quot;:
case &quot;eletronica&quot;:
console.log(&quot;Instrumentos para Música Eletrônica: Sintetizador, Drum Machine,
Computador.&quot;)
break
default:
console.log(&quot;Gênero musical inválido. Escolha entre: Rock, Jazz, Clássico, Samba ou
Eletrônica.&quot;)
}

let areaEscolhida = prompt(&quot;Escolha uma área (Front-end, Back-end, Mobile):&quot;)
switch (areaEscolhida) {
case &quot;front-end&quot;:
console.log(&quot;Cursos oferecidos em Front-end: HTML, CSS, JavaScript, React.&quot;)
break
case &quot;back-end&quot;:
console.log(&quot;Cursos oferecidos em Back-end: Node.js, Java, Python, PHP.&quot;)
break
case &quot;mobile&quot;:
console.log(&quot;Cursos oferecidos em Mobile: Desenvolvimento Android, Desenvolvimento
iOS, Flutter.&quot;)
break
default:
console.log(&quot;Área inválida. Escolha entre: Front-end, Back-end ou Mobile.&quot;)
}

let idadeAtleta = parseInt(prompt(&quot;Digite a idade do atleta:&quot;))

switch (true) {
case (idadeAtleta &lt;= 18):
console.log(&quot;Nível de habilidade: Iniciante&quot;)
break
case (idadeAtleta &gt;= 19 &amp;&amp; idade &lt;= 30):
console.log(&quot;Nível de habilidade: Intermediário&quot;)
break
case (idadeAtleta &gt;= 31 &amp;&amp; idade &lt;= 45):
console.log(&quot;Nível de habilidade: Avançado&quot;)
case (idadeAtleta &gt; 45):
console.log(&quot;Nível de habilidade: Expert&quot;)
break
default:
console.log(&quot;Digite uma idade válida&quot;)
}

let categoriaEscolhida = prompt(&quot;Escolha a categoria de dificuldade (básico, intermediário,
avançado):&quot;)
switch (categoriaEscolhida) {
case &quot;básico&quot;:
case &quot;basico&quot;:
console.log(&quot;Desafios Básicos: Soma, Subtração, Multiplicação, Divisão.&quot;)
break
case &quot;intermediário&quot;:
case &quot;intermediario&quot;:
console.log(&quot;Desafios Intermediários: Frações, Potências, Radiciação, Álgebra simples.&quot;)
break
case &quot;avançado&quot;:
console.log(&quot;Desafios Avançados: Cálculo, Derivadas, Integrais, Equações diferenciais.&quot;)
break
default:

console.log(&quot;Categoria inválida. Escolha entre: básico, intermediário ou avançado.&quot;)
}