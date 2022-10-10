'use strict'

window.addEventListener('scroll', () => {
   let scrollDistance =  `${window.scrollY}`
   document.querySelector('.scroll-items__item img').style.top = `${-scrollDistance / 5}px`
   document.querySelector('.motivation-block__decor').style.left = `${scrollDistance}px`
})

setTimeout(() => {
   setTimeout(() => {
       document.querySelectorAll('.animation-second').forEach(item => {
           item.classList.add('animation')
       })
   }, 500)
   document.querySelectorAll('.animation-first').forEach(item => {
       item.classList.add('animation')
   })
}, 500)

function onEntry(entry) {
   let scrollDistance = window.scrollY
   entry.forEach(change => {
   if (change.isIntersecting && scrollDistance >= 0) {
       change.target.classList.add('animation-item');
   } else if (change.isIntersecting && scrollDistance < window.clientHeight) {
       change.target.classList.remove('animation-item');
   }
   });
}
let options = { threshold: [0.2] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.item-animation');
for (let elm of elements) {
   observer.observe(elm);
}


// console.log(document.querySelector('.block-one').style.left = `${scrollDistance / 100}px`)
// +width.slice(0, width.length - 2)


// console.log(scrollDistance)
// if(scrollDistance > 0) {
//    document.querySelector('.block-one').classList.add('animation')
// }
// document.querySelector('.block-one').style.left = scrollDistance

// playerX = 0
// playerY = 0 
// let player = document.createElement('div')
// player.id = 'player'
// field.appendChild(player)
// player.style.top = playerY + 'px'
// player.style.left = playerX + 'px'


