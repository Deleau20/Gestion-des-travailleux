const signUpButton = document.getElementById('signUp');
            const signInButton = document.getElementById('signIn');
            const container = document.getElementById('container');
           
            signUpButton.addEventListener('click', () => {
                container.classList.add("right-panel-active");
            });
           
            signInButton.addEventListener('click', () => {
                container.classList.remove("right-panel-active");
            });

            // Récupérer les champs du formulaire
const emailInput = document.querySelector('#container .sign-up-container input[type="email"]');
const passwordInput = document.querySelector('#container .sign-up-container input[type="password"]');

// Ajouter un événement d'écoute sur le clic du bouton "S'inscrire"
document.querySelector('#container .sign-up-container button').addEventListener('click', function() {
  // Enregistrer l'email et le mot de passe dans le localStorage
  localStorage.setItem('email', emailInput.value);
  localStorage.setItem('password', passwordInput.value);
});

// Récupérer les champs du formulaire
const loginEmailInput = document.querySelector('#container .sign-in-container input[type="email"]');
const loginPasswordInput = document.querySelector('#container .sign-in-container input[type="password"]');

// Ajouter un événement d'écoute sur le clic du bouton "Se connecter"
document.querySelector('#container .sign-in-container button').addEventListener('click', function() {
  // Enregistrer l'email et le mot de passe dans le localStorage
  localStorage.setItem('loginEmail', loginEmailInput.value);
  localStorage.setItem('loginPassword', loginPasswordInput.value);
});

// Récupérer l'email et le mot de passe stockés dans le localStorage
const email = localStorage.getItem('email');
const password = localStorage.getItem('password');

// Copier l'email et le mot de passe dans le sessionStorage
sessionStorage.setItem('email', email);
sessionStorage.setItem('password', password);

