const menu = [
    {
      id: 1,
      title: "airpods2",
      category: "apple",
      price: 1000.00,
      img: "/myImage/accessories/airpods2.jpg",
    },
    {
      id: 2,
      title: "airpods3",
      category: "apple",
      price: 1000.00,
      img: "/myImage/accessories/airpods3.jpg",
    },
    {
      id: 3,
      title: "aukey",
      category: "aukey",
      price: 1000.00,
      img: "/myImage/accessories/ep-n5.jpg",
    },
    {
      id: 4,
      title: "powerbank y39",
      category: "aukey",
      price: 1000.00,
      img: "/myImage/accessories/pb-y39.jpg",
    },
    {
      id: 5,
      title: "selfie-tripod",
      category: "aukey",
      price: 1000.00,
      img: "/myImage/accessories/selfie-tripod.jpg",
    },
    {
      id: 6,
      title: "smooth-x",
      category: "apple",
      price: 1000.00,
      img: "/myImage/accessories/smooth-x.jpg",
    },
    {
      id: 7,
      title: "apple charger 20w",
      category: "apple",
      price: 1000.00,
      img: "/myImage/accessories/20w-charger.jpg",
    },
    {
      id: 8,
      title: "apple airtags",
      category: "apple",
      price: 1000.00,
      img: "/myImage/accessories/apple-airtags.jpg",
    },
    {
      id: 9,
      title: "apple magsafe",
      category: "apple",
      price: 1000.00,
      img: "/myImage/accessories/magsafe.jpg",
    },
    {
      id: 10,
      title: "apple magsafe",
      category: "aukey",
      price: 1000.00,
      img: "/myImage/accessories/cc-y6.jpg",
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
          <article class="menu-item col-md-4 col-12 mt-5" >
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
  