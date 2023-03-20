const form = document.querySelector(".signup form");
const errorText = document.querySelector(".error-text");

const pw = document.querySelector(".confirmPassword")
const icon = document.querySelector("#icon")

  icon.addEventListener("click",()=>{
    if(pw.type === "password"){
      pw.type = "text"
    }else{
      pw.type = "password"
    }
  })


form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get Values from the inputField
  const firstName = document.querySelector('.fname').value;
  const lastName = document.querySelector('.lname').value;
  const email = document.querySelector('.email').value;
  let photo = document.querySelector('.photo').files[0];
  const password = document.querySelector('.password').value;
  const passwordConfirm = document.querySelector('.confirmPassword').value;

  let formData;

  formData = new FormData();
  formData.append("firstName", firstName);
  formData.append("lastName", lastName);
  formData.append("email", email);
  formData.append("photo", photo);
  formData.append("password", password);
  formData.append("passwordConfirm", passwordConfirm);
  

  const requestOptions = {
    method: 'POST',
    body: formData,
    redirect: 'follow'
  };

  fetch("/api/v1/users/signup", requestOptions)
  .then(response => response.json())
  .then(result => {
    if(result.status === "fail"){
      errorText.style.display = "block"
      errorText.textContent = `${result.message}`
      setTimeout(()=>{
        errorText.style.display = "none"
      },5000)
    } else {
      localStorage.setItem("user", JSON.stringify(result))
      window.location.href = '../users.html'
    }
  })
  .catch(err => err);

  form.reset();

  

});
