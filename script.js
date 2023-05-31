const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const backButton = document.getElementById ("previous-img")
const nextButton = document.getElementById ("next-img")
const imgElement = document.getElementById ("img")
const titleElement = document.getElementById ("title")
const textElement = document.getElementById ("text")

let currentIndex = 0
atLoading (currentIndex)

// ! EVENT LISTENERS ...................................
backButton.addEventListener ("click", () => {
    if (currentIndex === 0) {
        currentIndex = images.length - 1
    } else {
        currentIndex--
    }
    atLoading (currentIndex)
})

nextButton.addEventListener ("click", () => {
    if (currentIndex === images.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }
    atLoading (currentIndex)
})

// ! FUNCTIONS ..........................................
function atLoading (index) {
    imgElement.src = images[index].image
    titleElement.innerText = images[index].title
    textElement.innerText = images[index].text
}