const frm = document.querySelector("form")
const resp = document.querySelector("pre")

//ouvinte
frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const valor = Number(frm.inValor.value)
    const num = Number(frm.inParcela.value)
    const valorParcela = Math.floor(valor /num)
    let valorFinal = valorParcela + (valor %num)
    let resposta = ""
    for(let i = 1; i < num; i++){
        resposta = resposta + i +"° Parcela: R$" + valorParcela.toFixed(2) + "\n"
    }
    resposta = resposta + num +"° Parcela: R$" + valorFinal.toFixed(2)
    resp.innerText = resposta
})