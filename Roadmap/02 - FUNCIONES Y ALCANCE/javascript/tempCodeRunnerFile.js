function imprimirMultiplos(cadenaTxt1, cadenaTxt2) {
    let contador = 0
    for(let i = 1; i <= 100; i++ ) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log(cadenaTxt1 + cadenaTxt2)
        }else if(i % 3 === 0) {
            console.log(cadenaTxt1)
        }else if (i % 5 === 0) {
            console.log(cadenaTxt2)
        }else {
            console.log(i)
            contador++
        }
    }
    return contador
}
console.log(imprimirMultiplos("cadenaTxt1", "cadenaTxt2"))