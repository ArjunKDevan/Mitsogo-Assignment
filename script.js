function toggleSidebar(){
    let toggle = document.querySelector('.toggle');
    let sidebar = document.querySelector('.sidebar-wrapper');
    let header = document.querySelector('.top-bar');
    let mainContent = document.querySelector('.right-page-top');
    let sidebarBrand = document.querySelector('.sidebar__brand');
  
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');
    header.classList.toggle('active');
    mainContent.classList.toggle('active');
    sidebarBrand.classList.toggle('active');
   
  }