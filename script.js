let student = prompt("Qual é seu nome? ");

let noteBiOne = Number(prompt("Digite sua nota do primeiro bimestre: "));
let noteBiTwo = Number(prompt("Digite sua nota do segundo bimestre: "));
let noteBiThree = Number(prompt("Digite sua nota do terceiro bimestre: "));
let media = (noteBiOne + noteBiTwo + noteBiThree) / 3;

media = media.toFixed(2);

if (media > 6) {
  alert(
    "Parabéns " +
      student +
      ", Sua média foi " +
      media +
      ", está boa continue firme"
  );
} else if (media == 6) {
  alert(
    student + " Sua média:  " + media + "está no limite tenha mais atenção"
  );
} else {
  alert(
    student +
      ", Sua média: " +
      media +
      " está abaixo do mínimo esperado, você está reprovado"
  );
}
