function verificarRespostas() {
    let pontos = 0;

    const r1 = document.querySelector('input[name="pergunta1"]:checked');
    const r2 = document.querySelector('input[name="pergunta2"]:checked');
    const r3 = document.querySelector('select[name="pergunta3"]');

    if (!r1 || !r2 || !r3.value) {
        document.getElementById("resultado").textContent = 
            "Responda todas as perguntas antes de enviar.";
        return;
    }

    if (r1.value === "sim") pontos++;
    if (r2.value === "plural") pontos++;
    if (r3.value === "arajapo") pontos++;

    document.getElementById("resultado").textContent =
        `Você acertou ${pontos} de 3 perguntas.`;
}