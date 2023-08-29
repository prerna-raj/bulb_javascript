// var a= document.querySelector("h1")

// a.addEventListener("click" , function(){
//     a.innerHTML="mai toh toot gaya"
//     a.style.color="red"
//     a.style.backgroundColor="black"
// })


var bulb = document.querySelector(".box")
var btn = document.querySelector("button")

var flag=0;
btn.addEventListener("click", function(){
    if(flag==0){
        bulb.style.backgroundColor="yellow"
        console.log("clicked")
        flag=1      
    }
    else{
        bulb.style.backgroundColor="transparent"
        console.log("again clicked")
        flag=0
    }
})
// var p= document.querySelectorAll("h1")
// console.log(p)
