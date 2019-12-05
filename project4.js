let picturesRound = document.querySelector("#pictures");
let aboutUSA = document.querySelector("#USA");
let geographyRound = document.querySelector("#geography");


picturesRound.addEventListener("click", function openPictures() {
    // alert("u clicked pic round")
    // let pictureContainer = document.querySelector(".container");
    // pictureContainer.innerHTML
    // document.querySelector(".container").innerHTML = "pictures round"
    let newImage = document.createElement("IMG");
    newImage.setAttribute("src", questionOne.picture);
    newImage.setAttribute("width", "300");
    newImage.setAttribute("margin", "300");
    document.body.appendChild(newImage);
});


aboutUSA.addEventListener("click", function openUSA() {
    // alert("u clicked USA round")
    document.querySelector(".container").innerHTML = document.createElement("div");
    // let parent = document.createElement("div");
    // let p = document.createElement("p");
    // parent.append("cool guy");
    // console.log(parent.textContent)
});

geographyRound.addEventListener("click", function openGeography() {
    // alert("u clicked geogr round")
    document.querySelector(".container").innerHTML = document.createElement("IMG");
    let pic = document.createElement("IMG");
    pic.setAttribute("src", questionOne.picture);
    pic.setAttribute("width", "300");
    document.body.appendChild(pic);
});



class PictureRound {
    constructor(picture, question, answerOptions, correctAnswer) {
        this.picture = picture;
        this.question = question;
        this.answerOptions = answerOptions;
        this.correctAnswer = correctAnswer;
    }
};
const questionOne = new PictureRound("https://images.unsplash.com/photo-1522459346908-436e555a0e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80", "Who is the person on the picture?", ["John", "Bob", "Luke", "Grahm"], "Luke");
console.log(questionOne)
