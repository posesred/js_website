const theme = "theme";
const dataTheme = "data-theme";
const themeTab = ".theme-tab";
const switcherBtn = ".switcher-btn";
const dark = "dark";
const light = "light";
const open = "open";
const active_state = "active";

const modelOpen = "[data-open]";
const modelClose = "[data-close]";
const isVisible = "is-visible";

const dataFilter = "[data-filter]";
const portFolioData = "[data-item]";

const root = document.documentElement;

/* Theme */
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

/* Portfolio */
const filterLink = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portFolioData);
const searchBox = document.querySelector("#search");

/* Modal */
const openModel = document.querySelectorAll(modelOpen);
const closeModel = document.querySelectorAll(modelClose);

const setActive = (element, selector) => {
  if (document.querySelector(`${selector}.${active_state}`) !== null) {
    document
      .querySelector(`${selector}.${active_state}`)
      .classList.remove(active_state);
  }
  element.classList.add(active_state);
};

const setTheme = (toggle) => {
  if (toggle === dark) {
    root.setAttribute(dataTheme, dark); //data-them="dark"
    localStorage.setItem(theme, dark);
  } else {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
};

if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);
  switcher.forEach((btn) => {
    btn.classList.remove(active_state);
  });
  if (currentTheme === dark) {
    switcher[1].classList.add(active_state);
  } else {
    switcher[0].classList.add(active_state);
  }
}

toggleTheme.addEventListener("click", function () {
  const tab = this.parentElement.parentElement;
  if (!tab.className.includes(open)) {
    tab.classList.add(open);
  } else {
    tab.classList.remove(open);
  }
});

searchBox.addEventListener("keyup", (event) => {
  const searchInput = event.target.value.toLowerCase().trim();
  portfolioItems.forEach((card) => {
    if (card.dataset.item.includes(searchInput)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

for (const link of filterLink) {
  link.addEventListener("click", function () {
    setActive(link, ".filter-link");
    const filter = this.dataset.filter; //data-filter it was on the <li> i am putting as reminder for my self
    portfolioItems.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block";
      } else if (card.dataset.item === filter) {
        //data-item
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

for (const element of switcher) {
  element.addEventListener("click", function () {
    const toggle = this.dataset.toggle; //data-toggle
    setActive(element, switcherBtn);
    setTheme(toggle);
  });
}

//Modal open buttons for the whole website/site
//opens the page when you click it or pops it on your screen
// we are accessing data open and whatever the word is we are searching for that as id
// in such case data open must be unique and same as id such as data-open = "about" id="open"
for (const element of openModel) {
  element.addEventListener("click", function () {
    const modalId = this.dataset.open; //going to data-open data part is dataset other is .open
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const element of closeModel) {
  element.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    //so when we were adding we were already at that level however this needs to go up to get that div
    //your structure must be clear
  });
}

//Modal
document.addEventListener("click", (e) => {
  if (e.target === document.querySelector(`.modal.is-visible`)) {
    document.querySelector(`.modal.is-visible`).classList.remove(isVisible);
  }
});
document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    document.querySelector(`.modal.is-visible`).classList.remove(isVisible);
  }
});

const elementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < elementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// function AbsHtml(portfolioCardDiv,cardBodyDiv,dataItems,popUpBoxClassA,PortfolioInnerTxtDiv,PortfolioInnerTxth3) {
//     const portfolioGrid = document.querySelector('.portfolio-grid');
//     for(let i = 0; i<PortfolioInnerTxtDiv.length;i++){
//         const card = document.createElement('div');
//         card.classList.add(portfolioCardDiv);
//         card.setAttribute('data-item', dataItems[i]);

//         const cardBody = document.createElement('div');
//         cardBody.classList.add(cardBodyDiv);

//         const image = document.createElement('img');
//         image.setAttribute('src',`./assets/images/portfolio-${i+1}.jpg`);

//         const aLink = document.createElement('a')
//         aLink.classList.add(popUpBoxClassA);
//         aLink.setAttribute('href','#');

//         const title = document.createElement('div');
//         title.textContent = PortfolioInnerTxtDiv[i];

//         const h3Text = document.createElement('h3');
//         h3Text.textContent = PortfolioInnerTxth3[i];

//         aLink.appendChild(title);
//         aLink.appendChild(h3Text);

//         cardBody.appendChild(image);
//         cardBody.appendChild(aLink);

//         card.appendChild(cardBody);

//         portfolioGrid.appendChild(card);
//     }}
// const div = document.createElement('div');
// const text = document.createTextNode('yaaa it working'); // Use createTextNode instead of textContent
// div.appendChild(text);

// // getElementsByClassName returns a collection, so you need to access the first element
// const elements = document.getElementsByClassName(e);
// if (elements.length > 0) {
//     elements[0].appendChild(div);
// } else {
//     console.error('Element with class ' + e + ' not found');
// }
