const theme = 'theme';
const dataTheme = 'data-theme';
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn';
const dark = 'dark';
const light = 'light'
const open = 'open';
const active_state = 'active'


const modelOpen = '[data-open]';
const modelClose = '[data-close]';
const isVisible = 'is-visible';


const root = document.documentElement;

/* Theme */
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);


/* Modal */
const openModel = document.querySelectorAll(modelOpen);
const closeModel = document.querySelectorAll(modelClose);


const setActive = (element,selector) => {
    if(document.querySelector(`${selector}.${active_state}`) !==null) {
        document.querySelector(`${selector}.${active_state}`).classList.remove(active_state);
    }
    element.classList.add(active_state);
}

const setTheme = (toggle) =>{
    if(toggle === dark) {
        root.setAttribute(dataTheme,dark);//data-them="dark"
        localStorage.setItem(theme,dark);
    }else{
        root.setAttribute(dataTheme,light);
        localStorage.setItem(theme,light);
    };
}

if(currentTheme){
    root.setAttribute(dataTheme,currentTheme);
    switcher.forEach((btn)=>{
        btn.classList.remove(active_state);
    });
    if(currentTheme === dark){
        switcher[1].classList.add(active_state);
     }else{
        switcher[0].classList.add(active_state);
     }
}


toggleTheme.addEventListener('click', function(){
    const tab = this.parentElement.parentElement;
    if(!tab.className.includes(open)){
        tab.classList.add(open);
    }else{
        tab.classList.remove(open);
    }
})

for(const element of switcher){
    element.addEventListener('click',function(){
        const toggle = this.dataset.toggle; //data-toggle
        setActive(element,switcherBtn);
        setTheme(toggle);
    })
}

//Modal open buttons for the whole website/site
//opens the page when you click it or pops it on your screen
// we are accessing data open and whatever the word is we are searching for that as id 
// in such case data open must be unique and same as id such as data-open = "about" id="open"
for (const element of openModel){
    element.addEventListener('click' , function(){
        const modalId = this.dataset.open;//going to data-open data part is dataset other is .open
        document.getElementById(modalId).classList.add(isVisible);
    })
}

for(const element of closeModel){
    element.addEventListener('click',function(){
        this.parentElement.parentElement.classList.remove(isVisible);
        //so when we were adding we were already at that level however this needs to go up to get that div
        //your structure must be clear
    })
}