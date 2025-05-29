let plataforma = prompt(&quot;Qual plataforma você deseja usar? \n 1- CMD \n 2- Linux \n Digite
sua resposta: &quot;)

if (plataforma == &quot;CMD&quot; || plataforma == &quot;cmd&quot; || plataforma == &quot;1&quot;) {
console.log(&quot;Modo CMD ativado!&quot;)

let cmd = prompt(&quot;Qual comando CMD você deseja saber mais?\n Digite sua resposta: &quot;)
switch (cmd.toLowerCase()) {
case &quot;cd&quot;:
case &quot;Cd&quot;:
console.log(&quot;O comando cd do Prompt de Comando (CMD) do Windows permite alterar
o diretório atual de trabalho&quot;)
break
case &quot;dir&quot;:
case &quot;Dir&quot;:
console.log(&quot;O comando dir do Prompt de Comando do Windows lista os arquivos e
pastas de um diretório. É um comando que está disponível em vários sistemas operativos,
como MS-DOS, CP/M, VMS, AmigaDOS, OS/2. &quot;)
break
case &quot;mkdir&quot;:
case &quot;Mkdir&quot;:
console.log(&quot;No prompt de comando do Windows (CMD), o comando mkdir (ou md) é
usado para criar diretórios (pastas). O comando recebe como argumento o nome da pasta a
ser criada. Por exemplo, mkdir nova_pasta cria uma pasta chamada nova_pasta no diretório
atual. &quot;)
break
case &quot;del&quot;:
case &quot;Del&quot;:
console.log(&quot;O comando del no prompt do Windows (CMD) é usado para apagar um ou
mais arquivos, sem os enviar para a lixeira. Permite excluir arquivos individualmente ou em
massa, utilizando parâmetros adicionais para maior flexibilidade.&quot;)
break
case &quot;copy&quot;:
case &quot;Copy&quot;:

console.log(&quot;No prompt de comando (CMD) do Windows, o comando copy é utilizado
para copiar arquivos de um local para outro. Para usar o comando, você precisa especificar a
origem (o arquivo a ser copiado) e o destino (onde o arquivo será salvo). &quot;)
break
case &quot;exit&quot;:
case &quot;Exit&quot;:
console.log(&quot;O comando exit no prompt de comando (CMD) do Windows serve para
encerrar a sessão do CMD ou, opcionalmente, apenas o script em lote atual. Ele retorna para o
programa que iniciou o CMD ou para o gerenciador de programas. &quot;)
break
case &quot;rmdir&quot;:
case &quot;Rmdir&quot;:
console.log(&quot;No prompt de comando do Windows (CMD), o comando rmdir (ou rd) é
usado para remover diretórios (pastas) vazios. Ele também pode ser usado com a flag /s para
remover um diretório e todo o seu conteúdo (arquivos e subdiretórios). &quot;)
break
case &quot;cd ..&quot;:
case &quot;Cd ..&quot;:
console.log(&quot;O comando cd .. serve para voltar um nível na hierarquia de diretórios&quot;)
break
case &quot;cls&quot;:
case &quot;Cls&quot;:
console.log(&quot;O comando cls no CMD (Prompt de Comando) do Windows serve para
limpar a tela, removendo todos os textos e informações que estão visíveis na janela do CMD.
Para utilizar, basta digitar cls e pressionar a tecla Enter. &quot;)
break
case &quot;echo&quot;:
case &quot;Echo&quot;:
console.log(&quot;O comando echo no CMD (Prompt de Comando do Windows) serve para
exibir texto na tela ou, dependendo do contexto, para ativar ou desativar o eco dos comandos
executados. Também pode ser usado para criar ou adicionar linhas a um arquivo. &quot;)
break
case &quot;move&quot;:
case &quot;Move&quot;:

console.log(&quot;O comando move no prompt de comando do Windows (CMD) é usado
para mover um ou mais arquivos de um diretório para outro. Ele também pode ser usado para
renomear arquivos e diretórios. &quot;)
break
default:
console.log(&quot;Comando não reconhecido no CMD.&quot;)
break
}

} else if (plataforma == &quot;Linux&quot; || plataforma == &quot;linux&quot; || plataforma == &quot;2&quot;) {
console.log(&quot;Modo Linux ativado!&quot;)

let linux = prompt(&quot;Qual comando do Linux você deseja saber mais? \n Digite sua resposta:
&quot;);
switch (linux) {
case &quot;mkdir&quot;:
case &quot;Mkdir&quot;:
console.log(&quot;O comando mkdir do Linux cria novos diretórios, ou pastas, no sistema de
arquivos. É um dos comandos mais utilizados no Linux e está presente em todas as
distribuições comuns. &quot;)
break
case &quot;ls&quot;:
case &quot;Ls&quot;:
console.log(&quot;O comando ls do Linux lista arquivos e diretórios em um diretório. É um
dos comandos mais utilizados no Linux. &quot;)
break
case &quot;cd&quot;:
case &quot;Cd&quot;:
console.log(&quot;O comando cd do Linux permite alterar o diretório de trabalho atual, ou
seja, a pasta onde o usuário está trabalhando. Cd é a abreviação de change directory.&quot;)
break
case &quot;rm&quot;:
case &quot;Rm&quot;:

console.log(&quot;O comando rm do Linux remove arquivos ou diretórios. É uma ferramenta
útil para limpar pastas e diretórios. &quot;)
break
case &quot;clear&quot;:
case &quot;Clear&quot;:
console.log(&quot;No terminal do Linux, o comando clear limpa a tela, deslocando o
conteúdo para cima, e o prompt de comando é colocado na primeira linha. Também é possível
limpar a tela usando o atalho Ctrl + L. &quot;)
break
case &quot;cp&quot;:
case &quot;Cp&quot;:
console.log(&quot;O comando cp também copia diretórios inteiros em outros diretórios se
você especificar as bandeiras -r ou -R . Isso copia os arquivos, mas não os diretórios, desde o
diretório orders no diretório shipments .&quot;)
break
case &quot;mv&quot;:
case &quot;Mv&quot;:
console.log(&quot;Use o comando mv para mover arquivos e diretórios de um diretório para
outro ou para renomear um arquivo ou diretório. Se você mover um arquivo ou diretório para
um novo diretório sem especificar um novo nome, ele reterá seu nome original.&quot;)
break
case &quot;cat&quot;:
case &quot;Cat&quot;:
console.log(&quot;O comando cat do Linux é usado para exibir, criar, concatenar, copiar,
mesclar e manipular arquivos de texto. É um dos comandos mais utilizados em sistemas
operacionais do tipo Unix. &quot;)
break
case &quot;echo&quot;:
case &quot;Echo&quot;:
console.log(&quot;O comando echo do Linux exibe texto na tela do terminal. É uma
ferramenta que permite a comunicação entre o usuário e o terminal. &quot;)
break
case &quot;cd ..&quot;:
case &quot;Cd ..&quot;:

console.log(&quot;O comando cd .. no Linux (e em outros sistemas Unix-like) serve para
navegar para o diretório pai do diretório atual.&quot;)
default:
console.log(&quot;Comando não reconhecido no Linux.&quot;)
break
}

} else {
console.log(&quot;Plataforma não reconhecida. Digite 1 para CMD ou 2 para Linux.&quot;) }