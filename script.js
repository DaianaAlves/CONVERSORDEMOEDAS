var valorEmDolaremTexto = prompt("Qual o valor em dolar que você quer converter? ")

var valorEmNumeDolar = parseFloat(valorEmDolaremTexto)

var valorEmReal = valorEmNumeDolar * 5.56
var valoremRealDecimal = valorEmReal.toFixed(2)
alert ("Valor em Real é :")
alert(valorEmReal)
