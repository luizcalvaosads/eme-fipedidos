
function getDateNow() {
    var dataAtual = new Date();

    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1; // Os meses começam do zero, então adicionamos 1
    var ano = dataAtual.getFullYear();
    var hora = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    var segundos = dataAtual.getSeconds();

    var dataHoraFormatada = dia + '/' + mes + '/' + ano + ' ' + hora + ':' + minutos + ':' + segundos;

    return dataHoraFormatada;
};

export { getDateNow }