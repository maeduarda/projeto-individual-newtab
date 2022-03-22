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
total = 0

var conv = Number(extrato.valor)
for (let i of extrato) {
        total += parseFloat(i.valor)
      
}

console.log(total)


document.querySelector('table.list tbody').innerHTML += ` 
<tr class="message">
<td class="lines"></td>
</tr>

<tr>
<td></td>
<td> Total</td>
<td class="extract-valor">R$ ${total}<br>
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



    