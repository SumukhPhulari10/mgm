       // var a = 5
        //let b=7
        //const e = 4
        //console.log(a)
        //console.log(b)
        //console.log(e)

    //    let age= 15
      //  if(age>=18){
        //    console.log("you are not adult");
            
   //     }
     //   else{
       //     console.log("nikal bacche :)" );
            
     
       //}
       //const greet = (name) => {
        //console.log("Hello," + name);
        
       //};
       // greet("sumukh");

       //  make a function which accepts int and check if it is multiple of 5 if yes then give table 


    //    let n;
    //    for(i=0;i<=n;i++)
    //    {
    //     if(n%5==0){
    //         console.log("the no is multiple f 5");
            
    //     }
    // //    }
    //  function greet(value){
    //     if(value%5==0){
    //         for (let i=1;i<=10;i++){
    //             console.log(i*value);
                
    //         }
    //     }
    //     else{
    //         console.log(not.multilple);
            
    //     }
    //  }
    //  greet(15);

// document.getElementById("title").innerHTML = "New Title";
// const a = document.getElementById("myDIV");
//const button = document.querySelector(".checked");
//console.log(button);

var list = document.querySelector("ul");

list.addEventListener(
    "click",
    function(ev) {
        if(ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
        }
    },
        false
        
    
);