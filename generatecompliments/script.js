let currentCategory = 'general'
let userName = '' 
let currentCompliment = ''
let counter = 0

const complimentDisplay = document.querySelector('#complimentDisplay')
const favoritesList = document.querySelector('#favoritesList')
const category_btn = document.querySelectorAll('.category')
const totalCount = document.querySelector('#totalCount')
const categoryCount = document.querySelector('#categoryCount')

let favorites = []

const compliments = {
  general: [
    "Ты потрясающий человек!",
    "У тебя прекрасная улыбка!",
    "Ты делаешь мир лучше!",
    "Ты очень талантливый!",
  ],
  smart: ["Ты невероятн умный!",
    "Твои идеи просто гениальные!",
    "Ты быстро все понимаешь!",
    "У тебя отличная память",
  ],
  creative: ["Ты очень творческий!",
    "У тебя богатое воображение!",
    "Твои идеи уникальны!",
    "Ты настоящий художник души!"
  ],
  kind: ["Ты очень добрый",
    "У тебя большое серце",
    "Ты всегда готов помочь",
    "Ты заботливый и внимательный"
  ],
};

let categoryCounter = {
    general: 0,
    smart: 0,
    creative: 0,
    kind: 0,
}

function setName() {
    let nameInput = document.querySelector('#nameInput')
    let name = nameInput.value.trim()
    if(name) {
        alert(`Привет ${name}`)
        userName = name
    }
    else {
        alert('Введите имя')
    }
    
}

function generateCompliment() {
    let massive = compliments[currentCategory]
    let generateId = Math.floor(Math.random() * massive.length)
    let compliment = massive[generateId]
    if(userName) {
        complimentDisplay.innerHTML = `${userName}, ${compliment.toLowerCase()}`
        currentCompliment = `${userName}, ${compliment.toLowerCase()}`
        counter++
        categoryCounter[currentCategory]++
        totalCount.innerHTML = counter
        categoryCount.innerHTML = categoryCounter[currentCategory]
        showSpecialEffects()
    }
    else {
        complimentDisplay.innerHTML = 'введите имя '
    }
}

function addToFavorites() {
    if(currentCompliment) {
        if(!favorites.includes(currentCompliment)) {
            favorites.push(currentCompliment)
            updateFavoritesList()
        } 
        else {
            alert('такой комплимент есть')
        }
    }
}

function updateFavoritesList() {
    if(favorites.length != 0) {
        favoritesList.innerHTML = favorites.map(element => `<strong>${element}</strong></br>`).join('')
    }
}

function showSpecialEffects() {
    if(counter==1) {
        alert('достижение 1 ')
    }
    else if(counter==10) {
        alert('достижение 10 ')
    }
    else if(counter==25) {
        alert('достижение 25 ')
    }    
}

function setCategory(category) {
    currentCategory=category
    category_btn.forEach(element => element.classList.remove('active'))
    document.querySelector(`#${category}`).classList.add('active')
    categoryCount.innerHTML = categoryCounter[currentCategory]
}

function resetStats() {
    if (confirm("сбросить")) {
    counter = 0
    favorites = []
    for (let el of Object.keys(categoryCounter)) {
        categoryCounter[el] = 0
    }
    totalCount.innerHTML = counter
    categoryCount.innerHTML = categoryCounter[currentCategory]
    favoritesList.innerHTML = favorites }
}

function handleKeyPress(event) {
    console.log('click')
    if (event.key === 'Enter') {
        setName()
        console.log('enter')
    }
}