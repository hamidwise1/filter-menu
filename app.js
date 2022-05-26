(() => {
 const menu = [
  {
   id: 1,
   title: 'buttermilk pancakes',
   category: 'breakfast',
   price: 15.99,
   img: './images/item-1.jpeg',
   desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
   id: 2,
   title: 'diner double',
   category: 'lunch',
   price: 13.99,
   img: './images/item-2.jpeg',
   desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
   id: 3,
   title: 'godzilla milkshake',
   category: 'shakes',
   price: 6.99,
   img: './images/item-3.jpeg',
   desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
   id: 4,
   title: 'country delight',
   category: 'breakfast',
   price: 20.99,
   img: './images/item-4.jpeg',
   desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
   id: 5,
   title: 'egg attack',
   category: 'lunch',
   price: 22.99,
   img: './images/item-5.jpeg',
   desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
   id: 6,
   title: 'oreo dream',
   category: 'shakes',
   price: 18.99,
   img: './images/item-6.jpeg',
   desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
   id: 7,
   title: 'bacon overflow',
   category: 'breakfast',
   price: 8.99,
   img: './images/item-7.jpeg',
   desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
   id: 8,
   title: 'american classic',
   category: 'lunch',
   price: 12.99,
   img: './images/item-8.jpeg',
   desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
   id: 9,
   title: 'quarantine buddy',
   category: 'shakes',
   price: 16.99,
   img: './images/item-9.jpeg',
   desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
   id: 10,
   title: 'bison steak',
   category: 'dinner',
   price: 22.99,
   img: './images/item-10.jpeg',
   desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
 ];
 //  product container
 const productContainer = document.querySelector('.section-center');
 // create btns
 (() => {
  let categoriesList = menu.map((item) => {
   return item.category;
  });
  categoriesList = [...new Set(categoriesList)];
  categoriesList.unshift('all');
  //  create buttons
  const btnContainer = document.querySelector('.btn-container');
  let btnsList = categoriesList
   .map((item) => {
    return `<button type="button" class="filter-btn" data-id="${item}">${item}</button>`;
   })
   .join('');
  btnContainer.innerHTML = btnsList;
  //  get the btns and attach event
  const filterBtns = btnContainer.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
   btn.addEventListener('click', filterBtnClickHandler);
  });
  productContainer.dataset.category = 'all';
  organizeProducts();
 })();
 //  btn event function
 function filterBtnClickHandler() {
  const filterType = this.dataset.id.toLowerCase();
  const containerCategory = productContainer.dataset.category;
  if (filterType === containerCategory) return;
  productContainer.dataset.category = filterType;
  organizeProducts(filterType);
 }
 function organizeProducts(category = 'all') {
  let products = menu;
  if (category !== 'all') {
   products = products.filter((product) => product.category === category);
  }
  productContainer.innerHTML = products
   .map((product) => {
    return `<article id="${product.id}" class="menu-item">
              <img src="${product.img}" alt="menu item" class="photo" />
              <div class="item-info">
                <header>
                  <h4>${product.title}</h4>
                  <h4 class="price">$${product.price}</h4>
                </header>
                <p class="item-text">
                  ${product.desc}
                </p>
              </div>
            </article>`;
   })
   .join('');
 }
})();
