const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const dia = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')
const cpmt = document.querySelector('#cpmt')


setInterval(relogio,1000)


function relogio(){
    let hoje = new Date()

    let hr = hoje.getHours()
    let min = hoje.getMinutes()
    let seg = hoje.getSeconds()
    let d = hoje.getDay()
    let m = hoje.getMonth()
    let a = hoje.getFullYear()
    let aux


    if (hr<10){
        hr = "0" + hr
    }
    if (min<10){
        min = "0" + min
    }
    if (seg<10){
        seg = "0" + seg
    }
    if (d<10){
        d = "0" + d
    }
    if (m<10){
        m = "0" + m
    }
    if (hr>4&&hr<19){
        aux = 'Bom Dia'
    }
    else{
        aux = 'Boa Noite'
    }
    
    


    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg
    dia.textContent = d
    mes.textContent = m
    ano.textContent = a
    cpmt.textContent = aux

}