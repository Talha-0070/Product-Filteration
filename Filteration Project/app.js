// Filteration Project

// First we make Objects for our items

const menu = [
    {
        id: 1,
        title: 'Butter Milk',
        category: "breakfast",
        price: 15,
        img: "./images/pic-1.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a ratione qui. Quisquam totam voluptas, 
        eius vitae esse veniam. Voluptatum quod suscipit voluptas natus non tempore!`,
    },

    {
        id: 2,
        title: 'Special Chicken Piece',
        category: "breakfast",
        price: 10,
        img: "./images/pic-2.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a ratione qui. Quisquam totam voluptas, 
        eius vitae esse veniam. Voluptatum quod suscipit voluptas natus non tempore!`,
    },

    {
        id: 3,
        title: 'Special Burger',
        category: "lunch",
        price: 40,
        img: "./images/pic-3.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a ratione qui. Quisquam totam voluptas, 
        eius vitae esse veniam. Voluptatum quod suscipit voluptas natus non tempore!`,
    },

    {
        id: 4,
        title: 'Butter Cake',
        category: "lunch",
        price: 12,
        img: "./images/pic-4.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a ratione qui. Quisquam totam voluptas, 
        eius vitae esse veniam. Voluptatum quod suscipit voluptas natus non tempore!`,
    },

    {
        id: 5,
        title: 'Fajita',
        category: "dinner",
        price: 60,
        img: "./images/pic-5.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a ratione qui. Quisquam totam voluptas, 
        eius vitae esse veniam. Voluptatum quod suscipit voluptas natus non tempore!`,
    },

    {
        id: 6,
        title: 'Chicken Bread',
        category: "dinner",
        price: 25,
        img: "./images/pic-6.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a ratione qui. Quisquam totam voluptas, 
        eius vitae esse veniam. Voluptatum quod suscipit voluptas natus non tempore!`,
    },
];

// Selecting the parent div of all the item which is "section-center"


    const sectionCenter = document.querySelector('.section-center'); // Parent Div Selected
    const filterBtns = document.querySelectorAll('.filter-btn'); // buttons

    // So here DOM Content Loaded when our page loads we wanna do something...

    // load items
    window.addEventListener('DOMContentLoaded',function(){
        displayMenuItems(menu);

    });

    // filtering-btns

    // forEach means every btn perfom it's own task

    filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(event){

            const category = event.currentTarget.dataset.id;
            // filter method/ filtering the items
            const menuCategory = menu.filter(function(menuItem){     
                
                // we want to return the menuItem if it has the category = to whatever in "category" variable;
                // so here the condition 

                if(menuItem.category === category){
                    return menuItem;
                }              
            });

            if(category === 'all'){
                displayMenuItems(menu); // display items in the "menu" array above.
            }else{
                displayMenuItems(menuCategory); // it displays other catogries except "all";
            }



            /*
                The "dataset" property is used to target the specific element like: button;
                It is also used for filtering.
                Syntax: "data" then "-" then ""property name"any name you want" then assign the value. Ex: data-id="all";
                You can write in html tags.
                If you want more specific the write in javascript "dataset.id"; dataset.your property name
            */
        });

    })







    function displayMenuItems(menuItems){
        // So now we using "map method". We can actually modify our "menu" array above.

        let displayMenu = menuItems.map(function(item){
            // console.log(item);
             /* what if I want to print or show the "title" in my "menu array" above?
               simply write the functions variable "(item)" with "title" variable. 
               This title variable is belongs to your "menu" array. And it Displays ALL the "titles" 
               you have in your "menu" array.
             */
 
             // so now I want to show "title","img","text","price";
 
             return `<article class="menu-item">
             <img src=${item.img} class="image" alt="shake">
             <div class="item-info">
             <header>
                 <h4>${item.title}</h4>
                 <h3 class="price"> $${item.price}</h3>
             </header>
             
             <p class="item-text">
                 ${item.desc} 
             </p>
         </div>
         </article>`;
 
         });
 
         // So now we join the whole <article> in "section-center" >> Parent Div.
 
         // "JOIN" METHOD
         displayMenu = displayMenu.join(""); // "" this means all the quotations will be removed
 
         sectionCenter.innerHTML = displayMenu;
    }

    