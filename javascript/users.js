// const { callbackPromise } = require("nodemailer/lib/shared");

const searchBar = document.querySelector(".search input"),
searchIcon = document.querySelector(".search button"),
usersList = document.querySelector(".users-list");
const logout = document.querySelector(".logout")
console.log(logout)
searchIcon.onclick = ()=>{
  searchBar.classList.toggle("show");
  searchIcon.classList.toggle("active");
  searchBar.focus();
  if(searchBar.classList.contains("active")){
    searchBar.value = "";
    searchBar.classList.remove("active");
  }
}

// Deleting user from local storage and redirect to login page
logout.addEventListener("click", ()=>{
  localStorage.removeItem("user")
  window.location.href = '../login.html'
})

fetch("/api/v1/users/")
  .then(response => response.json())
  .then(result => {
  console.log(result)  
  })
  .catch(error => console.log('error', error));

// searchBar.onkeyup = ()=>{
//   let searchTerm = searchBar.value; 
//   if(searchTerm != ""){
//     searchBar.classList.add("active");
//   }else{
//     searchBar.classList.remove("active");
//   }
//   let xhr = new XMLHttpRequest();
//   xhr.open("POST", "php/search.php", true);
//   xhr.onload = ()=>{
//     if(xhr.readyState === XMLHttpRequest.DONE){
//         if(xhr.status === 200){
//           let data = xhr.response;
//           usersList.innerHTML = data;
//         }
//     }
//   }
//   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   xhr.send("searchTerm=" + searchTerm);
// }

// setInterval(() =>{
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", "php/users.php", true);
//   xhr.onload = ()=>{
//     if(xhr.readyState === XMLHttpRequest.DONE){
//         if(xhr.status === 200){
//           let data = xhr.response;
//           if(!searchBar.classList.contains("active")){
//             usersList.innerHTML = data;
//           }
//         }
//     }
//   }
//   xhr.send();
// }, 500);


