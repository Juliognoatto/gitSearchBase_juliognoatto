// const { response } = require("express");

const buttonElement = document.getElementById("meuBotao");




buttonElement.addEventListener("click", async () => {
  
  const inputElement = document.getElementById("meuInput");
  const username = inputElement.value;

  async function fetchUserData(username) {
    const user = await fetch(`https://api.github.com/users/${username}`, {
      method: 'GET'
    })
    .then((response) => {
      if(response.ok && username === inputElement.value) {
        window.location.href = "../src/pages/profile.html";
        return response.json()
      } else {
        window.location.href = "../src/pages/error.html";
        throw new Error('Erro ao buscar usuário')
      }
    })
    .catch(erro => console.log(erro))
    
    console.log(user)
    };
  
  fetchUserData(username)
})




// async function fetchUserData(username) {
//   const user = await fetch(`https://api.github.com/users?name=${username}`, {
//     method: 'GET'
//   })
//   .then((response) => {
//     if(response.ok) {
//       return response.json()
//     }else {
//       throw new Error('Nome de usuário inválido ou não encontrado.')
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });
//   return user;
// }


// const user = await fetchUserData()
// fetchUserData()

// console.log(user)





