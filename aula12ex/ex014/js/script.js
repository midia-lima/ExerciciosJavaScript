function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('img-manha')
    
    let data = new Date()
    let hora = data.getHours()    

   
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.png'
        document.body.style.background = '#ffff66'
    }
    else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde.png'
        document.body.style.background = 'bfff00'
    }
    else {
        img.src = 'img/noite.png'
        document.body.style.background = '#808080'

    }
}

