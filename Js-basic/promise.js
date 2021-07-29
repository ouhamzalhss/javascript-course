
 function printString(){
    console.log("Tom"); 
    setTimeout(() => { console.log("Jacob"); }, 1000); 
   console.log("Mark")
 }
 
 printString();


 const myFirstPromise = new Promise((resolve, reject) => { 
    const condition = true;   
    if(condition) {
         setTimeout(function(){
             resolve("Promise is resolved!"); // fulfilled
        }, 300);
    } else {    
        reject('Promise is rejected!');  
    }
});

myFirstPromise.then(data=> console.log(data))
                .catch(error=> console.log(error));
 
