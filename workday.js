var today = moment().format("dddd MMMM YYYY");
document.getElementById("currentDay").append(today);
var currentHour = moment().hour();
console.log(currentHour);

var getHourclass = function(hour) {
    if(hour < currentHour){
        return "past"
    } else if(hour > currentHour) {
        return "future"
    } else {
        return "present"
    }
}

var setHourblock = function(hourblock) {
    var hourID = Number.parseInt(hourblock.id)
    console.log(hourID);
    var saveButton = hourblock.querySelector(".btn");
    console.log(saveButton);
    var textArea = hourblock.querySelector("input");
    var hourClass = getHourclass(hourID);
    textArea.classList.add(hourClass);
    var saveTasks = localStorage.getItem(hourID);
    textArea.value = saveTasks;
    
    saveButton.addEventListener("click", function(){
        let taskInput = textArea.value
        console.log(taskInput);
        localStorage.setItem(hourID, (taskInput))
    })
}
document.querySelectorAll(".row").forEach(setHourblock)