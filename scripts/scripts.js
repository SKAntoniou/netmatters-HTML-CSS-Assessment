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
// Maybe add a buffer on scrolling up to not immediately show on tiny inputs.
{
  const stickyHeader = document.getElementsByClassName('sticky-header')[0];
  const stickyHeaderContainer = document.getElementsByClassName('sticky-header-container')[0];

  // There is probably a better way to do this. Will come back to this if I have time.
  // Placeholder header height to not move the whole page.
  let stickyHeaderHeight = `${stickyHeader.offsetHeight - 2}px`;
  stickyHeaderContainer.style.height = stickyHeaderHeight;
  // Media Query List for placeholder header.
  const mqs = ["480px", "768px", "992px", "1260px"];
  for (let i = 0, j = mqs.length; i < j; i++) {
    window.matchMedia(`(max-width: ${mqs[i]})`).addEventListener('change', () => {
      stickyHeaderHeight = `${stickyHeader.offsetHeight - 2}px`;
      stickyHeaderContainer.style.height = stickyHeaderHeight;
    })
  }

  let lastScroll = 0;
  let isSticky = false;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    // Make fixed (off screen) after scroll past header height

    // 2 Bugs and counting...
    // BUG TO FIX, when scrolling up add a condition for between currentscroll and stickyheaderheight. if already sticky, don't make relative until you hit the top of the page, also if you scroll down at that point, remove all the classes and transistion back.
    if (currentScroll > stickyHeader.offsetHeight) {
      stickyHeader.classList.add("sticky");
      stickyHeaderContainer.style.height = stickyHeaderHeight;

      if (currentScroll > lastScroll) {
        // Scrolling down
        if (isSticky) {
          stickyHeader.classList.add("hide"); // may need removing. but need to put it after already header has been shown sticky. prob need a variable has been sticky. also isSticky is useless now.
          stickyHeader.classList.remove("show");
          isSticky = false;
        }
      } else if (currentScroll < lastScroll) {
        // Scrolling up
        if (!isSticky) {
          stickyHeader.classList.add("show");
          stickyHeader.classList.remove("hide");
          isSticky = true;
        }
      }
    } else {
      // Make relative again
      stickyHeader.classList.remove("sticky");
      stickyHeader.classList.remove("show");
      stickyHeader.classList.remove("hide");
    }
    lastScroll = currentScroll;
  });
}

// Banner Slider - jQuery Plugin - slick
$('.banner').slick({
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: true,
  dotsClass: 'banner-dots',
  variableWidth: true,
  centerMode: true,
});


// Cookies Pop-up - jQuery Vanilla
{
  // Variables and functions to make it cleaner.
  const cookiesSmall = $('.module-privacy-policy-popup-initial');
  const cookiesLarge = $('.module-privacy-policy-popup-settings');
  function htmlFormatting(mod) {
    if (mod === 'add') {
      $('body').addClass('module-privacy-policy-popup-settings-html-settings');
      $(':root').addClass('module-privacy-policy-popup-settings-html-settings');
    } else if (mod === 'remove') {
      $('body').removeClass('module-privacy-policy-popup-settings-html-settings');
      $(':root').removeClass('module-privacy-policy-popup-settings-html-settings');
    } else {
      console.log("Function to format HTML for the large cookies pop-up was called wrong.")
    }
  }


  // Page Loading behaviour
  // Normal behaviour after first load. In case popups were cached or anything.
  cookiesSmall.hide();
  cookiesLarge.hide();
  htmlFormatting('remove');
  // Initial behaviour on first page load
  if (!localStorage.getItem('cookiesShown')) {
    cookiesSmall.show();
  }


  // Buttons Logic
  // Click Manage Consent Button to show initial cookies popup.
  $('.btn-manage-consent').click( () => {
    cookiesSmall.show();
  });
  // Click accept button to hide it.
  $('.module-privacy-policy-popup-initial-button-accept').click( () => {
    cookiesSmall.hide();
    // Add cookie to remember the cookies have been accepted. True is just a placeholder, the value of 'cookiesShown' could be anything.
    localStorage.setItem('cookiesShown', true);
  });
  // Click Change settings to go to next pop up
  $('.module-privacy-policy-popup-initial-button-change').click( () => {
    cookiesSmall.hide();
    cookiesLarge.show();
    htmlFormatting('add');
  });
  // Cancel button on big pop-up will take you back to the initial pop-up
  $('.module-privacy-policy-popup-settings-button-cancel').click( () => {
    cookiesSmall.show();
    cookiesLarge.hide();
    htmlFormatting('remove');
  });
  // Continue button on big pop-up will hide all popups.
  $('.module-privacy-policy-popup-settings-button-continue').click( () => {
    cookiesSmall.hide();
    cookiesLarge.hide();
    htmlFormatting('remove');
    localStorage.setItem('cookiesShown', true);
  });
}