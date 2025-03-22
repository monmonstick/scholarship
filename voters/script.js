let goingList = JSON.parse(localStorage.getItem("goingList")) || [];
let notGoingList = JSON.parse(localStorage.getItem("notGoingList")) || [];

function signUp(isGoing) {
    let name = document.getElementById("nameInput").value.trim();

    if (name === "") {
        alert("Pakilagay ang pangalan.");
        return;
    }

    if (isGoing) {
        goingList.push(name);
        goingList.sort();
    } else {
        notGoingList.push(name);
        notGoingList.sort();
    }

    saveData();
    updateLists();
    document.getElementById("nameInput").value = ""; // Clear input field
}

function updateLists() {
    let goingUl = document.getElementById("goingList");
    let notGoingUl = document.getElementById("notGoingList");

    goingUl.innerHTML = "";
    notGoingUl.innerHTML = "";

    goingList.forEach(name => {
        let listItem = document.createElement("li");
        listItem.textContent = name;
        goingUl.appendChild(listItem);
    });

    notGoingList.forEach(name => {
        let listItem = document.createElement("li");
        listItem.textContent = name;
        notGoingUl.appendChild(listItem);
    });
}

function saveData() {
    localStorage.setItem("goingList", JSON.stringify(goingList));
    localStorage.setItem("notGoingList", JSON.stringify(notGoingList));
}

updateLists(); // Load existing data on 