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
var savedView = document.querySelector('.saved-view');
var savedViewButton = document.querySelector('.view-saved-button');

var userCoverInput = document.querySelector('.user-cover');
var userTitleInput = document.querySelector('.user-title');
var userDescOne = document.querySelector('.user-desc1');
var userDescTwo = document.querySelector('.user-desc2');
var makeMyCoverButton = document.querySelector('.create-new-book-button');




// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', randomCover)
randomButton.addEventListener('click', randomCover)
makeNewButton.addEventListener('click', displayFormView)
savedViewButton.addEventListener('click', displayPageCovers)
homeButton.addEventListener('click', displayHome)
makeMyCoverButton.addEventListener('click', displayUserCover)

function makeCover() {
  currentCover = new Cover(
    covers[covers.length-1],
    titles[titles.length-1],
    descriptors[descriptors.length-2],
    descriptors[descriptors.length-1]
  )
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  taglineOne.innerText = currentCover.tagline1;
  taglineTwo.innerText = currentCover.tagline2;
};


function displayUserCover(event) {
  event.preventDefault();
  homeView.classList.remove('hidden');
  covers.push(userCoverInput.value);
  titles.push(userTitleInput.value);
  descriptors.push(userDescOne.value);
  descriptors.push(userDescTwo.value);
  makeCover();
}

function displayHome() {
  homeView.classList.remove('hidden')
  formView.classList.add('hidden')
  savedView.classList.add('hidden')
  randomButton.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
  homeButton.classList.add('hidden')
};


function displayPageCovers() {
  homeView.classList.add('hidden')
  formView.classList.add('hidden')
  savedView.classList.remove('hidden')
  randomButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
};


function displayFormView() {
  formView.classList.remove('hidden')
  homeView.classList.add('hidden')
  randomButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
};


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
    taglineOne.innerText = currentCover.tagline1;
    tagLineTwo.innerText = currentCover.tagline2;
    
};


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
