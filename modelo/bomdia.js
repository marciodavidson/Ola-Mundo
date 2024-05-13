function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas</p>`

 if (hora >= 6 && hora <12) {
    img.src = 'foto-de-manha.jpg'
    document.body.style.background = 'yellow'
 } else if (hora>=12 && hora<18){
    img.src = 'foto-de-tarde.jpg'
    document.body.style.background = 'orange'
 } else if (hora >=18 && hora <=23) {
    img.src = 'foto-de-noite.jpg'
    document.body.style.background = '#021349f'
 }
}
