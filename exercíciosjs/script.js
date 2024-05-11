console.log ('Votador')
var idade = 15
console.log(`Você tem ${idade} anos`)

if (idade <16) {
    console.log('Você não tem direito de votar')
} else {
    if (idade >=16 && idade < 18) {
        console.log ('Seu voto é opcional')
    } else {
        console.log('Você é maior de idade')
    } if (idade <18 || idade >65) {
        console.log('seu voto é opcional')
    }
}
