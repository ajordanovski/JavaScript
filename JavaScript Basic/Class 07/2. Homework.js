// solution 1
let inputTitle = prompt("enter book title")
let inputAuthor = prompt("enter book author")
let readingStatus = prompt("reding status true/false")

function bool (string) {
    if (string === "True") {
        return true;
    } else {
        return false;
    }
}

let book = {
    title: inputTitle,
    author: inputAuthor,
    readingStatus: bool(readingStatus),
    logger: function () {
        if(this.readingStatus){
            console.log(`Already read ${this.title} by ${this.author}.`);
        } else {
            console.log(`You still need to read ${this.title}: by ${this.author}.`)
        }
    }
}

book.logger();

// solution 2
// let book = {
//     title: "Game of Thrones",
//     author:  "George R. R. Martin",
//     readingStatus: prompt("enter yes/no"),
//     logger: function () {
//         if(this.readingStatus === "yes"){
//             console.log(`Already read ${this.title} by ${this.author}.`);
//         } else {
//             console.log(`You still need to read ${this.title}: by ${this.author}.`)
//         }
//     }
// }

// book.logger();