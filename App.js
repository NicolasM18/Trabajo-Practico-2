const readlineSync = require('readline-sync');
const { generarNumeroAleatorio, verificarAdivinanza } = require('./Adivinanza');

const obtenerNumeroUsuario = () => {
    return readlineSync.question("Ingrese un numero: ");
}

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;
    
    console.log('Bienvenido a adivia el numero secreto!');
    console.log('Intenta adivinar el numero del 1 all 100./n');

    while(numeroAdivinado !== numeroSecreto){
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
}

juegoAdivinanza();