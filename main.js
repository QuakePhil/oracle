let oracle = new Oracle(false)

let wrong = 0
let total = 0

function reloadoracle() {
  document.getElementById('guesses').innerHTML = ''
  document.getElementById('results').innerHTML = ''
  wrong = total = 0
  oracle = new Oracle(this.checked)
}

function mashkeyboard(event) {
  if (event.key != 'd' && event.key != 'f') {
    return
  }
  let predicted = oracle.predict()
  let observed = event.key

  let div = document.createElement('div')
  if (observed != predicted) {
    div.style.backgroundColor = 'red'
    wrong++
  }
  total++
  div.append(document.createTextNode('predicted: ' + predicted + ', observed: ' + observed))
  document.getElementById('guesses').prepend(div)

  let accuracy = Math.floor((total - wrong) / total * 100.0)
  document.getElementById('results').innerHTML =
   '<p>Accuracy so far: ' + accuracy + '% (Total: ' + total + ', wrong: ' + wrong + ')</p>'

  oracle.remember(observed)
}

window.onload = function() {
  window.addEventListener('keypress', mashkeyboard)
  document.getElementById('train').addEventListener('change', reloadoracle)
}
