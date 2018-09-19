//A script to handle linking the dropdown with the carousels

var notSelectedString = document.getElementById("dropdownMenuButton").innerText;
var interestIds = Array.from(document.getElementsByClassName("dropdown-item")).map(item => item.id);
var currentlySelectedLocation = -1;
interestIds.forEach(interestId => {
    var element = document.getElementById(interestId);
    element.onclick = () => {
        function switchTexts(e) {
            var oldText = document.getElementById("dropdownMenuButton").innerText;
            document.getElementById("dropdownMenuButton").innerText = e.innerText;
            e.innerText = oldText;
        }
        var newSelection = interestIds.indexOf(interestId);
        if (currentlySelectedLocation === -1) {
            currentlySelectedLocation = newSelection;
        } else if (newSelection === currentlySelectedLocation) {
            currentlySelectedLocation = -1;
        } else {
            switchTexts(document.getElementById(interestIds[currentlySelectedLocation]));
            currentlySelectedLocation = newSelection;
        }
        switchTexts(element);
        var currentText = document.getElementById("dropdownMenuButton").innerText;
        Array.from(document.getElementsByClassName("interestContainer")).forEach(carousel => carousel.style.display = "none");
        if (currentText !== notSelectedString) {
            document.getElementById(interestId.replace("dropDownOption", "carousel")).style.display = "";
        }
    }
});