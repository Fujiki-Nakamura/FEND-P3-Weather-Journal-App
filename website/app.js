/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const button = document.getElementById('generate')
function send () {
    console.log('send')
}
button.addEventListener('click', (event) => { send() })
