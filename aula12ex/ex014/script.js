function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora < 12){
        //Boa Dia
        img.src = 'imagens/manha.png'
    }else if(hora >= 12 && hora < 18){
        //Boa Tarde
        img.src = 'imagens/tarde.png'
    }else{
        //Boa Noite
        img.src = 'imagens/noite.png'
    }
}