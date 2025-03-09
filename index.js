// Oppgave 1: Endre bakgrunnsfargen til teksten
// Det finnes en liste med flere farger

function changeBackgroundColor() {
    const colors = ["red", "blue", "green", "yellow", "purple"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("text").style.backgroundColor = randomColor;
}

// Oppgave 2: Legge til tekst og endre størrelse på et p-element
function modifyParagraph() {
    let paragraph = document.querySelector(".paragraph");
    paragraph.innerText = "Dette er en ny tekst lagt til med JavaScript.";
    paragraph.style.fontSize = "20px";
}

// Oppgave 3: Lage en to-do liste
function addToDo() {
    let selectedWord = document.querySelector("#wordList").value;
    if (selectedWord) {
        let newItem = document.createElement("li");
        newItem.innerText = selectedWord;
        document.getElementById("todoList").appendChild(newItem);
    }
}

// Oppgave 4: Lage en kalender med eventer
function addEvent(day) {
    let eventText = prompt("Legg til en hendelse:");
    if (eventText) {
        let eventItem = document.createElement("p");
        eventItem.innerText = eventText;
        document.getElementById(day).appendChild(eventItem);
    }
}