function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute("src", "baby-boy.png");
            } else if (idade < 30) {
                // jovem
                img.setAttribute('src', 'jovem-man.png')
            } else {
                //idoso
                img.setAttribute('src', 'old-man.png')
            }
                

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'baby-girl.png')
            } else if (idade < 30) {
                // jovem
                img.setAttribute('src', 'jovem-girl.png')
            } else {
                //idoso
                img.setAttribute('src', 'old-woman.png')
            }
        }

        
        res.innerHTML = `Detectamos ${genero} com ${idade}`
        res.appendChild(img)
    }


}