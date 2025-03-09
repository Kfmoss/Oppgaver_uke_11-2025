// Oppgave 1: Endre bakgrunnsfargen til teksten
// Det finnes en liste med flere farger

function changeBackgroundColor() {
    const colors = ["red", "blue", "green", "yellow", "purple"];
    // Skriv koden din her!!
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("text").style.backgroundColor = randomColor;
}

// Oppgave 2: Legge til tekst og endre størrelse på et p-element
function modifyParagraph() {
    let paragraph = document.querySelector(".paragraph");
    //skriv koden din her!!
    paragraph.innerText = "Dette er en ny tekst lagt til med JavaScript.";
    paragraph.style.fontSize = "20px";
}

// Oppgave 3: Lage en to-do liste
function addToDo() {
    let selectedWord = document.querySelector("#wordList").value;
    //skriv koden din her!!
    if (selectedWord) {
        let newItem = document.createElement("li");
        newItem.innerText = selectedWord;
        document.getElementById("todoList").appendChild(newItem);
    }
}

// Oppgave 4: Lage en kalender med eventer
function addEvent(day) {
    let eventText = prompt("Legg til en hendelse:");
    //skriv koden din her!!
    if (eventText) {
        let eventItem = document.createElement("p");
        eventItem.innerText = eventText;
        document.getElementById(day).appendChild(eventItem);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("themeToggle");

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");

        // Lagre brukerens valg i localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // Sjekk lagret tema og bruk det
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme + "-mode");
    } else {
        document.body.classList.add("light-mode"); // Standard modus
    }
});


