// var saveEditBtn = document.getElementById('save-edit-button')

// function saveEdit() {

// }

// Events Script

window.onload = async () => {
    await updateEvents();
};

async function updateEvents() {
    const Response = await fetch("https://cors-anywhere.herokuapp.com/api.truckersmp.com/v2/vtc/51501/events", {
        method: 'GET',
        Headers: {
            accept: 'application/json'
        }
    });
    const events = await Response.json()
    var event = events.response

function DatePassed(date) {
    const currentDate = new Date();
    return date < currentDate
}

var Count = 0

for (var i = 0; i < event.length; i++){

    const Passed = (DatePassed(new Date(event[i].start_at)))
    if (!Passed && Count < 3){

    const eventsHTML = `
            <img class="event-banner" src="${event[i].banner}">
                <a href="https://truckersmp.com/events/${event[i].id}" class="eventnme">${event[i].name}
                    <span class="tooltiptext">${event[i].name}</span>
                </a>
                <p><i class="fa fa-calendar-alt"></i> ${event[i].start_at}<br>
                    <i class="fa fa-gamepad"></i> ${event[i].game}<br>
                    <i class="fa fa-server"></i> ${event[i].server.name}<br>
                    <i class="fa fa-map"></i> ${event[i].departure.city + ' -> ' + event[i].arrive.city} <br>
                </p>
                <a class="viewmore" href="https://truckersmp.com/events/${event[i].id}">View More</a>
    `
    const NewDiv = document.createElement('div')
    NewDiv.setAttribute('id', 'event')
    NewDiv.setAttribute('event-date', event[i].start_at)
    NewDiv.innerHTML = eventsHTML
    document.getElementById('events').appendChild(NewDiv)

    Count = Count + 1
    console.log(Count)

    } 

    
} 
};