function Data_Nascimento() {
    let meses = document.getElementsByClassName('meses')
    let option_day = document.getElementById('option-day')
    let option_year = document.getElementById('option-year')

    for (let i = 0; i <= 31; i++) {
        let dia = document.createElement('option')
        dia.text = i
        option_day.appendChild(dia)
    }



}