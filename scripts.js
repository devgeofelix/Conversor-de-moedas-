const button = document.getElementById("convert-button")
const select = document.getElementById("dinheiro-select")


const convertValue = async () => {
    
    const input = document.getElementById('input-real').value
    const realValorTexto = document.getElementById("real-valor-texto")
    const valorConvertido = document.getElementById("valor-convertido")

    const data = await fetch ("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high


    // BIBLIOTECA AXIOS

    realValorTexto.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: "currency", currency: "BRL" }
    ).format(input)

    /* realValorTexto.innerHTML = input */
    /* valorConvertido.innerHTML = input / dolar */
if (select.value === "US$ Dólar Americano") {

    valorConvertido.innerHTML = new Intl.NumberFormat('en-US',
    { style: "currency", currency: "USD" }
).format(input / dolar)

}

if (select.value === "€ Euro") {

    valorConvertido.innerHTML = new Intl.NumberFormat('de-DE',
        { style: "currency", currency: "EUR" }
    ).format(input / euro)
}

if (select.value === "Bitcoin") {

    valorConvertido.innerHTML = (input / bitcoin)
}

}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const usa = document.getElementById("eua-img")


    if (select.value === '€ Euro') { 
    currencyName.innerHTML = 'Euro'
    usa.src = "./img/euro.png"
}

if (select.value === 'US$ Dólar Americano') {

    currencyName.innerHTML = 'Dólar Americano'
    usa.src = "./img/estados-unidos.png"
}

if (select.value === 'Bitcoin') {

    currencyName.innerHTML = 'Bitcoin'
    usa.src = "./img/bitcoin.png"
}

convertValue ()

}

button.addEventListener("click", convertValue)
select.addEventListener("change", changeCurrency)
