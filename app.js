'use strict';
console.log('Here\'s a hidden message');
var images = ['https://m.media-amazon.com/images/M/MV5BMTY0MjU0NTc0Ml5BMl5BanBnXkFtZTgwMTgxMDgwMjE@._V1_UY209_CR0,0,140,209_AL_.jpg','https://m.media-amazon.com/images/M/MV5BMmE5MDlmNTgtYjdhMi00Mzc1LWE5MmYtNzRjMzMxOGJkNDE2XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_UY209_CR0,0,140,209_AL_.jpg',
'https://m.media-amazon.com/images/M/MV5BNzM3NDEzODI4Ml5BMl5BanBnXkFtZTgwODgxMDgwMjE@._V1_UY209_CR0,0,140,209_AL_.jpg','https://m.media-amazon.com/images/M/MV5BMjM0OTkwMzQwMV5BMl5BanBnXkFtZTgwMzIyMDgwMjE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg'];
var currentIndex =0;
var incrementIndex = function(){
    console.log(currentIndex);
    currentIndex = currentIndex + 1;
    if (currentIndex > images.length - 1) {currentIndex = 0}
}

var next = document.getElementById('next-button')
var img = document.querySelector('img');

next.onclick = function(){
    img.setAttribute('src', images[incrementIndex(currentIndex)]);
}

var decrenentIndex = function(){
    console.log(currentIndex);
    currentIndex= currentIndex - 1;
    if(currentIndex<0){
        currentIndex = images.length -1;
    }
return currentIndex;
}

var prev = document.getElementById('prev-button');
prev.onclick = function(){
    img.setAttribute('src',images[decrenentIndex(currentIndex)]);
}

