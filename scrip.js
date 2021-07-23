  // search-box open close js code
  let navbar = document.querySelector(".navbar");
  let searchBox = document.querySelector(".search-box .bx-search");
  // let searchBoxCancel = document.querySelector(".search-box .bx-x");

  searchBox.addEventListener("click", () => {
      navbar.classList.toggle("showInput");
      if (navbar.classList.contains("showInput")) {
          searchBox.classList.replace("bx-search", "bx-x");
      } else {
          searchBox.classList.replace("bx-x", "bx-search");
      }
  });

  // sidebar open close js code
  let navLinks = document.querySelector(".nav-links");
  let menuOpenBtn = document.querySelector(".navbar .bx-menu");
  let menuCloseBtn = document.querySelector(".nav-links .bx-x");
  menuOpenBtn.onclick = function() {
      navLinks.style.left = "0";
  }
  menuCloseBtn.onclick = function() {
      navLinks.style.left = "-100%";
  }


  // sidebar submenu open close js code
  let htmlcssArrow = document.querySelector(".htmlcss-arrow");
  htmlcssArrow.onclick = function() {
      navLinks.classList.toggle("show1");
  }
  let moreArrow = document.querySelector(".more-arrow");
  moreArrow.onclick = function() {
      navLinks.classList.toggle("show2");
  }
  let jsArrow = document.querySelector(".js-arrow");
  jsArrow.onclick = function() {
      navLinks.classList.toggle("show3");
  }


  // menu sổ xuống accrodient 
  $(document).ready(function() {
          $('.ngu.active .noi-dung').slideDown()
          $('.td1').click(function() {

              $(this).parent().toggleClass('active')

              $(this).parent().children('.noi-dung').slideToggle()
          })

      })
      /////
      // Ripple Effect JavaScript Code
  let buttons = document.querySelectorAll(".button");

  for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", (e) => {
          e.preventDefault(); // preventing form submitting

          let overlay = document.createElement('span'); //creating a tag(span)
          overlay.classList.add("overlay1"); //adding a class inside the span
          e.target.appendChild(overlay); //adding overlay tag inside the anchor tag at in HTML

          let xValue = e.clientX - e.target.offsetLeft; //by this we get perfect value where we will click
          let yValue = e.clientY - e.target.offsetTop; //by this we get perfect value where we will click

          overlay.style.left = xValue + "px"; //changing the position of the overlay according to our clicks on the button
          overlay.style.top = yValue + "px"; //changing the position of the overlay according to our clicks on the button
      });
  }


  // load more
  $(document).ready(function() {
      $('.load').click(function() {
          $('.more').toggle('slow')
      })

  })