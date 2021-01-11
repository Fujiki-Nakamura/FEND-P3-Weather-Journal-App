const button = document.getElementById('generate')

const zip = document.getElementById('zip')
const feelings = document.getElementById('feelings')

const date = document.getElementById('date')
const temp = document.getElementById('temp')
const content = document.getElementById('content')

const url = ''
const APIKey = ''

let d = new Date()
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear()


const fetchWeather = async (baseURL, zip, apiKey) => {
    try {
        const response = await fetch(`${baseURL}?zip=${zip},us&units=metric%APPID=${apiKey}`, )
        const result = await response.json()
        const {
            main: {temp},
        } = result
        return temp
    } catch (e) {
        throw e
    } 
}


const saveData = async (path, data) => {
    try {
        await fetch(path, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    } catch(e) { throw e }
}

const updateUI = async (temperature, newDate, feelings) => {
    date.innerText = newDate
    temp.innerText = `${temperature} deg`
    content.innerText = feelings
}

button.addEventListener('click', () => {
    fetchWeather(url, zip.value, APIKey)
    .then(temp => {
        return {date: newDate, temp, content: feelings.value }
    })
    .then(data => {
        saveData('/api/projectdata', data)
        return data
    })
    .then(({temp, date, content}) => updateUI(temp, date, content))
    .catch(e => { console.log(e)} )
})
