function contar (){
    let ini = window.document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini === '' || fim === '' || pas === '') {
        alert('[ERRO] Faltam dados!')
        return;
    } 
        let i = Number(ini.value)
        let f= Number(fim.value)
        let p = Number(pas.value)

        if (pass <= 0){
            alert('O número zero não pode ser considerado, vamos substitui-lo para 1')
        
            pass = 1

        }

        res.innerHTML = `Contando: <br>`
        if (ini < fim){
        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c}`
        } } 
        else {
            for(let c = i; c >= f; c -=p ){
                res.innerHTML += `${c}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }