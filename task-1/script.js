// for(let i = 0; i < 4; i++){
//     let img = document.getElementsByClassName('pic')[i]
//     console.log(img);
//     img.addEventListener('click', ()=>{
//         alert('Thanks for buys this product')
//     })
// }

const images = document.querySelectorAll('.pic')

images.forEach(img => {
    img.addEventListener('click', () => alert("thank you for buying this product"))
})