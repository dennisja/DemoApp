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

  sidebarToggleButton.onclick = handleSidebarToggle;

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
};
