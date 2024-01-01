const modelOpen = '[data-open]';
const modelClose = '[data-close]';
const isVisible = 'is-visible';

const openModel = document.querySelectorAll(modelOpen);
const closeModel = document.querySelectorAll(modelClose);

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