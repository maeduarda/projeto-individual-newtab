var extratoRaw = localStorage.getItem('extrato') 
if(extratoRaw != null) {
    var extrato = JSON.parse(extratoRaw)
} else {
    var extrato = [];
}
 
function desenhaTabela() {
  linhasExistentes = [...document.querySelectorAll('table.list tbody .dinamic-content')];
  linhasExistentes.forEach((element) => {
      element.remove()
      window.location.href = "index.html" 
  }); 

  if(extrato.length > 0) {
    document.getElementById('msg').style.display = "none";
} 
 
  for (info in extrato){
    document.querySelector('table.list tbody').innerHTML += `
    <tr class="dinamic-content">
        <td>${(extrato[info].tipo_transacao == 'compra' ? '-' : '+')}</td>
        <td>${extrato[info].mercadoria}</td>
        <td> R$ ${extrato[info].valor}</td>
    </tr>`
   };

 
  
}
desenhaTabela()

// calculo do valor total 
var total = 0
for (var i of extrato) {
        if(i.tipo_transacao == 'compra') {
            total -= parseFloat(i.valor.replace(',', '.'))
             var dinheiro = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}); 
        } else if(i.tipo_transacao == 'venda') {
            total += parseFloat(i.valor.replace(',', '.'))
           var dinheiro = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}); 
        }
}


document.querySelector('table.list tbody').innerHTML += ` 
<tr class="message">
<td class="lines"></td>
</tr>
<tr class="total">
<td></td>
<td> Total</td>
<td class="extract-valor">${dinheiro == undefined ?  '0,00' : dinheiro}<br>
    <p class="profit">${total > 0 ? "[LUCRO]": "[PREJUÍZO]"}</p>
</td> 
</tr>` 



//limpa dados
function deleteUser() {
    var confirmacao = confirm('Confirme para limpar os dados')
    if(confirmacao){
        extrato.splice({info});
    } 

    desenhaTabela();
    localStorage.setItem('extrato', JSON.stringify(extrato)) 
}



    