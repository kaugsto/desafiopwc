function soma() {
    var nomerua=document.getElementById("endereco").value
    var numerorua=document.getElementById("numero").value
    var resultado=document.getElementById("resultado")
    console.log(nomerua)
    console.log(numerorua)


    if(nomerua !== '' && numerorua !== ''){
        resultado.textContent = nomerua +', '+ numerorua
    } else{
        alert ('Preencha todos os campos')
    }
}