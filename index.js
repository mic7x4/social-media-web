
// SIDEBAR
const menuItems =  document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotification = document.querySelector('#message-notifications');
const messages =  document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');

const colorPalette = document.querySelectorAll('.choose-color span');
const BG1 =  document.querySelector('.bg-1');
const BG2 =  document.querySelector('.bg-2');
const BG3 =  document.querySelector('.bg-3');


// remove active class from all menu items
const changeActiveItem = () =>{
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

// SDEBAR
menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup')
            .style.display = 'none';
        }else {
            document.querySelector('.notifications-popup')
            .style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// MESSAGES
// search chats
const searchMessage = ()=>{
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            chat.style.display = 'flex';
        }else {
            chat.style.display='none'
        }

    })
}

// Higlight message search on click
messageSearch.addEventListener('keyup',searchMessage);
messagesNotification.addEventListener('click', ()=> {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display='none';
    setTimeout(()=>{
        messages.style.boxShadow = 'none';
    },2000)
})


// THEME/DISPLAY CUSTOMIZATION

// Opens the color modal
const openThemeModal = ()=> {
    themeModal.style.display = 'grid';
}

// Closing the Modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display='none';
    }
}

themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click',openThemeModal);


// FONTS - SIZES
// Remove the class from spans or font sizes
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}


fontSizes.forEach(size => {

    size.addEventListener('click', ()=> {
    removeSizeSelector();
    let fontsize;
    size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
        fontsize = '10px';
        root.style.setProperty('----sticky-top-left','5.4rem');
        root.style.setProperty('----sticky-top-right','5.4rem');
    }else if(size.classList.contains('font-size-2')){
        fontsize = '13px';
        root.style.setProperty('----sticky-top-left','5.4rem');
        root.style.setProperty('----sticky-top-right','-7rem');
    }else if(size.classList.contains('font-size-3')){
        fontsize = '16px';
        root.style.setProperty('----sticky-top-left','-2rem');
        root.style.setProperty('----sticky-top-right','-17rem');
    }else if(size.classList.contains('font-size-4')){
        fontsize = '19px';
        root.style.setProperty('----sticky-top-left','-5rem');
        root.style.setProperty('----sticky-top-right','-25rem');
    }else if(size.classList.contains('font-size-5')){
        fontsize = '22px';
        root.style.setProperty('----sticky-top-left','-10rem');
        root.style.setProperty('----sticky-top-right','-35rem');
    }

    // Change the fontsize of the root html elements
    document.querySelector('html').style.fontSize = fontsize;

    })

})

// Remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// Change Primary colors
 colorPalette.forEach(color => {
     color.addEventListener('click', ()=>{
         let primary;
         changeActiveColorClass();
         if(color.classList.contains('color-1')){
             primaryHue = 252;
         }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }

        color.classList.add('active');
        root.style.setProperty('--primary-color-hue',primaryHue);
     })
 })

