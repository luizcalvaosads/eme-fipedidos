
function getDateNow() {
    var dataAtual = new Date();

    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1; // Os meses começam do zero, então adicionamos 1
    var ano = dataAtual.getFullYear();

    var dataHoraFormatada = dia + '/' + mes + '/' + ano;

    return dataHoraFormatada;
};

export { getDateNow }
