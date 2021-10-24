// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var taglineOne = document.querySelector('.tagline-1');
var taglineTwo = document.querySelector('.tagline-2');
var randomButton = document.querySelector('.random-cover-button');
var formView = document.querySelector('.form-view');
var makeNewButton = document.querySelector('.make-new-button');
var homeView = document.querySelector('.home-view');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', randomCover)
randomButton.addEventListener('click', randomCover)
makeNewButton.addEventListener('click', displayFormView)


function displayFormView() {
formView.classList.remove('hidden')
homeView.classList.add('hidden')
randomButton.classList.add('hidden')
saveCoverButton.classList.add('hidden')
homeButton.classList.remove('hidden')
}


// Create your event handlers and other functions here 👇
function randomCover() {
  currentCover = new Cover(
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)]
  )
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagelineOne.innerText = currentCover.tagline1;
  tagLineTwo.innerText = currentCover.tagline2;
};


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
