// Side Navigation opened with the hamburger menu
{
  const headerHamburger = document.getElementById('header-hamburger');
  const sidenavContainer = document.getElementsByClassName('sidenav')[0];
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
