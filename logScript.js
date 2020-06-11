/*
var form = document.getElementById('form');
var password = document.getElementById('password');
form.addEventListener('submit', (e) => {
    let name = document.getElementById('name');   
    let errorElement = document.getElementById('error');
    let messages = [];
    if (name.value == '' || name.value == null){
        messages.push('Name is required');
    }
    if (password.value.length <= 6){
        messages.push('password must be longer than 6 characters');
    }
    messages.forEach((m) => {
        errorElement.innerHTML += m + '<br/>';   
    });
    if (messages.length > 0) {
        return false;
    }
    return true;
});
*/

function foo() {
    let password = document.getElementById('password');
    let name = document.getElementById('name');   
    let errorElement = document.getElementById('error');
    let messages = [];
    if (name.value == '' || name.value == null){
        messages.push('Name is required');
    }
    if (password.value.length <= 6){
        messages.push('password must be longer than 6 characters');
    }
    messages.forEach((m) => {
        errorElement.innerHTML += m + '<br/>';   
    });
    return messages.length == 0;
}