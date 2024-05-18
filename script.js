const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const forgotPasswordButton = document.getElementById('forgotPassword');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
  document.querySelector('.sign-in-container').style.display = 'none';
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
  document.querySelector('.sign-in-container').style.display = 'block';
});

forgotPasswordButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
  document.querySelector('.sign-in-container').style.display = 'none';
  document.querySelector('.forgotten-container').style.display = 'block';
});

const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');
const forgotPasswordForm = document.getElementById('forgotPasswordForm');

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = signUpForm['name'].value;
  const email = signUpForm['email'].value;
  const password = signUpForm['password'].value;

  // Handle sign up logic here (e.g., form validation, sending data to server)
  console.log("Sign Up:", { name, email, password });
  alert("User successfully signed up!");
});

signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signInForm['emailLogin'].value;
  const password = signInForm['passwordLogin'].value;

  // Handle sign in logic here (e.g., form validation, sending data to server)
  console.log("Sign In:", { email, password });
  alert("User successfully logged in!");
  window.location.replace("home.html");
});

forgotPasswordForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = forgotPasswordForm['forgotEmail'].value;

  // Handle password reset logic here (e.g., form validation, sending data to server)
  console.log("Forgot Password:", { email });
  alert("Password reset email sent! Check your inbox.");
});

/*
//  STATISTICS

// Example JavaScript to update metrics dynamically (mock data)
function updateMetrics() {
    document.getElementById('task-completion').textContent = `${Math.floor(Math.random() * 100)}%`;
    document.getElementById('customer-satisfaction').textContent = `${Math.floor(Math.random() * 100)}%`;
    document.getElementById('workforce-efficiency').textContent = `${Math.floor(Math.random() * 100)}%`;
}

setInterval(updateMetrics, 5000); // Update metrics every 5 seconds
*/

//  Header Navigation

function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('show');
}