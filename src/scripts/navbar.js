var sidebarEl = document.getElementById('sidebar')
var sidebarLinks = document.querySelector('#sidebar a')
var toggleBtn = document.getElementById('opennav')

function toggleSidebar() {
    if (sidebarLinks.style.marginLeft == '-90px') {
            sidebarLinks.style.marginLeft = '0px';} else {
            sidebarLinks.style.marginLeft = '-90px'
        }
}

