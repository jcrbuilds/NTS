var sidebarEl = document.getElementById('sidebar')
var sidebarLinks = document.querySelector('#side-links')
var toggleBtn = document.querySelector('.closebtn')

function toggleNav() {
        if (sidebarLinks.style.marginLeft === '-150px') {
            sidebarLinks.style.marginLeft = '0px';
            } else {
            sidebarLinks.style.marginLeft = '-150px'
        }
}

