let count = document.querySelector('.count')
let add = document.querySelector('.plus')
let sub = document.querySelector('.minus')
let reset = document.querySelector('.reset')

add.addEventListener('click', function() {
 console.log('hei');
 count.innerHTML++
 document.body.style.backgroundColor = 'green'
 count.style.color = 'white'
 add.style.border = '3px solid white'
 add.style.color = 'white' 
 sub.style.border = 'none'
 background()
})

reset.addEventListener('click',() => {
 count.innerHTML = 0
 document.body.style.backgroundColor = 'aliceblue'
 count.style.color = 'rgb(65, 37, 37)'
})

sub.addEventListener('click', () => {
 count.innerHTML--
 count.style.color = 'white'
 sub.style.border = '3px solid white'
 add.style.border = 'none'
 background()
}) 


function background() {
  if(count.innerHTML < 0) {
  document.body.style.backgroundColor = 'rgb(238, 65, 65)'
 }else if (count.innerHTML > 0) {
  document.body.style.backgroundColor = 'green'
 }
}