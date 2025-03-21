// Side Navigation opened with the hamburger menu
{
  const headerHamburger = document.getElementById('header-hamburger');
  const sidenavContainer = document.getElementsByClassName('sidenav')[0];
  const bodyContent = document.getElementsByClassName('body-content')[0];

  let expanded = false;
  function expandSideNav() {
    sidenavContainer.classList.toggle('sidenav-expand');
    bodyContent.classList.toggle('body-content-move');
    expanded = !expanded;
  }

  headerHamburger.addEventListener('click', (event) => {
    expandSideNav();
    event.stopPropagation(); // Stop body triggering when hamburger is triggered.
  });
  bodyContent.addEventListener('click', () => {
    if (expanded) { expandSideNav(); }
  });
}
