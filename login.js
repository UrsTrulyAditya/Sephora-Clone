 // popup
 document.querySelector("button").addEventListener("click", function(){
    document.querySelector("#container").style.display="block";
        
      })
    
    document.querySelector("button+button").addEventListener("click", function(){
    document.querySelector("#container").style.display="none";
    })
    
    
       
     let loginfrm=JSON.parse(localStorage.getItem("signup"))||[]
    document.querySelector("form").addEventListener("submit", sumbit)
    function sumbit(){
        event.preventDefault();
        console.log("inner")
        let obj={
           mail:document.querySelector("#mail").value,
         pass:document.querySelector("#pass").value,
    
        }
        
    for(let i=0;i<loginfrm.length;i++) {
    if(loginfrm[i].email==obj.mail){
        if(loginfrm[i].password==obj.pass){
            window.location.href="https://www.sephora.com/"
        }else{
            alert("Please enter valid password")
        }
    }else{
       alert("Please enter valid email") 
    }
    }
    
    }
    
    
    function click(){
    // event.preventDefault();
        console.log("Click")
    }
    