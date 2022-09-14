const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [
    'img/pic1.jpg',
    'img/pic2.jpg',
    'img/pic3.jpg',
    'img/pic4.jpg',
    'img/pic5.jpg'
]
/* Declaring the alternative text for each image file */
const alts = {
    'img/pic1.jpg' : 'Closeup of a human eye',
    'img/pic2.jpg' : 'Rock that looks like a wave',
    'img/pic3.jpg' : 'Purple and white pansies',
    'img/pic4.jpg' : 'Section of wall from a pharoahs tomb',
    'img/pic5.jpg' : 'Large moth on a leaf'
}
/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
