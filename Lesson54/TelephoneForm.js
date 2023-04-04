function toRU(){
    document.getElementById('b').innerText = 'Имя: '
    document.getElementById('name').setAttribute('placeholder', 'Имя');
    document.getElementById('spanPhoneNumber').innerText = 'Номер телефона: ';
    document.getElementById('spanPhoneType').innerText = ' Тип номера телефона: ';
    document.getElementById('ph').setAttribute('placeholder', 'Введите номер телефона');
    document.getElementById('spanPriority').innerText = 'Приоритет: ';
    document.getElementById('submit').setAttribute('value', 'Сохранить');
    document.getElementById('btnOneMorePhone').setAttribute('value', 'Добавить номер');
    document.getElementsByTagName('option')[0].innerText = 'Мобильный';
    document.getElementsByTagName('option')[1].innerText = 'Домашний';
    document.getElementsByTagName('option')[2].innerText = 'Рабочий';
}

function toEN(){
    document.getElementById('b').innerText = 'Name: '
    document.getElementById('name').setAttribute('placeholder', 'Name');
    document.getElementById('spanPhoneNumber').innerText = 'Phone number: ';
    document.getElementById('spanPhoneType').innerText = ' Phone type: ';
    document.getElementById('ph').setAttribute('placeholder', 'Enter phone number');
    document.getElementById('spanPriority').innerText = 'Priority: ';
    document.getElementById('submit').setAttribute('value', 'Save');
    document.getElementById('btnOneMorePhone').setAttribute('value', 'One more phone');
    document.getElementsByTagName('option')[0].innerText = 'Cellular';
    document.getElementsByTagName('option')[1].innerText = 'Home';
    document.getElementsByTagName('option')[2].innerText = 'Work';
}

toEN();

document.getElementById('btnOneMorePhone').addEventListener('click', function (event){

});

