
setInterval(function() {
    myTimer();
}, 1000);

function myTimer() {
    // relógio
    var d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
    // contagem regressiva
    var p = calcDaysForHappiness();
    var dias = p.days > 1 ? 'dias' : 'dia';
    var horas = p.hours > 1 ? 'horas' : 'hora';
    var minutos = p.minutes > 1 ? 'minutos' : 'minuto';
    var segundos = p.seconds > 1 ? 'segundos' : 'segundo';
    var msg = `Faltam ${p.days} ${dias}, ${p.hours} ${horas}, ${p.minutes} ${minutos} e ${p.seconds} ${segundos} para o Brasil voltar a sonhar! `
    document.getElementById("regressiva").innerHTML = msg;
    // Troca da imagem...
    if (p.seconds % 3 == 0) {
        let img = document.getElementById("lula-img")
        let currentNumber = img.src.substring(img.src.length-6, img.src.length-4)
        let nextNumber = parseInt(currentNumber)
        nextNumber = nextNumber + 1
        if (nextNumber > 22) { nextNumber = 1; }
        nextNumber = '0' + nextNumber.toString()
        nextNumber = nextNumber.substring(nextNumber.length-2, nextNumber.length)
        let nextImage = `./img/lula_${nextNumber}.jpg`
        img.src = nextImage 
    }
}
function calcDaysForHappiness() {
    // get total seconds between the times
    var date_future= new Date('2023-01-01');
    var date_now= new Date();
    var delta = Math.abs(date_future - date_now) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    // what's left is seconds
    var seconds = Math.floor(delta % 60);  // in theory the modulus is not required  

    return ({days: days, hours: hours, minutes: minutes, seconds: seconds})
}