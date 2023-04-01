function toRU(){
    document.getElementById('registration').innerText = 'Регистрация';
    document.getElementById('inputName').setAttribute('placeholder', 'Имя');
    document.getElementById('inputSurname').setAttribute('placeholder', 'Имя');
    document.getElementById('labelMale').innerText = 'Муж.';
    document.getElementById('labelFemale').innerText = 'Жен.';
    document.querySelector('div.in').style.width = '270px';
    document.getElementById('signUp').setAttribute('value', 'Зарегестрироваться');
    document.getElementById('phonenumber').setAttribute('placeholder', "+375 25 000 00 00");
}

function toEN(){
    document.getElementById('registration').innerText = 'Registration';
    document.getElementById('inputName').setAttribute('placeholder', 'Name');
    document.getElementById('inputSurname').setAttribute('placeholder', 'inputSurname');
    document.getElementById('labelMale').innerText = 'Male';
    document.getElementById('labelFemale').innerText = 'Female';
    document.querySelector('div.in').style.width = '282px';
    document.getElementById('signUp').setAttribute('value', 'Confirm');
    document.getElementById('phonenumber').setAttribute('placeholder', "+375 25 000 00 00");

}

function onload(){
    let qwerty = window.location.href.split("?")[1];
    let params = qwerty.split("&");
    for (let i in params) {
        if (params[i].split('=')[0] === 'lang'){
            if (params[i].split('=')[1] === 'EN'){
                toEN()
            }
            else {
                toRU();
            }
        }
    }
    console.log(params);
}

//onload();
toEN();