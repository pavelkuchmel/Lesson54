let login = document.getElementById('login');
let signUp = document.getElementById('signUp');

let formSignUp = document.getElementById('formSignUp');
let formLogin = document.getElementById('formLogin');

let langEN = document.getElementById('langEN');
let langRU = document.getElementById('langRU');

function toRU(){
    document.getElementById('login').innerText = "Логин";
    document.getElementById('signUp').innerText = "Регистрация";
    document.querySelector('div.in1').style.minWidth = '173px';
    document.getElementById('inputLogin').setAttribute('placeholder', 'Логин');
    document.getElementById('inputPassword').setAttribute('placeholder', 'Пароль');
    document.getElementById('txtLogin').setAttribute('placeholder', 'Логин');
    document.getElementById('txtPassword').setAttribute('placeholder', 'Пароль');
    document.getElementById('optMinsk').innerText = "Минск";
    document.getElementById('optNewYork').innerText = 'Нью-Йорк';
    document.getElementById('optWroclaw').innerText = 'Вроцлав';
    document.getElementById('city').innerText = 'Город';
    document.getElementById('btnSignUp').setAttribute('value', 'Регистрация');
    document.getElementById('btnLogin').setAttribute('value', 'Войти');

}

function toEN(){
    document.getElementById('login').innerText = "Login";
    document.getElementById('signUp').innerText = "SignUp";
    document.querySelector('div.in1').style.minWidth = '135px';
    document.getElementById('inputLogin').setAttribute('placeholder', 'Login');
    document.getElementById('inputPassword').setAttribute('placeholder', 'Passwrod');
    document.getElementById('txtLogin').setAttribute('placeholder', 'Login');
    document.getElementById('txtPassword').setAttribute('placeholder', 'Password');
    document.getElementById('optMinsk').innerText = "Minsk";
    document.getElementById('optNewYork').innerText = 'NewYork';
    document.getElementById('optWroclaw').innerText = 'Wroclaw';
    document.getElementById('city').innerText = 'City';
    document.getElementById('btnSignUp').setAttribute('value', 'Sign Up');
    document.getElementById('btnLogin').setAttribute('value', 'Login');
}

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

langEN.addEventListener('click', function (){
    langEN.style.opacity = '1';
    langRU.style.opacity = '0.5';
    toEN();
    document.getElementById('enterLang').setAttribute('value', 'EN');
    document.getElementById('signLang').setAttribute('value', 'EN');
});

langRU.addEventListener('click', function (){
    langRU.style.opacity = '1';
    langEN.style.opacity = '0.5';
    toRU();
    document.getElementById('enterLang').setAttribute('value', 'RU');
    document.getElementById('signLang').setAttribute('value', 'RU');
});