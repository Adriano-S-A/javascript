function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    if(fano.value.length == 0 || fano.value > ano){
        alert('Verifique os dados e Tente Novamente!');
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var gênero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked) {
            gênero = 'Homem';
            if(idade >= 0 && idade < 7){
                //bebe
                img.setAttribute('src', 'imagens/bebe-menino.png');
            }else if(idade >= 7 && idade < 15){
                //Criança
                img.setAttribute('src', 'imagens/menino.png');
            }else if (idade < 25){
                //jovem-adulto
                img.setAttribute('src', 'imagens/jovem-homem.png');
            }else if(idade < 60){
                //adulto
                img.setAttribute('src', 'imagens/homem-adulto.png');
            }else if(idade <100){
                //idoso
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }else{
                img.setAttribute('src', 'imagens/rip.png')
            }
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 7){
                //bebe
                 img.setAttribute('src', 'imagens/bebe-menina.png');
            }else if(idade > 7 && idade < 15){
                //Criança
                 img.setAttribute('src', 'imagens/menina.png');
            }else if (idade < 25){
                //jovem-adulto
                 img.setAttribute('src', 'imagens/jovem-mulher.png');
            }else if(idade < 60){
                //adulto
                 img.setAttribute('src', 'imagens/mulher-adulta.png');
            }else if (idade < 100) {
                //idoso
                 img.setAttribute('src', 'imagens/mulher-idosa.png');
            }else{
                img.setAttribute('src', 'imagens/rip.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} Anos`
        res.appendChild(img)
    }
}