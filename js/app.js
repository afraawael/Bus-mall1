'use strict';
let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image');
let rightImageElement = document.getElementById('right-image');

let counts = 0;
let maxAttempts =25;
let leftIndex;
let middleIndex;
let rightIndex;


function Catalog(name, source){
  this.name = name;
  this.source =source;
  this.vote=0;
  Catalog.allImages.push(this)
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
      }
      
   leftImageElement.src =  Catalog.allImages[leftIndex].source;
   middleImageElement.src = Catalog.allImages[middleIndex].source;
   leftImageElement.src =  Catalog.allImages[leftIndex].source;
 
}

renderThreeImages();



leftImageElement.addEventListener('click', handleClicking);
middleImageElement.addEventListener('click',handleClicking);
rightImageElement.addEventListener('click',handleClicking);

function handleClicking(event){
      counts++;
      if(maxAttempts >= counts){
        if(event.target.id ==='left-image'){
           Catalog.allImages[leftIndex].votes++;
        }else if(event.target.id ==='middle-image'){
            Catalog.allImages[middleIndex].votes++;
         }else if(event.target.id ==='right-image'){
              Catalog.allImages[rightIndex].votes++;
      }
      renderThreeImages();
      console.log(Catalog.allImages);
    }else {

      renderList()
      leftImageElement.removeEventListener('click', handleClicking);
      middleImageElement.removeEventListener('click',handleClicking);
      rightImageElement.removeEventListener('click',handleClicking);
    }
  }
  


  function renderList(){
    let ul = document.getElementById('list');
    for(let i = 0 ; i < Catalog.allImages.length;i++){
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${Catalog.allImages[i].name} it has ${Catalog.allImages[i].votes} Votes`;
    }
  }
  



function generateRandomIndex(){
    return Math.floor(Math.random() * Catalog.allImages.length); 
 }

 
