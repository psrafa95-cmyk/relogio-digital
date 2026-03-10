function atualizarRelogio(){

let agora = new Date()

let horas = agora.getHours()
let minutos = agora.getMinutes()
let segundos = agora.getSeconds()

let horario = horas + ":" + minutos + ":" + segundos

document.getElementById("relogio").innerHTML = horario

}

setInterval(atualizarRelogio,1000)