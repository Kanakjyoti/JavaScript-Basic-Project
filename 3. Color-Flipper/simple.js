const colorName =["rgb(255, 99, 71)","#3cb371","LightGray","SlateBlue","rgb(255, 194, 114)"];
const btn= document.getElementById("btn");
const color= document.querySelector(".color");

btn.addEventListener("click",function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colorName[randomNumber];
    color.textContent= colorName[randomNumber];
    color.style.color=colorName[randomNumber];

});

function getRandomNumber(){
    return (Math.floor(Math.random() * colorName.length));
}