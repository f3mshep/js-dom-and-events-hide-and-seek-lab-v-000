function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('html body main#app div#nested div div div div.target')
}

function deepestChild(){
  return document.querySelector('html body main#app div#grand-node div div div div')
}

function increaseRankBy(n){
  const rankedItems = document.querySelectorAll('html body main#app ul.ranked-list li')
  for (const item of rankedItems) {
    item.innerHTML = parseInt(item.innerHTML) + n
  }
}