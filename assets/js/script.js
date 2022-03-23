//menu mobile
var btn = document.getElementById('mobile-btn')

function btnMenu() {
    var nav = document.getElementById('nav')
    nav.classList.toggle('active');  
}


// impede que a página seja recarregada
window.onload = function () {
    document.querySelector('form')
        .addEventListener('submit', event => {
            event.preventDefault()
        });

        
};

function validarForm(event) {
    //validação do formulário
    var mercadoria = document.getElementById('name-merc');
    var labelNome = document.getElementById('label-name');


    var transacao = document.getElementById('type-trans');
    var labelTransacao = document.getElementById('label-type-trans');


    var valor = document.getElementById('value-trans');
    var labelValor = document.getElementById('label-value');
   
    if (transacao.value == 0 || transacao.value == '') {
        labelTransacao.setAttribute('style', 'color: red')
        labelTransacao.innerHTML = '<strong>Tipo de transação: *este campo não pode estar vazio </strong>'
        transacao.focus();
        return false
    } else {
        labelTransacao.setAttribute('style', 'color: black')
        labelTransacao.innerHTML = 'Tipo de transação:'

    }

    if (mercadoria.value == '') {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = '<strong>Nome da mercadoria: *este campo não pode estar vazio </strong>'
        mercadoria.focus()
        return false
    } else {
        labelNome.setAttribute('style', 'color: black')
        labelNome.innerHTML = 'Nome da mercadoria:'

    }

    if(valor.value == '') {
        labelValor.setAttribute('style', 'color: red')
        labelValor.innerHTML = '<strong>Valor: *este campo não pode estar vazio </strong>'
        valor.focus();
        return false
    } else {
        labelValor.setAttribute('style', 'color: black')
        labelValor.innerHTML = 'Valor:'
    }

    // cadastra novos itens 
    var extratoRaw = localStorage.getItem('extrato') 
    if(extratoRaw != null) {
        var extrato = JSON.parse(extratoRaw)
    } else {
        var extrato = [];
    }

    extrato.push({
        tipo_transacao: event.target.elements['type-trans'].value,
        mercadoria: event.target.elements['name-merc'].value,
        valor: event.target.elements['value-trans'].value
    })

    localStorage.setItem('extrato', JSON.stringify(extrato))
    window.location.href = 'index.html'
}

//mascara do input de valor
function formatarMoeda() {
    var elemento = document.getElementById('value-trans');
    var valor = elemento.value;

    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    elemento.value = valor;
    if(valor == 'NaN') elemento.value = '';
}




  