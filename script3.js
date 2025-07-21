function adicionarseriedade() {
    
    let mensagem = "Coisa séria adicionada com sucesso!";
    let coisaseria = document.getElementById("coisaseria")
    let serio = coisaseria.value
    console.log(serio)
    document.getElementById("mensagem").textContent = mensagem

    let listacoisas = document.getElementById("listacoisas")
    let novacoisa = document.createElement("li")
    listacoisas.appendChild(novacoisa)
    novacoisa.textContent = serio

    coisaseria.value = ""
}