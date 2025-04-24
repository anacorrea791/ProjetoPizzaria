const carregarDados = async (dados) => {
    let divErro = document.getElementById("div-erro");
    divErro.style.display = "none";
    divErro.innerHTML = "";
};
    let divDados = document.getElementById("div-dados");
    divDados.innerHTML = "";
    let divCarregando = document.getElementById("div-carregando");
    divCarregando.style.display = "block";
    let divTabela = document.getElementById("div-tabela");
    divTabela.style.display = "none";

    try {
        let response = await fetch(dados);
        if (!response.ok) {
            throw new Error("Erro ao carregar os dados.");
        }
        let data = await response.json();
        divCarregando.style.display = "none";
        divTabela.style.display = "block";
        criarTabela(data);
    } catch (error) {
        divCarregando.style.display = "none";
        divErro.style.display = "block";
        divErro.innerHTML = error.message;
    };
 