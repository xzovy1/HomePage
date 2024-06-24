import './style.css';
import brittany1 from './assets/brittany1.jpeg';
import defaultProjectImg from './assets/dummy.png';
import brittanyAndDoc from './assets/brittanyDoc.jpeg';
import emailWidg from'./assets/email-outline.svg'

function component(){
    const container = document.querySelector('.container');
    const aboutMe = document.querySelector('.about-me-card')
    const projectCards = document.querySelector('.work-card .cards')

    const bioPhoto = new Image();
    bioPhoto.src = brittany1;
    bioPhoto.style.maxWidth = '200px'
    aboutMe.prepend(bioPhoto)

    function createCard(name, description, imageSource = defaultProjectImg){
        let cardBody = document.createElement('div');
        cardBody.classList.add('project-card');

        let projectImg = document.createElement('img');
        projectImg.classList.add('project-image');
        projectImg.src = imageSource;

        let titleBar = document.createElement('div');
        titleBar.classList.add('project-header')

        let projectTitle = document.createElement('h3');
        projectTitle.classList.add('project-title');
        projectTitle.textContent = name;

        let projectHeader = document.createElement('div');
        projectHeader.classList.add('widgets');

        let externalLinkWidget = document.createElement('img');
        externalLinkWidget.classList.add('external-link-widget');

        let projectDescription = document.createElement('div');
        projectDescription.classList.add('project-description');
        projectDescription.textContent = description;

        titleBar.append(projectTitle);
        titleBar.append(projectHeader);

        projectHeader.append(externalLinkWidget)

        cardBody.append(projectImg);
        cardBody.append(titleBar);
        cardBody.append(projectDescription)

        projectCards.append(cardBody);

    }

    createCard('Project', 'Short Description of the project. Just a couple of sentences');
    createCard('Project', 'Short Description of the project. Just a couple of sentences');
    createCard('Project', 'Short Description of the project. Just a couple of sentences');
    createCard('Project', 'Short Description of the project. Just a couple of sentences');
    createCard('Project', 'Short Description of the project. Just a couple of sentences');
    createCard('Project', 'Short Description of the project. Just a couple of sentences');
    // createCard('Project', 'Short Description of the project. Just a couple of sentences');

    const contact = document.querySelector('.contact');
    const footerImg = new Image();
    footerImg.classList.add('footer-image')
    footerImg.src = brittanyAndDoc;
    contact.append(footerImg)

    const emailSection = document.querySelector('.email-section');
    const widgetSpan = document.createElement('span')
    const emailWidget = document.createElement('img');
    const emailAddress = document.createElement('span');
    emailWidget.src = emailWidg;
    emailAddress.textContent = 'supina@ualberta.ca'

    widgetSpan.append(emailWidget);
    emailSection.append(widgetSpan);
    emailSection.append(emailAddress);

    return container;

}

component();