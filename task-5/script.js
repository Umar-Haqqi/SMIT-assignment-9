let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let count = document.getElementById("count");
let val = 0

plus.addEventListener("click", ()=>{
    val += 1
    count.innerHTML = val
})

minus.addEventListener("click", ()=>{
    val -= 1
    count.innerHTML = val
})