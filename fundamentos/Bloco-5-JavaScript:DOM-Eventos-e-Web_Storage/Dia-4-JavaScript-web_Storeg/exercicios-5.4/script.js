window.onload = function () { //como vamos interagir com o dom é importante que a gente so trabalhe depois que tiver-mos certeza que a página foi carregada, por isso usamos o window.
    let select = document.querySelector('select')
    select.addEventListener('change', function() {
        let selected = select.selectedOptions[0];
    document.body.style.backgroundColor = selected.value
        
    localStorage.setItem('garda-background', selected.value)
    })

    let inputFontSize = document.querySelector('input[name="font-size"]')
    inputFontSize.addEventListener('change', function() {
        let p = document.querySelector('p');
        p.style.fontSize = `${inputFontSize.value}px`;

        localStorage.setItem('garda-font-size', `${inputFontSize.value}px`)
    })

    let savedBackground = localStorage.getItem('garda-background')
    document.body.style.backgroundColor = savedBackground;

    let savedFontSize = localStorage.getItem('garda-font-size')
    let p = document.querySelector('p')
    p.style.fontSize = savedFontSize;
}