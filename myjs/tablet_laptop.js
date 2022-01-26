const menu = [
    {
      id: 1,
      title: "hp original",
      category: "laptop",
      price: 1000.00,
      img: "/myImage/laptop/hp-original-imaftyzachgrav8f.jpeg",
    },
    {
      id: 2,
      title: "hp original",
      category: "laptop",
      price: 1000.00,
      img: "/myImage/laptop/hp-original-imaftyzachgrav8f.jpeg",
    },
    {
      id: 3,
      title: "hp original",
      category: "laptop",
      price: 1000.00,
      img: "/myImage/laptop/hp-original-imaftyzachgrav8f.jpeg",
    },
    {
      id: 4,
      title: "hp original",
      category: "laptop",
      price: 1000.00,
      img: "/myImage/laptop/hp-original-imaftyzachgrav8f.jpeg",
    },
    {
      id: 5,
      title: "hp original",
      category: "laptop",
      price: 1000.00,
      img: "/myImage/laptop/hp-original-imaftyzachgrav8f.jpeg",
    },
    {
      id: 6,
      title: "hp original",
      category: "laptop",
      price: 1000.00,
      img: "/myImage/laptop/hp-original-imaftyzachgrav8f.jpeg",
    },
    {
      id: 7,
      title: "apple ipad air, 8GB/128GB",
      category: "tablet",
      price: 566,
      img: "/myImage/tablets-pc/apple-ipad-air-109_2_1_1_1.jpg",
    },
    {
      id: 8,
      title: "apple ipad 11 pro",
      category: "tablet",
      price: 435,
      img: "/myImage/tablets-pc/apple-ipp11-2021_2_1_2.jpg",
    },
    {
      id: 9,
      title: "apple ipad 11 mini",
      category: "tablet",
      price: 435,
      img: "/myImage/tablets-pc/apple-ipp11-2021_2_1_2.jpg",
    },
    {
      id: 10,
      title: "apple ipad 2021 silver pro",
      category: "tablet",
      price: 400,
      img: "/myImage/tablets-pc/apple-ipp129-2021-silver_1_1_1_1_1_1.jpg",
    },
    {
      id: 11,
      title: "apple ipad 2021 silver mini",
      category: "tablet",
      price: 400,
      img: "/myImage/tablets-pc/apple-ipp129-2021-silver_1_1_1_1_1_1.jpg",
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
          <article class="menu-item col-md-4 col-6 mt-5" >
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
  