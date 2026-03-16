function formatarTexto(texto) {
  if (!texto) return "";

  // remover espaços extras
  texto = texto.trim().replace(/\s+/g, " ");

  // deixar tudo minúsculo
  texto = texto.toLowerCase();

  // capitalizar início das frases
  texto = texto.replace(/(^\w|\.\s+\w)/g, (letra) => letra.toUpperCase());

  return texto;
}

module.exports = formatarTexto;
