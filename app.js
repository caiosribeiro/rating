let selecionado
function mudarCor(op){
  var op1 = document.getElementById('op1')
  var op2 = document.getElementById('op2')
  var op3 = document.getElementById('op3')
  var op4 = document.getElementById('op4')
  var op5 = document.getElementById('op5')

  if(op == 1){
    op1.style.background = '#8597ad'
    op2.style.background = '#2d3743'
    op3.style.background = '#2d3743'
    op4.style.background = '#2d3743'
    op5.style.background = '#2d3743'
    selecionado = 1
  }
   else if(op == 2){
    op1.style.background = '#2d3743'
    op2.style.background = '#8597ad'
    op3.style.background = '#2d3743'
    op4.style.background = '#2d3743'
    op5.style.background = '#2d3743'
    selecionado = 2    
  }
  else if(op == 3){
    op1.style.background = '#2d3743'
    op2.style.background = '#2d3743'
    op3.style.background = '#8597ad'
    op4.style.background = '#2d3743'
    op5.style.background = '#2d3743'
    selecionado = 3
  }
  else if(op == 4){
    op1.style.background = '#2d3743'
    op2.style.background = '#2d3743'
    op3.style.background = '#2d3743'
    op4.style.background = '#8597ad'
    op5.style.background = '#2d3743'
    selecionado = 4
  }
  else if(op == 5){
    op1.style.background = '#2d3743'
    op2.style.background = '#2d3743'
    op3.style.background = '#2d3743'
    op4.style.background = '#2d3743'
    op5.style.background = '#8597ad'
    selecionado = 5
  }
  
}

function mudarTexto(){  
  var imagem = document.getElementById('estrela')
  imagem.src="images/illustration-thank-you.svg"
  imagem.style.border = '1px solid #252d37'
  imagem.style.borderRadius = '0px'
  imagem.style.background = '#252d37'
  imagem.style.marginLeft = '22.5%'


  var titulo = document.getElementById('titulo')
  titulo.innerHTML = 'Thank you!'
  titulo.style.textAlign = 'center'

  var legenda = document.getElementById('legenda')
  legenda.style.color = '#fb7413'
  legenda.style.background = '#2d3743'
  legenda.style.width = '55%'
  legenda.style.border = '1px solid #2d3743'
  legenda.style.borderRadius = '20px'
  legenda.style.marginLeft = '22.5%'

  var texto = document.getElementById('texto')
  texto.innerHTML ="We appreciate you taking the time to give a rating. If you ever need more support,don’t hesitate to get in touch!"
  texto.style.textAlign = "center"
  texto.style.paddingBottom = '10%'
   
  if(selecionado == 1) {
    legenda.innerHTML = 'You selected 1 out of 5'
  }
  else if(selecionado == 2) {
    legenda.innerHTML = 'You selected 2 out of 5'
  }
  else if(selecionado == 3) {
    legenda.innerHTML = 'You selected 3 out of 5'
  }
  else if(selecionado == 4) {
    legenda.innerHTML = 'You selected 4 out of 5'
  }
  else if(selecionado == 5) {
    legenda.innerHTML = 'You selected 5 out of 5'
  }
  var remover = document.querySelectorAll('.remover')
  remover[0].remove()
  remover[1].remove()
}
