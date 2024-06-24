import './style.css';
import Image1 from './assets/brittany1.jpeg';

function component(){
    const container = document.querySelector('.container');
    const aboutMe = document.querySelector('.about-me-card')


    const bioPhoto = new Image();
    bioPhoto.src = Image1;
    bioPhoto.style.maxWidth = '200px'
    aboutMe.prepend(bioPhoto)

    

}

component();