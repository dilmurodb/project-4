
let allQuestions = [
    {
    picture: "https://images.unsplash.com/photo-1522459346908-436e555a0e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80",
    question: "What is the name of the building on the picture?",
    answerOptions: { A: "Guggenheim, USA", B: "Louvre, France", C: "Smithsonian National Museum, USA", D: "The British Museum, UK" },
    correctAnswer: "Louvre, France"
}, 
    {
    picture: "https://images.unsplash.com/photo-1557094692-0a39333c1025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
    question: "What is the name of the building on the picture?",
    answerOptions: { A: "Acropolis, Greece", B: "Marcello Theater, Italy", C: "Temple of Artemis, Turkey", D: "Hadrian's Wall, England"},
    correctAnswer: "Acropolis, Greece"
}, 
    {
    picture: "https://images.unsplash.com/photo-1565861388980-5323444cbb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    question: "What is the name of the building on the picture?",
    answerOptions: { A: "Zytglogge, Switzerland", B: "Old Town Hall Tower, Prague", C: "Galata Tower, Turkey", D: "Palazzo Vecchio, Italy"},
    correctAnswer: "Galata Tower, Turkey"
}, 
    {
    picture: "https://images.unsplash.com/photo-1541791135449-168d91a780a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80",
    question: "What is the name of the building on the picture?",
    answerOptions: { A: "Hassan II Mosque, Casablanca, Morocco", B: "The Blue Mosque, Turkey", C: "Kul Sharif Mosque, Russia", D: "Taj Mahal, India"},
    correctAnswer: "Taj Mahal, India"
}, 
    {
    picture: "https://images.unsplash.com/photo-1551352912-484163ad5be9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    question: "What is the name of the building on the picture?",
    answerOptions: { A: "St. Paul's Cathedral, UK", B: "Sydney Opera House, Australia", C: "Palace of Versailles, France", D: "Royal Exhibition Building, Australia"},
    correctAnswer: "Sydney Opera House, Australia"
}, 
    
]

let score = 0;
let count = 0; 

let nextButton = document.querySelector("#nextbutton");
nextButton.addEventListener("click", function nextTrivia() {
    if (count < 4) {
        count++
    } else {
        alert("Your score is: "+score+" out of 5")
        count = 0
        score = 0
    }
    
    document.querySelector("#picture").src = allQuestions[count].picture;
    document.querySelector("#question").innerText = allQuestions[count].question;
    document.querySelector("#optionA").innerText = allQuestions[count].answerOptions.A;
    document.querySelector("#optionB").innerText = allQuestions[count].answerOptions.B;
    document.querySelector("#optionC").innerText = allQuestions[count].answerOptions.C;
    document.querySelector("#optionD").innerText = allQuestions[count].answerOptions.D;
    
})

        document.querySelector("#optionA").addEventListener("click", function checkA() {
            if (allQuestions[count].answerOptions.A === allQuestions[count].correctAnswer) {
                alert("you are correct!");
                score++
            } else {alert("incorrect")};
        })

        document.querySelector("#optionB").addEventListener("click", function checkB() {
            if (allQuestions[count].answerOptions.B === allQuestions[count].correctAnswer) {
                alert("you are correct!");
                score++
            } else {alert("incorrect")};
        })

        document.querySelector("#optionC").addEventListener("click", function checkC() {
            if (allQuestions[count].answerOptions.C === allQuestions[count].correctAnswer) {
                alert("you are correct!");
                score++
            } else {alert("incorrect")};
        })

        document.querySelector("#optionD").addEventListener("click", function checkD() {
            if (allQuestions[count].answerOptions.D === allQuestions[count].correctAnswer) {
                alert("you are correct!");
                score++
            } else {alert("incorrect")};
        })