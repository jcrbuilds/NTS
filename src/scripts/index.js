// var saveEditBtn = document.getElementById('save-edit-button')

// function saveEdit() {

// }

var sidebarEl = document.getElementById('sidebar')
var toggleBtn = document.getElementById('opennav')

function toggleSidebar() {
    var sidebarEl = document.getElementById('sidebarmain');
    var toggleBtn = document.getElementsByName('opennav');

    if (sidebarEl.style.width === '200px') {
            sidebarEl.style.width = '0'
        } else {
            sidebarEl.style.width = '200px'
        }
}