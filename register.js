const auth = firebase.auth();

document.getElementById("register-form").addEventListener("submit", (e) => {
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      message.textContent = "נרשמת בהצלחה!";
      console.log("נוצר משתמש:", userCredential.user);
    })
    .catch((error) => {
      console.error(error);
      message.textContent = "שגיאה: " + error.message;
    });
});
