//questão numero primo
function numeroprimo(num) {
    for (let divisor = 2; divisor < num; divisor++) 
    if (num % divisor == 0) 
    return false;
    return true;}
var Numero = 1000;
for (var n = 2; n < Numero; n++) 
    if (numeroprimo(n)) console.log(n);

// questão para validar senha
function validandosenha(senha) 
    {const regexMaiuscula = /[A-Z]/;
    const regexMinuscula = /[a-z]/;
    const regexNumero = /[0-9]/;
    if (!regexMaiuscula.test(senha)) 
        {return false;}
    if (senha.length < 8)
        {return false;}
        if (!regexNumero.test(senha))
        {return false;}
if (!regexMinuscula.test(senha)) 
       {return false;}
return true;}
const senha = prompt("Digite sua senha:");
if (validandosenha(senha))
    {console.log("Sua senha é válida.");} 
    else {console.log("Sua senha é inválida.");}

//questão fatorial
function calculoDaFatorial(numero)
    {if (numero === 0 || numero === 1)
      {return 1;}
    return numero * calculoDaFatorial(numero - 1);}
  for (var n = 1; n <= 10; n++) 
    {var fatorial = calculoDaFatorial(n);
    console.log("O fatorial de " + n + " é " + fatorial);}
  

//questão raíz quadrada
function verificarRaizQuadrada(numero)
    {if (numero < 0)
      {return false;}
    var raiz = Math.sqrt(numero);
    return raiz % 1 === 0;}
  var numero = 25;
  if (verificarRaizQuadrada(numero))
    {console.log(numero + " é uma raíz perfeita");}
  else {console.log(numero + " não é uma raíz perfeita.");}