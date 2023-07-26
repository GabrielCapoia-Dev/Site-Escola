let meses = document.getElementsByClassName('meses')
let option_day = document.getElementById('option-day')
let option_year = document.getElementById('option-year')

function For_Dia() {
    for (let i = 1; i <= 31; i++) {
       //console.log(i)
        let dia = document.createElement('option')
        dia.innerHTML = i
        option_day.appendChild(dia)
    }
}

function For_Ano() {
    for (let i = 2023; i >= 1923; i--) {
        //console.log(i)
        let ano = document.createElement('option')
        ano.innerHTML = i
        option_year.appendChild(ano)
    }
}
function Validar(){
    var dia = document.getElementById("option_day");
    var mes = document.getElementById("meses");
    var ano = document.getElementById("option_year");

    switch(mes.innerText){
     case "Janiero": case "Março": case "Maio": case "Julho": 
     case "Agosto": case "Outubro": case "Dezembro":
      if(dia <= 31)
       console.log = "Data válida";
      else
      console.log = "Inválido (mes com mais de 31 dias)";
      break ;
     case "Abriel": case "Junho":
     case "Setembro": case "Novembro":
      if(dia <= 30)
      console.log = "Data válida";
      else
      console.log = "Inválido (mes com mais de 30 dias)";
      break ;
     case "Fevereiro":
      if( (ano%400 == 0) || (ano%4==0 && ano%100!=0) )
       if( dia <= 29)
       console.log = "Data válida";
       else
       console.log = "Inválido (mes com mais de 29 dias)";
      else
       if( dia <= 28)
       console.log = "Data válida";
       else
       console.log = "Inválido (mes com mais de 28 dias)";
    }
}