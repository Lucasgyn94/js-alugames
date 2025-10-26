/*
3. Crie um programa que verifica se uma palavra ou frase é um palíndromo.
*/
let fraseOriginal = "arara";
let fraseLimpa = '';
let fraseReversa = '';

let fraseEmMinusculo = fraseOriginal.toLowerCase();

for (let i = 0; i < fraseEmMinusculo.length; i++) {
    const char = fraseEmMinusculo[i];

    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
        fraseLimpa += char;
    }
}

for (let i = fraseLimpa.length - 1; i >= 0; i--) {
    fraseReversa += fraseLimpa[i];
}

console.log(`Frase Original: ${fraseOriginal}`);
console.log(`Frase Limpa: ${fraseLimpa}`);
console.log(`Frase Reversa: ${fraseReversa}`);

if (fraseReversa === fraseLimpa) {
    console.log(`A frase "${fraseOriginal} é um palíndromo"`);
} else {
    console.log(`A frase "${fraseOriginal}" não é um palíndromo"`);
}





















































// let fraseOriginal = 'race car';
// let fraseLimpa = '';
// let fraseReversa = '';

// // ETAPA 1: Normalizar para minúsculas (essencial para a comparação)
// let fraseMinuscula = fraseOriginal.toLowerCase();

// // ETAPA 2: Filtrar a string, mantendo apenas letras e números
// for (let i = 0; i < fraseMinuscula.length; i++) {
//     const char = fraseMinuscula[i];

//     // Verificamos se o caractere está entre 'a' e 'z' OU entre '0' e '9'
//     // Esta verificação funciona porque os caracteres têm uma ordem interna (ASCII/Unicode)
//     if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
//         fraseLimpa += char; // Adiciona o caractere válido à nossa string limpa
//     }
// }

// // ETAPA 3: Inverter a string que já está limpa
// for (let i = fraseLimpa.length - 1; i >= 0; i--) {
//     fraseReversa += fraseLimpa[i];
// }

// console.log(`Frase original: "${fraseOriginal}"`);
// console.log(`Frase limpa: ${fraseLimpa}`);
// console.log(`Frase reversa: ${fraseReversa}`);

// // ETAPA 4: Comparar a versão limpa com a sua inversa
// if (fraseReversa === fraseLimpa) {
//     console.log(`A frase "${fraseOriginal}" é um palíndromo`);
// } else {
//     console.log(`A frase "${fraseOriginal}" não é um palíndromo`);
// }