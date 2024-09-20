(function ($) {
  ("use strict");

  // Sticky Menu
  function hasStickyMenu() {
    var header = document.querySelector(".header-primary");

    if (header) {
      //Sticky Menu
      window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      });
    }
  }
  hasStickyMenu();

  function QuillExist() {
    const editorOne = document.querySelector("#editor");
    const editorTwo = document.querySelector("#editor-seo");

    // Editor
    var toolbarOptions = [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "link"], // toggled buttons
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
    ];

    if (editorOne) {
      let quillEditorOne = new Quill("#editor", {
        modules: {
          toolbar: toolbarOptions,
        },
        theme: "snow",
      });
    } else if (editorTwo) {
      let quillEditorTwo = new Quill("#editor-seo", {
        modules: {
          toolbar: toolbarOptions,
        },
        theme: "snow",
      });
    } else {
      return false;
    }
  }

  QuillExist();

  // Nice Select
  $(".select-dropdown").niceSelect();

  var featureCategory = new Swiper(".featureCategory", {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 10,
    navigation: {
      nextEl: ".featureNext",
      prevEl: ".featurePrev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 24,
      },
    },
  });

  var serviceSlider = new Swiper(".serviceSlider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".serviceNext",
      prevEl: ".servicePrev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
  });

  var recentJob = new Swiper(".recentJob", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".recentJobNext",
      prevEl: ".recentJobPrev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
  });

  // Testimonial Slider Top
  let testimonialsSlider = new Swiper(".testimonialsSlider", {
    spaceBetween: 30,
    centeredSlides: true,
    freeMode: true,
    speed: 10000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1,
    allowTouchMove: false,
    breakpoints: {
      1: {
        slidesPerView: 1.1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2.5,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3.5,
      },
      1600: {
        slidesPerView: 4,
      },
      1900: {
        slidesPerView: 4.5,
      },
    },
  });
  // Testimonial Slider Bottom
  let testimonialsSliderBottom = new Swiper(".testimonialsSliderBottom", {
    spaceBetween: 30,
    centeredSlides: true,
    freeMode: true,
    speed: 8000,
    autoplay: {
      delay: 1,
      reverseDirection: true,
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1,
    allowTouchMove: false,

    breakpoints: {
      1: {
        slidesPerView: 1.1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2.5,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3.5,
      },
      1600: {
        slidesPerView: 4,
      },
      1900: {
        slidesPerView: 4.5,
      },
    },
  });

  // Services Details
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 25,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  // AOS
  AOS.init({
    offset: 250,
  });

  //Counter up
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  // Lightbox Gallery
  var lightboxGallery = GLightbox({
    selector: ".gallery",
    touchNavigation: true,
    loop: true,
  });

  var lightbox = GLightbox({
    selector: ".video-popup",
    touchNavigation: true,
    loop: false,
  });

  document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector(".grid");

    if (grid) {
      imagesLoaded(grid, function () {
        var iso = new Isotope(grid, {
          itemSelector: ".grid-item",
          layoutMode: "fitRows",
          filter: "*",
        });

        var filters = document.querySelector(".filters-btns");
        filters.addEventListener("click", function (event) {
          if (!event.target.matches("button")) return;
          var filterValue = event.target.getAttribute("data-filter");
          iso.arrange({ filter: filterValue });
        });

        var filterButtons = document.querySelector(".filters-btns");
        var buttons = filterButtons.querySelectorAll("button");

        buttons.forEach(function (button) {
          button.addEventListener("click", function () {
            // Remove active class from all buttons
            buttons.forEach(function (btn) {
              btn.classList.remove("active");
            });

            // Add active class to clicked button
            this.classList.add("active");

            var filterValue = this.getAttribute("data-filter");
            iso.arrange({ filter: filterValue });
          });
        });
      });
    }
  });

  //Dashboard Sidebar
  function dashboardSidebar() {
    const links = document.querySelectorAll(".sidebar-nav li a");

    if (links) {
    }
    links.forEach((link) => {
      link.addEventListener("click", function () {
        links.forEach((link) => link.classList.remove("active"));
        this.classList.add("active");
      });
    });
  }
  dashboardSidebar();
})(jQuery, window);
