// ------ Elements ------ //
var currentDayEl = $("#currentDay");
var containerEl = $(".container");
var availableTime = {};

// --------- Current Time display with function ----------- //
var currentTime = moment().hour();

function currentTimeNow() {
    var currentDisplay = moment().format("MMMM Do YYYY, h:mm:ss a");
    currentDayEl.html(currentDisplay);
}

setInterval(currentTimeNow, 1000);

// -------- Local Storage and Time Slots ------------ //
var getLocal = localStorage.getItem("availableTime");
if (getLocal) {
    availableTime = JSON.parse(getLocal);
} else {
    availableTime = {
        "9": {
            time: "9",
            value: ""
        },
        "10": {
            time: "10",
            value: ""
        },
        "11": {
            time: "11",
            value: ""
        },
        "12": {
            time: "12",
            value: ""
        },
        "13": {
            time: "13",
            value: ""
        },
        "14": {
            time: "14",
            value: ""
        },
        "15": {
            time: "15",
            value: ""
        },
        "16": {
            time: "16",
            value: ""
        },
        "17": {
            time: "17",
            value: ""
        }
    };
}

