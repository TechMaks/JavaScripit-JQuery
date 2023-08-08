/*
const handleClick = () => {
    const body = document.querySelector('body');
    body.innerHTML = `
        <h1>Hello JavaScript</h1>
    `;
    
    body.style.backgroundColor = '#000';
    body.style.color = '#fff';
};

document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById("btn-start");
    el.addEventListener('mouseover', () => {
        el.style.position = 'absolute';
        el.style.top = `${Math.floor(Math.random() * (window.innerHeight - 18))}px`;
        el.style.left = `${Math.floor(Math.random() * (window.innerWidth - 18))}px`;
    });
    
    el.addEventListener('click', () => handleClick());
});
*/


const handleClick = () => {
    const body = $('body');
    body.html(`
        <h1>Hello JavaScript</h1>
    `);
    
    body.css('background-color', '#000');
    body.css('color', '#fff');
};

const StartButtonInit = () => {
    const el = $("#btn-start");
    el.on('mouseover', () => {
        el.css({
            position: 'absolute',
            top: `${Math.floor(Math.random() * (window.innerHeight - 18))}px`,
            left: `${Math.floor(Math.random() * (window.innerWidth - 18))}px`,
        });
    });
    
    el.on('click', () => handleClick());
    
};

const infoButtonInit = () => {
    const el = $("#btn-info");
    const elInitialText = el.html();
    
    el.on("click", () => {
        if (el.html() === elInitialText) {
            el.html('Hidden informations');
        } else {
            el.html(elInitialText);
        }
        console.log($(".info"));
        $(".info").toggle();
    });
};

$(document).ready(() => {
    StartButtonInit();
    infoButtonInit();
});


