document.addEventListener("DOMContentLoaded", function () {

    const params = new URLSearchParams(window.location.search);

    const carroInput = document.getElementById("carro");
    const precoInput = document.getElementById("preco");

    if (carroInput && precoInput) {
        carroInput.value = params.get("carro") || "";
        precoInput.value = params.get("preco") || "";
    }

});

function calcular() {
    let inicio = new Date(document.getElementById("inicio").value);
    let fim = new Date(document.getElementById("fim").value);
    let preco = Number(document.getElementById("preco").value);

    if (!document.getElementById("inicio").value || !document.getElementById("fim").value) {
        alert("Preencha as datas");
        return;
    }

    let dias = (fim - inicio) / (1000 * 60 * 60 * 24);

    if (dias <= 0) {
        alert("Data final deve ser maior que a inicial");
        return;
    }

    let total = dias * preco;
    document.getElementById("resultado").innerText =
        "Total: R$ " + total.toFixed(2);
}
