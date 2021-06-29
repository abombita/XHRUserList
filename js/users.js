
// On page load, pull the users endpoint from https://jsonplaceholder.typicode.com/users using XHR
// Generate the table of users for #usersTable (include a button/link in the fourth column to let you view an individual record)
// If a button/link in the table is clicked, populate #userView with the full details of the user.
// (bonus points if you make it a nice form as if the user was editable)

let users = [];

let xhr = new XMLHttpRequest();
xhr.onload = function (){
    users = JSON.parse(xhr.responseText);
    console.log(results)

    for (let i = 0; i < users.length; i++){
        let userId = users[i].id;
        let username = users[i].name;
        let useremail = users[i].email;

        let populate = `<tr><td>"${userId}"</td><td>"${username}"</td><td>"${useremail}"</td> <td><button type= "button">View</button></td></tr>`;

        };
    document.getElementById('userList').innerHTML += populate;

};
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    xhr.send();


