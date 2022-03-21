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


document.querySelector('table.list tbody').innerHTML += ` 
<tr class="message">
<td class="lines"></td>
</tr>

<tr>
<td></td>
<td> Total</td>
<td class="extract-valor"><br>
    <p class="profit">[LUCRO]</p>
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



    