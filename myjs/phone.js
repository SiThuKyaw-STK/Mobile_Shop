const menu = [
    {
      id: 1,
      title: "apple iPhone mini 13, 256GB",
      category: "apple",
      price: 1200.00,
      img: "/myImage/phones/Apples/apple-ip13m-starlight_1.jpg",
    },
    {
      id: 2,
      title: "apple iPhone mini 13, 128GB",
      category: "apple",
      price: 1100.00,
      img: "/myImage/phones/Apples/apple-ip13m-starlight_1.jpg",
    },
    {
      id: 3,
      title: "apple iPhone pro 13, 256GB",
      category: "apple",
      price: 1400.00,
      img: "/myImage/phones/Apples/apple-ip13pm-blue_2_1_2.jpg",
    },
    {
      id: 4,
      title: "apple iPhone pro 13, 128GB",
      category: "apple",
      price: 1300.00,
      img: "/myImage/phones/Apples/apple-ip13pm-blue_2_1_2.jpg",
    },
    {
      id: 5,
      title: "samsung a52s, 256GB",
      category: "samsung",
      price: 800.00,
      img: "/myImage/phones/samsungs/samsung-a52s_2.jpg",
    },
    {
      id: 6,
      title: "samsung flip3 white",
      category: "samsung",
      price: 999,
      img: "/myImage/phones/samsungs/samsung-flip3-white_1.jpg",
    },
    {
      id: 7,
      title: "samsung fold 3",
      category: "samsung",
      price: 566,
      img: "/myImage/phones/samsungs/samsung-fold3-fg_1.png",
    },
    {
      id: 8,
      title: "samsung s21fe",
      category: "samsung",
      price: 435,
      img: "/myImage/phones/samsungs/samsung-s21fe_2.jpg",
    },
    {
        id: 9,
        title: "xiaomi 11t pro",
        category: "xiaomi",
        price: 300,
        img: "/myImage/phones/xiaomis/xiaomi-11t-pro.jpg",
      },
      {
        id: 10,
        title: "xiaomi m3 pro",
        category: "xiaomi",
        price: 400,
        img: "/myImage/phones/xiaomis/xiaomi-m3-pro_2.jpg",
      },
      {
        id: 11,
        title: "xiaomi m3",
        category: "xiaomi",
        price: 500,
        img: "/myImage/phones/xiaomis/xiaomi-m3_2.jpg",
      },
      {
        id: 12,
        title: "xiaomi m4pro blue",
        category: "xiaomi",
        price: 600,
        img: "/myImage/phones/xiaomis/xiaomi-m4-pro-blue_1_1.jpg",
      },
      {
        id: 13,
        title: "redmi 9c",
        category: "xiaomi",
        price: 700,
        img: "/myImage/phones/xiaomis/xiaomi-redmi-9c_1_2.jpg",
      },
      {
        id: 14,
        title: "xiaomi x3 pro",
        category: "xiaomi",
        price: 800,
        img: "/myImage/phones/xiaomis/xiaomi-x3-pro_2.jpg",
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
    // console.log(item);

    // return `<article class="menu-item">
    //       <img src=${item.img} alt=${item.title} class="photo" />
    //       <div class="item-info">
    //         <header>
    //           <h4>${item.title}</h4>
    //           <h4 class="price">$${item.price}</h4>
    //         </header>
    //         <p class="item-text">
    //           ${item.desc}
    //         </p>
    //       </div>
    //     </article>`;

        return `
        <article class="menu-item col-md-4 col-12 mt-5">
            <img src="${item.img}" alt="${item.title}" class="photo" />
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
