// import gsap from 'gsap';
 

const Bag = document.getElementById('pear_b') as HTMLButtonElement

Bag.addEventListener('dblclick', function(event) {

    event.preventDefault();
},{passive: false});

// Bag.addEventListener( 'click' , () => {

//     gsap.to(Bag,  {
//         duration:0.4,
//         skuewX: 30,
//         rotation: 2, 
//         ease: "elastic.out(1, 0.3)"
//     })
// })
