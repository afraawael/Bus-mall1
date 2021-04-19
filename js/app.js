'use strict';
let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image');
let rightImageElement = document.getElementById('right-image');
let container = document.getElementById('sec-one');



let counts = 0;
let maxAttempts =25;
let leftIndex;
let middleIndex;
let rightIndex;
let arrayOfnames = [];



function Catalog(name, source){
  this.name = name;
  this.source =source;
  this.vote=0;
  this.shown = 0;
  Catalog.allImages.push(this);
  arrayOfnames.push(this.name);

}



Catalog.allImages = [];
new Catalog('bag','../img/bag.jpg');
new Catalog('banana','../img/banana.jpg');
new Catalog('bathroom','../img/bathroom.jpg');
new Catalog('boots','../img/boots.jpg' );
new Catalog('breakfast','../img/breakfast.jpg');
new Catalog('bubblegum','../img/bubblegum.jpg');
new Catalog('chair','../img/chair.jpg');
new Catalog('cthulhu','../img/cthulhu.jpg');
new Catalog('dog-duck','../img/dog-duck.jpg');
new Catalog('dragon','../img/dragon.jpg');
new Catalog('pen','../img/pen.jpg');
new Catalog('pet-sweep','../img/pet-sweep.jpg');
new Catalog('scissors','../img/scissors.jpg');
new Catalog('shark','../img/shark.jpg');
new Catalog('sweep','../img/sweep.png');
new Catalog('tauntaun','../img/tauntaun.jpg');
new Catalog('unicorn','../img/unicorn.jpg');
new Catalog('usb','../img/usb.gif');
new Catalog('water-can','../img/water-can.jpg');
new Catalog('wine-glass','../img/wine-glass.jpg');

console.log(Catalog.allImages);




function renderThreeImages (){
  leftIndex = generateRandomIndex();
  middleIndex = generateRandomIndex();
  rightIndex = generateRandomIndex();
  while(leftIndex === middleIndex || middleIndex === rightIndex || leftIndex === rightIndex){
    rightIndex = generateRandomIndex();
    middleIndex = generateRandomIndex();

  }

  leftImageElement.src = Catalog.allImages[leftIndex].source;
  Catalog.allImages[leftIndex].shown++;
  middleImageElement.src = Catalog.allImages[middleIndex].source;
  Catalog.allImages[middleIndex].shown++;
  rightImageElement.src = Catalog.allImages[rightIndex].source;
  Catalog.allImages[rightIndex].shown++;
}



renderThreeImages();


container.addEventListener('click',handleClicking);

function handleClicking(event){
  counts++;
  console.log(counts);
  if(maxAttempts >= counts){
    if(event.target.id ==='left-image'){
      Catalog.allImages[leftIndex].vote++;
    }else if(event.target.id ==='middle-image'){
      Catalog.allImages[middleIndex].vote++;
    }else if(event.target.id ==='right-image'){
      Catalog.allImages[rightIndex].vote++;
    }else {
      alert('Click on the image please!');
      counts--;
    }
    renderThreeImages();
    console.log(Catalog.allImages);
  }else {
    renderList();
    container.removeEventListener('click',handleClicking);
  }
}





let arrayOfVotes = [];
let arrayOfShown = [];
function renderList(){
  let ul = document.getElementById('list');
  for(let i = 0 ; i < Catalog.allImages.length;i++){
    arrayOfVotes.push(Catalog.allImages[i].vote);
    arrayOfShown.push(Catalog.allImages[i].shown);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${Catalog.allImages[i].name} has ${Catalog.allImages[i].vote} votes and it shows ${Catalog.allImages[i].shown} times`;
  }
  console.log(Catalog.allImages);

}

function generateRandomIndex(){
  return Math.floor(Math.random() * Catalog.allImages.length);
}
