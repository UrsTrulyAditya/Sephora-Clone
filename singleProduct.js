let dataFromNewProduct =   JSON.parse(localStorage.getItem("storeProductData")) 

let dataforCart=JSON.parse(localStorage.getItem("cartData")) || []

dataFromNewProduct.map(function(elem,index){
    let Images = document.createElement("img")
    Images.setAttribute("src",elem.Image)

document.querySelector("h1").innerText=elem.name
document.querySelector("h2").innerText=elem.des
document.querySelector("h3").innerText="$ "+elem.price+" or 4 payments of $7.50 with Klarna"

document.querySelector("button").addEventListener("click",function(){
    cartdata(elem,index)
})


  document.querySelector("#left").append(Images)
})

function   cartdata(elem,index){
   for(let i in dataforCart){
    if(elem != dataforCart[i]){
        dataforCart.push(elem)
        document.querySelector("button").innerText="ADDED TO CART"
        localStorage.setItem("cartData",JSON.stringify(dataforCart)) 
       
    }else{
        alert("Item already in cart")
    }
       
    
   }
   
}