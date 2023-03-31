let login = document.getElementById('login');
let signUp = document.getElementById('signUp');

let formSignUp = document.getElementById('formSignUp');
let formLogin = document.getElementById('formLogin');

formSignUp.hidden = true;

login.addEventListener('click', function (){
    formSignUp.hidden = true;
    formLogin.hidden = false;
    signUp.style.opacity = '0.5';
    login.style.opacity = '1.0';

    console.log('login click');
});

signUp.addEventListener('click', function (){
    formSignUp.hidden = false;
    formLogin.hidden = true;
    signUp.style.opacity = '1';
    login.style.opacity = '0.5';

    console.log('signUp click');
});
