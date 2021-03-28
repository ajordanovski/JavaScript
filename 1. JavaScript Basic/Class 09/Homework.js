// 1. Return and print every property with their values from 23 post

document.getElementById("button").addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/posts?id=23")
        .then(response => response.json())
        .then(json => {
            if (json !== undefined && json.length > 0) {
                document.getElementById("results").innerHTML = (
                    `
                        <ul>
                            ${json.map((user , index) => {
                                return (
                                    `  
                                     <li key=${index}>
                                        userId: ${user.userId}<br>
                                        id: ${user.id}<br>
                                        title: ${user.title}<br>
                                        body: ${user.body}<br> 
                                     </li>
                                    `
                                )
                            }).join("")}
                        </ul>
                    `
                )
            }
        })
        .catch(error => {console.error(error);});
});



// 2. Show all albums that have "omnis" in their title

document.getElementById("button2").addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => response.json())
    .then(json => {
        if (json !== undefined && json.length > 0) {
            document.getElementById("results2").innerHTML = (
                `
                    <ul>
                        ${json.map((user , index) => {
                            if(user.title.indexOf("omnis") > -1){
                            return (
                                `  
                                <li key=${index}>
                                    title: ${user.title}<br>
                                </li>
                                `
                            )
                    }}).join("")}
                    </ul>
                `  
            )
        }
    })
    .catch(err => {console.error(err);});
});



// 3. Create new user

document.getElementById("create").addEventListener('click', function() {
    var name = document.getElementById("name").value;
    var userName = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;

    function createPost(name, userName, email, street, city) {
        if (name !== "" && userName !== "" && email !== "" && street !== "" && city !== "") {
            fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    userName: userName,
                    email: email,
                    street: street,
                    city: city,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
            .then(response => response.json())
            .then(createdJson => console.log("Successfuly created post", createdJson))
            .catch(error => console.error(error));
        }
    }

    createPost(name, userName, email, street, city)
});