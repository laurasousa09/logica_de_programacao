let login = prompt(&quot;Digite seu login: &quot;)
let senha = prompt(&quot;Digite sua senha: &quot;)
function verificarlogin(usario,senha){
let usuario1 = &quot;laura&quot;
let senha1 = &quot;sousa&quot;

let usuario2 = &quot;amora&quot;
let senha2 = &quot;chloe&quot;

let usuario3 = &quot;user&quot;
let senha3 = &quot;senha&quot;

let usuario4 = &quot;user1&quot;
let senha4 = &quot;senha1&quot;

let usuario5 = &quot;user2&quot;
let senha5 = &quot;senha2&quot;

let usuario6 = &quot;user3&quot;
let senha6 = &quot;senha3&quot;

let usuario7 = &quot;user4&quot;
let senha7 = &quot;senha4&quot;

let usuario8 = &quot;user5&quot;
let senha8 = &quot;senha5&quot;

let usuario9 = &quot;user6&quot;
let senha9 = &quot;senha6&quot;

let usuario10 = &quot;user7&quot;

let senha10 = &quot;senha7&quot;

if (login === usuario1 &amp;&amp; senha === senha1){
return &quot;Login bem sucedido!&quot;
}
if (login === usuario2 &amp;&amp; senha === senha2){
return &quot;Login bem sucedido!&quot;
}
if (login === usuario3 &amp;&amp; senha === senha3){
return &quot;Login bem sucedido!&quot;
}
if (login === usuario4 &amp;&amp; senha === senha4){
return &quot;Login bem sucedido!&quot;
}
if (login === usuario5 &amp;&amp; senha === senha5){
return &quot;Login bem sucedido!&quot;
}
if (login === usuario6 &amp;&amp; senha === senha6){
return &quot;Login bem sucedido!&quot;
}
if (login === usuario7 &amp;&amp; senha === senha7){
return &quot;Login bem sucedido!&quot;
}
if (login === usuario8 &amp;&amp; senha === senha8){
return &quot;Login bem sucedido!&quot;
}
if (login === usuario9 &amp;&amp; senha === senha9){
return &quot;Login bem sucedido!&quot;
}
if (login === usuario10 &amp;&amp; senha === senha10){
return &quot;Login bem sucedido!&quot;

}
else{
return &quot;Usuário ou senha incorretos&quot;
}
}
let resultado = verificarlogin(login,senha)
console.log (resultado)