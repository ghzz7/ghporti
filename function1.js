function calcularTarifa(tipo, idade) {
  let preco = 4.50;

  tipo = tipo.toLowerCase();

  // Verifica se a pessoa é idosa (idade 60 ou mais)
  if (idade >= 60) {
    return 0;
  }

  // Verifica se é estudante
  else if (tipo === "estudante") {
    return preco / 2; // metade
  }

  // Verifica se é pessoa com deficiência
  else if (tipo === "pcd") {
    return 0;
  }

  // Qualquer outro tipo paga o valor cheio
  else {
    return preco;
  }
}
console.log(calcularTarifa("pcd", 12));