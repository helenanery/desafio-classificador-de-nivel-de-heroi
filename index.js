let nome = "Kaisa";
// add quantidade de XP
let qttdXP = 0;

console.log("A personagem " + nome + " está no nível de classificação:");

if (qttdXP <= 1000) {
    console.log("Ferro");
} else if (qttdXP <= 2000) {
    console.log("Bronze");
} else if (qttdXP <= 5000) {
    console.log("Prata Ouro");
} else if (qttdXP <= 8000) {
    console.log("Platina Diamante");
} else if (qttdXP <= 9000) {
    console.log("Ascendente");
} else if (qttdXP <= 10000) {
    console.log("Imortal");
} else if (qttdXP >= 10001) {
    console.log("Radiante");
} else {
    console.log("Quantidade de XP inválida.");
}