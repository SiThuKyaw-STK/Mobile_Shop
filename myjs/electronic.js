const menu = [
    {
      id: 1,
      title: "TV 1",
      category: "tv",
      price: 1000.00,
      img: "/myImage/electronic/tv1.jpg",
    },
    {
        id: 2,
        title: "TV 2",
        category: "tv",
        price: 1000.00,
        img: "/myImage/electronic/tv2.jpg",
    },
    {
        id: 3,
        title: "TV 3",
        category: "tv",
        price: 1000.00,
        img: "/myImage/electronic/tv3.png",
    },
    {
      id: 4,
      title: "washing-machine1",
      category: "washingmachine",
      price: 1000.00,
      img: "/myImage/electronic/washing_machine1.jpg",
    },
    {
        id: 5,
        title: "washing-machine2",
        category: "washingmachine",
        price: 1000.00,
        img: "/myImage/electronic/washing_machine2.jpg",
    },
    {
      id: 6,
      title: "washing-machine3",
      category: "washingmachine",
      price: 1000.00,
      img: "/myImage/electronic/washing_machine3.png",
    },
    
  ];
  
  
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      return `
          <article class="menu-item col-md-4 col-12 mt-5">
              <img  src="${item.img}" alt="${item.title}" class="photo" />
              <div class="item-info">
                <header class="text-center">
                  <h5 class="text-uppercase">${item.title}</h5>
                </header>
                <p class="text-center">LATEST</p>
                <div class="text-center">
                  <h5 class="price">$${item.price}</h5>
                  <button class="btnstk ">Buy Now</button>
                </div>
              </div>
            </article>
          `;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
  