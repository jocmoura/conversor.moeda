function Converter() {
    var valorElemento = document.getElementById("valor"); //pega o valor pelo ID
    var valor = valorElemento.value;
    var valorEmDollarNumerico = parseFloat(valor)
  
    var valorEmReal = valorEmDollarNumerico * 5.23;
    console.log(valorEmReal);
    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O valor em Real é : R$" + valorEmReal
    elementoValorConvertido.innerHTML = valorConvertido
  }