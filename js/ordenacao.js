/*
4. Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.

* Para resolução deste problema foi utilizado o material de estudo da ufg em C presente na url:
https://ww2.inf.ufg.br/~hebert/disc/aed1/AED1_04_ordenacao1.pdf

*/
const ordenacaoBubbleSort = (vetorDeNumeros) => {
    let inicio = 0;
    let fim = 0;
    let auxiliar = 0;
    let tamanhoVetor = vetorDeNumeros.length;

    for (fim = tamanhoVetor - 1; fim >= 0; fim--) {
        for (inicio; inicio < fim; inicio++) {
            if (vetorDeNumeros[inicio] > vetorDeNumeros[inicio + 1]) {
                auxiliar = vetorDeNumeros[inicio];
                vetorDeNumeros[inicio] = vetorDeNumeros[inicio + 1];
                vetorDeNumeros[inicio + 1] = auxiliar
            }
        }
    }
    console.log(vetorDeNumeros);
}

let vetorDeNumeros = [4, 2, 9, 5];
ordenacaoBubbleSort(vetorDeNumeros);



















































// let vetorNumeros = [10, 6, 4];
// let tamanho = vetorNumeros.length;

// let inicio = 0;
// let fim = 0;
// let auxiliar = 0;

// for (fim = tamanho - 1; fim > 0; fim--) {
//     for (i = 0; i < fim; i++) {
//         if (vetorNumeros[i] > vetorNumeros[i + 1]) {
//             auxiliar = vetorNumeros[i];
//             vetorNumeros[i] = vetorNumeros[i + 1];
//             vetorNumeros[i + 1]  = auxiliar;
//         }
//     }
// }

// console.log(vetorNumeros);