// Side Navigation opened with the hamburger menu - Vanilla JS
{
  const headerHamburger = document.getElementById('header-hamburger');
  const bodyContent = document.getElementsByClassName('body-content')[0];
  const bodyContentCover = document.getElementsByClassName('body-content-cover')[0];

  let expanded = false;
  function expandSideNav() {
    bodyContent.classList.toggle('body-content-move');
    bodyContentCover.classList.toggle('body-content-cover-move');
    expanded = !expanded;
  }

  headerHamburger.addEventListener('click', (event) => {
    expandSideNav();
    event.stopPropagation(); // Stop body triggering when hamburger is triggered.
  });
  bodyContentCover.addEventListener('click', () => {
    if (expanded) { expandSideNav(); }
  });
}

// Sticky Header - Vanilla JS
{
  const stickyHeader = document.getElementsByClassName('sticky-header')[0];
  const stickyHeaderContainer= document.getElementsByClassName('sticky-header-container')[0];
  const stickyHeaderHeight = `${stickyHeader.offsetHeight - 2}px`;
  stickyHeaderContainer.style.height = stickyHeaderHeight;
  let lastScroll = 0;
  let isSticky = false;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    // Make fixed (off screen) after scroll past header height
    if (currentScroll > stickyHeader.offsetHeight) {
      stickyHeader.classList.add("sticky");

      if (currentScroll > lastScroll) {
        // Scrolling down
        if (isSticky) {
          stickyHeader.classList.remove("show");
          isSticky = false;
        }
      } else if (currentScroll < lastScroll) {
        // Scrolling up
        if (!isSticky) {
          stickyHeader.classList.add("show");
          isSticky = true;
        }
      }
    } else {
      // Make relative again
      stickyHeader.classList.remove("sticky");
      stickyHeader.classList.remove("show");
    }
    lastScroll = currentScroll;
  });
}

// Banner Slider - jQuery Plugin - slick
// $('.banner-flex').slick({
//   swipeToSlide: true,
//   autoplay: true,
//   autoplaySpeed: 5000,
//   arrows: false,
//   dots: true,
//   variableWidth: true
// });


// Notes for Banner Slider
/*
Slides switch every 5 seconds
If hovered over, pause slider and reset timer
Slides left
*/