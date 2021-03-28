// Solution 1
let inputAge = prompt("input animal age");

let animal = {
    name: "Marko",
    kind: "Cat",
    speak: function(age){
        console.log(`${this.name} says: Hey bro!!! Im kind of ${this.kind}, i am ${age} years old.`);
    }
}

animal.speak(inputAge);


// Solution 2
// let animal2 = {
//     name: prompt("insert animal name:"),
//     kind: prompt("insert animal kind:"),
//     speak: function() {
//         console.log(`${this.name} says: Hey bro!!! Im kind of ${this.kind}`);
//     }
// }

// animal2.speak();