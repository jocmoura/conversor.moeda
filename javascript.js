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

  
  function ConverterPesos() {
    var valorElemento = document.getElementById("valor2") // pega o valor pelo ID 

    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);

    var valorEmPesosArgentino = valorEmReal * 26.8 ;
    console.log(valorEmPesosArgentino);
    var elementoValorConvertido2 = document.getElementById("valorConvertido2")
    valorConvertido2 = "O valor em Pesos Argentino é: " + valorEmPesosArgentino
    elementoValorConvertido2.innerHTML = valorConvertido2

  }
