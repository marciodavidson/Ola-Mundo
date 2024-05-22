function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = window.document.getElementById('txtano');
    let res = window.document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente.');
    } else {
        let fsex = window.document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let genero = '';
        let imagem = document.createElement('img');
        imagem.setAttribute('id', 'foto');

        // Sexo masculino
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                // Criança
                imagem.setAttribute('src', 'menino.jpg');
                imagem.setAttribute('width' , '200');
                imagem.setAttribute('height' , '200')
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                imagem.setAttribute('src', 'ojovem.jpg');
                imagem.setAttribute('width' , '200');
                imagem.setAttribute('height' , '200')
            } else if (idade >= 21 && idade < 60) {
                // Adulto
                imagem.setAttribute('src', 'homem.jpg');
                imagem.setAttribute('width' , '200');
                imagem.setAttribute('height' , '200')
            } else {
                // Idoso
                imagem.setAttribute('src', 'idoso.jpg');
                imagem.setAttribute('width' , '200');
                imagem.setAttribute('height' , '200')
            }
        } 
        // Sexo Feminino
        else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                // Criança
                imagem.setAttribute('src', 'menina.jpg');
                imagem.setAttribute('width' , '200');
                imagem.setAttribute('height' , '200')
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                imagem.setAttribute('src', 'ajovem.jpg');
                imagem.setAttribute('width' , '200');
                imagem.setAttribute('height' , '200')
            } else if (idade >= 21 && idade < 60) {
                // Adulta
                imagem.setAttribute('src', 'adulta.jpg');
                imagem.setAttribute('width' , '200');
                imagem.setAttribute('height' , '200')
            } else {
                // Idosa
                imagem.setAttribute('src', 'idosa.jpg');
                imagem.setAttribute('width' , '200');
                imagem.setAttribute('height' , '200')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(imagem);
    }
}
