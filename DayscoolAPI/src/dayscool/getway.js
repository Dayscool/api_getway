
const url = "http://localhost:5000/graphql";
var opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: ""
  };
var query = ``;

//Solo usar hasta poder crear usuarios desde autenticación
function createUserTest(username, mail, birthDate, career, role, name, password){
    var user = {};
    query = 
    `mutation{
        createUser(user: {
          username: "${username}",
          mail: "${mail}",
          birthDate: "${birthDate}",
          career: "${career}",
          role: "${role}",
          name: "${name}",
          password: "${password}",
        })
        {
          id
          name
          mail
        }
    }`;
    opts["body"] = JSON.stringify({ query });
    fetch(url, opts)
    .then(res => res.json())
    .then(data =>{
        console.log(data.data.createUser);
        user = data.data.createUser;
    });
    return user;    
}

function getAllUsers(){
    var userList = {};
    query = 
    `query{
        getAllUsers{
            id
            username
            mail
            birthDate
            career
            role
            name
        }
      }`;
    opts["body"] = JSON.stringify({ query });
    fetch(url, opts)
      .then(res => res.json())
      .then(data =>{
          console.log(data.data.getAllUsers);
          user = data.data.getAllUsers;
      });
    return userList;
}


function getUserById(id){
    var user = {};
    query = 
    `query{
        getUserById(id: ${id}){
            id
            username
            mail
            birthDate
            career
            role
            name
        }
    }`;
    opts["body"] = JSON.stringify({ query });
    fetch(url, opts)
      .then(res => res.json())
      .then(data =>{
          console.log(data.data.getUserById);
          user = data.data.getUserById;
      });
    return user;
}

function getUserByUsername(username){
    var user = {};
    query =`
    query{
        getUserByUsername(username: "${username}"){
            id
            username
            mail
            birthDate
            career
            role
            name
        }
      }
    `;
    opts["body"] = JSON.stringify({ query });
    fetch(url, opts)
      .then(res => res.json())
      .then(data =>{
          console.log(data.data.getUserByUsername);
          user = data.data.getUserByUsername;
      });
    return user;
};
function getUserByMail(mail){
    var user = {};
    query =`
    query{
        getUserByMail(mail: "${mail}"){
            id
            username
            mail
            birthDate
            career
            role
            name
        }
      }
    `;
    opts["body"] = JSON.stringify({ query });
    fetch(url, opts)
      .then(res => res.json())
      .then(data =>{
          console.log(data.data.getUserByMail);
          user = data.data.getUserByMail;
      });
    return user;
};
function updateUser(id,username, mail, birthDate, career, role, name, password){
    var user = {};
    query = ` mutation{
        updateUser(id:${id}, 
            user:{
                username: "${username}",
                mail: "${mail}",
                birthDate: "${birthDate}",
                career: "${career}",
                role: "${role}",
                name: "${name}",
                password: "${password}"
        }){
            id
            username
            mail
            birthDate
            career
            role
            name
        }
      }`;
      opts["body"] = JSON.stringify({ query });
      fetch(url, opts)
        .then(res => res.json())
        .then(data =>{
            console.log(data.data.updateUser);
            user = data.data.updateUser;
        });
      return user;
};
function deleteUser(id){
    query = `
    mutation{
        deleteUser(id:${id})  
    }
    `;
    opts["body"] = JSON.stringify({ query });
      fetch(url, opts)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        });
};



//Pruebas
document.getElementById("createUserTest").onclick = function(){
    createUserTest("prueba104", "prueba104@mail.com", "1998-11-09", "engineering", "student", "prueba", "1234");
}
document.getElementById("getAllUsers").onclick = function(){
    getAllUsers();
}
document.getElementById("getUserById").onclick = function(){
    getUserById(1);
}
document.getElementById("getUserByMail").onclick = function(){
    getUserByMail("prueba@mail.com");
}
document.getElementById("getUserByUsername").onclick = function(){
    getUserByUsername("prueba");
}
document.getElementById("updateUser").onclick = function(){
    updateUser(1, "pruebaeditada", "pruebaeditada@mail.com", "1997-11-09", "eng", "professor", "editado", "12345");
}
document.getElementById("deleteUser").onclick = function(){
    deleteUser(27);
}