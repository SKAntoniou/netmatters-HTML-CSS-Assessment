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
  let wasSticky = false;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > stickyHeader.offsetHeight) {
      // Make fixed (off screen) after scroll past header height
      stickyHeader.classList.add("sticky");
      stickyHeaderContainer.style.height = stickyHeaderHeight;

      if (currentScroll > lastScroll) {
        // Scrolling down
        if (wasSticky) {
          stickyHeader.classList.add("hide");
        }
        stickyHeader.classList.remove("show");

      } else if (currentScroll < lastScroll) {
        // Scrolling up
        stickyHeader.classList.add("show");
        stickyHeader.classList.remove("hide");
        wasSticky = true;
      }

    } else if (currentScroll === 0){
      // Make relative again
      stickyHeader.classList.remove("sticky");
      stickyHeader.classList.remove("show");
      stickyHeader.classList.remove("hide");
      wasSticky = false;
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


  // Buttons Logic for Page Changes
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

  // Extra Buttons Logic for Sections
  for (let i = 0, j = $('.module-privacy-policy-popup-settings-button-toggle').children().length; i < j; i += 2) {
    // Will be selecting them in pairs.
    // Even numbers of i will be disable so i = disable
    // Odd numbers of i will be enable so i + 1 = enable
    const disableButton = $('.module-privacy-policy-popup-settings-button-toggle').children()[i];
    const enableButton = $('.module-privacy-policy-popup-settings-button-toggle').children()[(i + 1)];

    // Default Value
    enableButton.classList.add('active');

    disableButton.addEventListener('click', () => {
      enableButton.classList.remove('active');
      disableButton.classList.add('active');
    })

    enableButton.addEventListener('click', () => {
      disableButton.classList.remove('active');
      enableButton.classList.add('active');
    })
  }
  
  // Toggle More detailed information in the table below it.
  let detailedPreferences = $('.module-privacy-policy-popup-settings-table-detailed');
  let showDetailButton = $('.module-privacy-policy-popup-settings-button-detailed-toggle .show,.module-privacy-policy-popup-settings-button-detailed-toggle .hide') 
  $('.module-privacy-policy-popup-settings-button-detailed-toggle').click( () => {
    detailedPreferences.toggle();
    showDetailButton.toggle();
  })
}

// Contact-us page =========================================================
// Toggle out of hours IT Support drop-down
$("#toggle-out-of-hours").click( () => {
  $("#toggle-out-of-hours-details").slideToggle();
})

// Form Validation and checks. ======================================
const contactForm = document.querySelector("#contact-form");
// Toggle marketing custom icon checkbox ======================
const formCheckboxMarketing = contactForm.querySelector(".form-checkbox-marketing");
// Set default checkbox to unchecked
formCheckboxMarketing.querySelector("input").checked = false;

formCheckboxMarketing.querySelector("label").addEventListener("click", () => {
  const icon = formCheckboxMarketing.querySelector("label").querySelector("span");
  const formCheckbox = formCheckboxMarketing.querySelector("input");
  if (formCheckbox.checked) {
    icon.classList.add("icon-checkbox-unchecked");
    icon.classList.remove("icon-checkbox-checked");
  } else {
    icon.classList.add("icon-checkbox-checked");
    icon.classList.remove("icon-checkbox-unchecked");
  }
})

// Form Validation ===========================
const requiredFields = contactForm.querySelectorAll(".required");
const emailRegex = /^\S+@\S+\.\S+$/;
const telRegex = /^0[0-9]{10}$/;
// Each field validation
requiredFields.forEach( (currentValue) => {
  if (currentValue.type === 'text' || currentValue.nodeName === 'TEXTAREA') {

    currentValue.addEventListener("focusout", () => {
      if (currentValue.value === "") {
        currentValue.classList.add("error");
      } else {
        currentValue.classList.remove("error");
      }
    });

  } else if (currentValue.type === 'email') {

    currentValue.addEventListener("focusout", () => {
      if (!emailRegex.test(currentValue.value.toLowerCase())) {
        currentValue.classList.add("error");
      } else {
        currentValue.classList.remove("error");
      }
    });

  } else if (currentValue.type === 'tel') {

    currentValue.addEventListener("focusout", () => {
      if (!telRegex.test(currentValue.value)) {
        currentValue.classList.add("error");
      } else {
        currentValue.classList.remove("error");
      }
    });

  }
})

// Form Submit
contactForm.addEventListener("submit", event => {
  let formValidArray = Array(requiredFields.length);
  formValidArray.forEach( (currentValue) => {
    currentValue = false;
  });

  requiredFields.forEach( (currentValue, index) => {
    if (currentValue.type === 'text' || currentValue.nodeName === 'TEXTAREA') {
      if (currentValue.value === "") {
        currentValue.classList.add("error");
        formValidArray[index] = false;
      } else {
        formValidArray[index] = true;
      }
    } else if (currentValue.type === 'email') {
      if (!emailRegex.test(currentValue.value.toLowerCase())) {
        currentValue.classList.add("error");
        formValidArray[index] = false;
      } else {
        formValidArray[index] = true;
      }
    } else if (currentValue.type === 'tel') {
      if (!telRegex.test(currentValue.value)) {
        currentValue.classList.add("error");
        formValidArray[index] = false;
      } else {
        formValidArray[index] = true;
      }
    }
  });

  let formValidCount = 0;
  formValidArray.forEach( (currentValue) => {
    if (currentValue) {
      formValidCount++;
    }
  });
  
  if (formValidCount !== requiredFields.length) {
    event.preventDefault();
  }
});