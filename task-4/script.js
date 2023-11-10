let img = document.getElementsByTagName('img')[0];
img.addEventListener('mouseover', function(){
    img.src = 'https://images.unsplash.com/photo-1698609552233-12df35c55ecc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8'

})

img.addEventListener('mouseout', function(){
    img.src = 'https://images.unsplash.com/photo-1696519668803-05212f0bb237?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8'
})