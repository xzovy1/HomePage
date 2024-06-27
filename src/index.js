import './style.css';
import brittany1 from './assets/brittany1resize.jpg';
import defaultProjectImg from './assets/dummy.png';
import brittanyAndDoc from './assets/brittanyDocResize.jpg';
import emailWidg from'./assets/email-outline.svg'

function component(){
    const container = document.querySelector('.container');
    const aboutMe = document.querySelector('.about-me-card')
    const projectCards = document.querySelector('.work-card .cards')

    const bioPhoto = new Image();
    bioPhoto.src = brittany1;
    bioPhoto.style.maxWidth = '240px'
    aboutMe.prepend(bioPhoto)


    function createCard(name, description, imageSource = defaultProjectImg, address = '#'){
        const cardBody = document.createElement('div');
        cardBody.classList.add('project-card');
        cardBody.classList.add('elevate')

        const projectImg = document.createElement('img');
        projectImg.classList.add('project-image');
        projectImg.src = imageSource;

        const titleBar = document.createElement('div');
        titleBar.classList.add('project-header')

        const projectTitle = document.createElement('h3');
        projectTitle.classList.add('project-title');
        projectTitle.textContent = name;

        const projectHeader = document.createElement('div');
        projectHeader.classList.add('widgets');

        const externalLinkAnchor = document.createElement('a');
        externalLinkAnchor.href = address
        const externalLinkWidget = document.createElement('img');
        externalLinkWidget.classList.add('external-link-widget');
        externalLinkAnchor.append(externalLinkWidget);

        const projectDescription = document.createElement('div');
        projectDescription.classList.add('project-description');
        projectDescription.textContent = description;

        titleBar.append(projectTitle);
        titleBar.append(projectHeader);

        projectHeader.append(externalLinkAnchor)

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
    // const widgetSpan = document.createElement('span')
    const emailWidget = document.createElement('img');
    const emailAddress = document.createElement('span');
    emailWidget.src = emailWidg;
    emailAddress.textContent = 'supina@ualberta.ca'

    // widgetSpan.append(emailWidget);
    emailSection.append(emailWidget);
    emailSection.append(emailAddress);

    let options = {
        rootMargin: "0px",
        threshold: 1.0,
    }
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add('transition');
                    console.log(entry.target)
                    return;
                }
                entry.target.classList.remove('transition');
            })
    },options)
    const cards = document.querySelectorAll('.elevate');
    cards.forEach((element) => {observer.observe(element)});
    // observer.observe(document.querySelector('.elevate'))

    return container;

}

component();