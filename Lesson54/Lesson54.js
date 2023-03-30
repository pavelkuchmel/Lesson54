let login = document.getElementById('login');
let signUp = document.getElementById('signUp');

let formSignUp = document.getElementById('formSignUp');
let formLogin = document.getElementById('formLogin');

formSignUp.hidden = true;

login.addEventListener('click', function (){
    formSignUp.hidden = true;
    formLogin.hidden = false;
});

signUp.addEventListener('click', function (){
    formSignUp.hidden = false;
    formLogin.hidden = true;
})
