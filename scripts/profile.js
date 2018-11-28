window.onload = function() {
  let SIDEBAR_IS_VISIBLE = true;
  const sidebarToggleButton = document.querySelector('#sidebar-info button');
  const sidebarClosedIcon = document.querySelector(
    '#sidebar-info button svg:first-child',
  );
  const sidebarOpenIcon = document.querySelector(
    '#sidebar-info button svg:last-child',
  );
  const nameInSideBar = document.querySelector('#sidebar-info div');
  const sidebarMenu = document.querySelector('#sidebar-nav');
  const sidebarInfo = document.querySelector('#sidebar-info');
  const sidebar = document.querySelector('section:first-child');
  const menuItems = [...document.querySelectorAll('#sidebar-nav li')];
  const emailForm = document.querySelector('#email-form');
  const personalForm = document.querySelector('#personal-form');
  const formHeader = document.querySelector('section:last-child header h2');

  sidebarToggleButton.onclick = handleSidebarToggle;
  menuItems.forEach((menuItem) => {
    menuItem.onclick = handleMenuItemClick;
  });

  function handleSidebarToggle(e) {
    SIDEBAR_IS_VISIBLE = !SIDEBAR_IS_VISIBLE;

    if (SIDEBAR_IS_VISIBLE) {
      sidebarClosedIcon.style.display = 'none';
      sidebarOpenIcon.style.display = 'block';
      // show side bar
      nameInSideBar.style.display = 'block';
      sidebarMenu.style.display = 'block';
      sidebarInfo.style.height = '15vh';
      sidebar.style.borderRight = '1px solid rgba(0, 0, 0, 0.1)';
    } else {
      sidebarOpenIcon.style.display = 'none';
      sidebarClosedIcon.style.display = 'block';
      // hide sidebar
      nameInSideBar.style.display = 'none';
      sidebarMenu.style.display = 'none';
      sidebarInfo.style.height = '23vh';
      sidebar.style.borderRight = 'none';
    }
  }

  function handleMenuItemClick(e) {
    const itemText = e.target.textContent;
    // remove active class from any of the other elements
    menuItems.forEach((menuItem) => {
      if (menuItem.classList.contains('active')) {
        menuItem.classList.remove('active');
      }
    });
    // add active class to selected item
    e.target.classList.add('active');
    if (itemText === 'Personal') {
      emailForm.style.display = 'none';
      personalForm.style.display = 'block';
      formHeader.textContent = 'Personal Information';
    } else if (itemText === 'Email') {
      emailForm.style.display = 'block';
      personalForm.style.display = 'none';
      formHeader.textContent = 'Change Email Address';
    }
  }
};
