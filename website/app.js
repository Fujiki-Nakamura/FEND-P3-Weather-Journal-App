/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?'
const apiKey = '49b9b809e566d9d0cb35f31930cdff2e'  // 'a35994ff26de6b4ffb3943c7d1def2c8'
const zipInput = document.getElementById('zip')
const feelingsInput = document.getElementById('feelings')
const button = document.getElementById('generate')

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


const getWeather = async (url) => {
    const res = await fetch(url)
    try {
        const data = await res.json()
        return data
    } catch(e) {
        console.log("error", e)
    }
}

const postData = async (url, data={}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log("error", error)
    }
}

const updateUI = async (data) => {
    console.log('updateUI')
}

button.addEventListener('click', (event) => {
    let url = baseURL + `zip=${zipInput.value}&appid=${apiKey}`
    getWeather(url)
    .then(function(data) {
        data = { temperature: data.main.temp, date: newDate, feelings: feelingsInput.value }
        postData(url='http://localhost:3000/api', data)
        return data
    })
    .then(function(data) {
        updateUI()
    })
})
