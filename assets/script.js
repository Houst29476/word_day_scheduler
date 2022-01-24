// ------ Elements ------ //
let currentDayEl = $("#currentDay");
let containerEl = $(".container");
let availableTime = {};

// --------- Current Time display with function ----------- //
let currentTime = moment().hour();

function currentTimeNow() {
    let currentDisplay = moment().format("MMMM Do YYYY, h:mm:ss a");
    currentDayEl.html(currentDisplay);
}

setInterval(currentTimeNow, 1000);