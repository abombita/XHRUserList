
// On page load, pull the users endpoint from https://jsonplaceholder.typicode.com/users using XHR
// Generate the table of users for #usersTable (include a button/link in the fourth column to let you view an individual record)
// If a button/link in the table is clicked, populate #userView with the full details of the user.
// (bonus points if you make it a nice form as if the user was editable)

    let users = [];
    let userView = [];

    let xhr = new XMLHttpRequest();
    xhr.onload = function (){
        users = JSON.parse(xhr.responseText);
        console.log(users)

        for (let i = 0; i < users.length; i++){
            let userId = users[i].id;
            let username = users[i].name;
            let useremail = users[i].email;

            let populate = `<tr><td>"${userId}"</td><td>"${username}"</td><td>"${useremail}"</td> <td><button id="${userId}" type="button">View</button></td></tr>`;

            document.getElementById('userList').innerHTML += populate;
            };

    };
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    xhr.send();





    document.getElementById('userList').addEventListener('click', function(event){
        if(event.target.nodeName == 'BUTTON' ){
            console.log(event.target.id);
            let getId = event.target.id;

            let secondXhr = new XMLHttpRequest();
            secondXhr.onload = function(){
                userView = JSON.parse(secondXhr.responseText);
                console.log(userView)
    
                let populate = `<p>${userView}</p>`
    
                document.getElementById('userView').innerHTML += populate;
            };
    
            secondXhr.open('GET',`https://jsonplaceholder.typicode.com/users/${getId}`, true);
            secondXhr.send();
        }
    });

    //5. When clicked, that button should call https://jsonplaceholder.typicode.com/users/${user_id} and populate #userView with all the details of that user.
