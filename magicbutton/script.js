let clickCount = 0
const button = document.querySelector(".magic-button")
let count = document.getElementById("clickCounter")
let message = document.getElementById("magicMessage")
let particle_container = document.getElementById('particles')
let achievements = document.querySelector('#achievements')
const reset = document.querySelector('.reset-button')

const magicMesssages = [
    '🎉 Вау! Это действительно магия! 🎉',
    '🎉 Вау! Это- заклинание! 🎉',
    '🎉 Вау! Это cильное заклинание! 🎉'
]

const magicParticles = ['✨', '🌟', '💫', '⭐', '🎆', '🎇', '💥', '🔮']

function createParticles() {
    let quantity = 5 + Math.floor(Math.random() * 4)
    for(let i = 0; i<quantity; i++){
        let div = document.createElement('div')
        div.className = 'particle'
        let id = Math.floor(Math.random() * 8)
        div.innerHTML = magicParticles[id]
        div.style.position = 'absolute'
        div.style.left = (Math.random() * 100 + '%')
        div.style.top = (Math.random() * 100 + 'vh')
        particle_container.appendChild(div)
        setTimeout(function(){
            if (div.parentNode) {
                div.parentNode.removeChild(div)
            }
        }, 2500)
    }
}

function checkAchievements() {
    switch(clickCount) {
        case 5: 
            achievements.innerHTML = '5'
            achievements.style.display = 'block'
            break;
        case 10: 
            achievements.innerHTML = '10'
            achievements.style.display = 'block'
            break;
        case 25: 
            achievements.innerHTML = '25'
            achievements.style.display = 'block'
            break;
        case 50:
            achievements.innerHTML = '50'
            achievements.style.display = 'block'
            break;
        case 100:
            achievements.innerHTML = '100'
            achievements.style.display = 'block'
            break;
    }
    setTimeout(function() {
        achievements.innerHTML = ''
        achievements.style.display = 'none'
    },5000)
}

function playClickSound() {
    
}

function showMagic() {
    button.classList.add('clicked')
    clickCount ++ 
    let message_id = Math.floor(Math.random() * (2 - 0 + 1) + 0)
    message.innerText = magicMesssages[message_id]
    count.innerText = 'Кликов: ' + clickCount
    setTimeout(function(){
        button.classList.remove('clicked')
    }, 200)
    setTimeout(function(){
        message.innerText = ''
    }, 3000)
    createParticles()
    checkAchievements()
}

button.addEventListener('click', showMagic)

reset.addEventListener('click', function(){
    clickCount = 0
    count.innerHTML = 'Кликов: 0' 
    message.innerHTML = 'Очищено'
    achievements.innerHTML = ''
    achievements.style.display = 'none'
    setTimeout(function(){
        message.innerHTML = ''
    }, 2000)
})