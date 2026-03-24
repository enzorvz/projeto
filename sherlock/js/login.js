


let alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function enviar() {
  let nome = document.getElementById("nome").value;
  let num2 = "";
  let idade = (document.getElementById("idade").value);
  let num = idade;
  let nomea = nome.trim().toLowerCase().split("");
  idade = parseInt(idade);

  for (let i = 0; i < nomea.length; i++) { 
    /* caso se foce nome com numero mais como nao existe entao so na cabeça do codigo
    se voce achou isso parabens modifique se quiser .
    for(let number=0 ;number<10;number++){
     let s = String( number)
      switch (nomea[i]) {
        case s:
            num2 +=s
            break

        }}*/ 
    for (let j = 0; j < alfabeto.length; j++) {
      if (nomea[i] == alfabeto[j]) {
        num = j + idade;
        num %= alfabeto.length;
        num2 += (alfabeto[num]);
      }
       if (nomea[i] == " ") {
        num2 += " "
       }
     

     

      

    };

  };
  let nick = document.getElementById("nick");
  if (num2 == "" ||  (document.getElementById("idade").value.trim()) == "") {
    nick.textContent = ("DIGITE NO CAMPO ACIMA. ");
  }
  else {

    nick.textContent = ("seu logim agora sera é: " + num2);
  }

};
let formulario=document.getElementsByClassName("formulario")[0]
formulario.addEventListener("keydown",function(a){
 if (a.key==="Enter") {
  enviar()
 } 
})