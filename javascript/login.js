const form = document.querySelector(".login form"),
errorText = form.querySelector(".error-text");


form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get Values from the inputField
  const email = document.querySelector('.email').value;
  const password = document.querySelector('.password').value;

  
  
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const formData = JSON.stringify({
    "email": email,
    "password": password
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formData,
    redirect: 'follow'
  };

  fetch("/api/v1/users/login", requestOptions)
  .then(response => response.json())
  .then(result => {
    if(result.status === "fail"){
      errorText.style.display = "block"
      errorText.textContent = `${result.message}`
      setTimeout(()=>{
        errorText.style.display = "none"
      },3000)
    } else {
      localStorage.setItem("user", JSON.stringify(result))
      window.location.href = '../users.html'
    }
  })
  .catch(err => err);

  form.reset();
});
