let nome = prompt("Digite seu nome:");


let renda = Number(prompt("Digite sua renda mensal:"));

while (isNaN(renda) || renda <= 0) {
    renda = Number(prompt("Valor inválido! Digite uma renda válida:"));
}


let quantidadeDespesas = Number(
    prompt("Quantas despesas deseja informar? (1 a 5)")
);

while (isNaN(quantidadeDespesas)) {
    quantidadeDespesas = Number(
        prompt("Valor inválido! Digite um número:")
    );
}

if (quantidadeDespesas < 1) {
    quantidadeDespesas = 1;
} else if (quantidadeDespesas > 5) {
    quantidadeDespesas = 5;
}


let totalDespesas = 0;

for (let i = 1; i <= quantidadeDespesas; i++) {

    let despesa = Number(
        prompt(`Digite o valor da Despesa ${i}:`)
    );

    while (isNaN(despesa) || despesa < 0) {
        despesa = Number(
            prompt(`Valor inválido! Digite novamente a Despesa ${i}:`)
        );
    }

    totalDespesas += despesa;
}


let sobra = renda - totalDespesas;

let mensagem = "";

if (totalDespesas > renda) {

    mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";

} else {

    if (sobra >= renda * 0.30) {

        mensagem = "✅ Ótimo: boa margem de sobra.";

    } else {

        mensagem = "🙂 Ok: dá para melhorar a sobra.";
    }
}


let resultado =
`===== RELATÓRIO FINANCEIRO =====

Nome: ${nome}

Renda: R$ ${renda.toFixed(2)}

Total de despesas: R$ ${totalDespesas.toFixed(2)}

Sobra: R$ ${sobra.toFixed(2)}

Classificação:
${mensagem}
`;

alert(resultado)
console.log(resultado);