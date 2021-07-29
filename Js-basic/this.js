// const person = {
//     name: "ouhamza",
//     age: 29,
//     languages: ["English","Arabic"],
//     toString(){
//         this.languages.forEach((lang)=>{
//             console.log(`Name: ${this.name},  Age: ${lang}`)
//         });
        
//     }
// }

// person.toString();

var myVar = 100;

function WhoIsThis() {
    var myVar = 200;

    alert("myVar = " + myVar); // 200
    alert("this.myVar = " + this.myVar); // 100
}

WhoIsThis(); // inferred as window.WhoIsThis()