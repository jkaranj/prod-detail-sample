const smalll = document.querySelector(".small");
const bigg = document.querySelector(".big");
var val = 1
function inc() {
    document.getElementById("numberfield").value=1 
    if(val > 0){
        val++
        document.getElementById("numberfield").value=val
    }   
    else(
        console.log("invalid quantity")
    )
}
function dec() {
    document.getElementById("numberfield").value=1 
    if(val <=0){
        val++
        document.getElementById("numberfield").value=1
    } 
    else if(val > 0){
        val--
        document.getElementById("numberfield").value=val
    }  
    else(
        console.log("invalid quantity")
    )
}

function smal() {
    smalll.style.backgroundColor="rgb(171, 226, 98)"
    bigg.style.backgroundColor="rgb(201,201,201)"
    document.getElementById("price").innerHTML="25"    
    document.getElementById("price").value=25
    document.getElementById("bigImage").src="dr1.jpg"
    // this.style.backgroundColor=green    
}
function biggg() {
    bigg.style.backgroundColor="rgb(171, 226, 98)"
    smalll.style.backgroundColor="rgb(201,201,201)"
    document.getElementById("price").innerHTML="50"
    document.getElementById("price").value=50
    document.getElementById("bigImage").src="dr1b.jpg"
    // this.style.backgroundColor=green    
}
function payy() {
    var quantt = document.getElementById("numberfield").value
    var valll = document.getElementById("price").innerHTML
    const tcostt= quantt*valll
    document.getElementById("ttlcost").innerHTML=tcostt
    console.log(tcostt)
    console.log(quantt)
    console.log(valll)
    
}