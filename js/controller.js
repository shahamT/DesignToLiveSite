'use strict'

function oninit() {
    setMobileNavOpenCloseEvents()
}

function setMobileNavOpenCloseEvents(){
    const navBtn = document.querySelector('.mobile-nav-btn')
    const navCloseBtn = document.querySelector('.mobile-close-nav-btn')
    const navMenu = document.querySelector('.desktop-nav-btns')

    navBtn.addEventListener('click', ev =>{
      navMenu.classList.add('nav-in')
      
    })

    navCloseBtn.addEventListener('click', ev =>{
        navMenu.classList.remove('nav-in')      
    })
}

