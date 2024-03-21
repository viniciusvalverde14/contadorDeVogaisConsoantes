let v = ['a', 'e',
    'i', 'o', 'u'];

let consoantes = ["b", "c", "d", "f", "g",
                  "h", "j", "k", "l", "m",
                  "n", "p", "q", "r", "s", 
                  "t", "v", "w", "x", "y", "z"];

let espaços = [" "];

let especiais = [
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+",
    "-", "=", "[", "]", "{", "}", ";", ":", "'", "\"", "\\", "|",
    ",", ".", "<", ">", "/", "?"]

let texto = "Eu *amo muito* minha namorada!!";

texto = texto.toLowerCase();

let minusculo = texto.split("");

let contadorV = [];

let contadorC = [];

let contadorE = [];

let contadorX = [];

for (let i = 0; i < minusculo.length; i++) {
    if (v.includes(minusculo[i])) {
        contadorV.push(minusculo[i]);
    }
    if (consoantes.includes(minusculo[i])) {
        contadorC.push(minusculo[i]);
    }
    if (espaços.includes(minusculo[i])) {
        contadorE.push(minusculo[i]);
    }
    if (especiais.includes(minusculo[i])) {
        contadorX.push(minusculo[i]);
    }
}

console.log("Texto original:" + texto);
console.log("Consoantes encontradas: " + contadorC.toString());
console.log("Total de Consoantes: " + contadorC.length);
console.log("Vogais encontradas: " + contadorV.toString());
console.log("Total de Vogais: " + contadorV.length);
console.log("Total de espaços: " + contadorE.length);
console.log("Caracteres especiais: " + contadorX.toString());
console.log("Total de especiais: " + contadorX.length);