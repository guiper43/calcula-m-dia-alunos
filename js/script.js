//criada função média
function media(){
   //criadas as variaveis que vão obter o que o usuário digitar no campo
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
var nota3=parseFloat(document.getElementById("nota3").value);
var  nota4=parseFloat(document.getElementById("nota4").value);
//criada a variavel média ela soma os valores digitados e divide por 4
    var media = (nota1 + nota2 + nota3 + nota4)/4 ;
    //condicionais criadas, dependendo do resultado das notas é retornado um alerta para o o usuário.
if(media ==10){
   alert(" aluno gabaritou");
}else if(media >=7){
   alert(" aluno aprovado");
}else {
   alert(" aluno foi reprovado");
}


           }

