const navToggle= document.querySelector(".nav-toggle");
const links= document.querySelector(".links");

navToggle.addEventListener("click",function(){
    links.classList.toggle("show-links")
})

//Quotes_code

const quotes =[
    {
        text: "To live is the rarest thing in the world. Most people exist, that is all.",
        name:"- Oscar Wilde",
    },
    {
        text: "Never go to bed mad. Stay up and fight.",
        name:"- Phyllis Diller",
    },
    {
        text:"Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.",
        name:"- Voltaire",
    },
    {
        text: "If you're always trying to be normal you will never know how amazing you can be.",
        name: "- Maya Angelou",
    },
    {
        text:"Sometimes when I close my eyes, I can't see.",
        name:"",
    },
]
const quote=document.querySelector("#quote");
const writer=document.querySelector("#writer");

const prev= document.querySelector(".prev");
const next= document.querySelector(".next");

let currentItem=0;

window.addEventListener("DOMContentLoaded",function(){
    showQuote(currentItem);
});

function showQuote(element){
    const item = quotes[element];
    quote.textContent= item.text;
    writer.textContent= item.name;
}

prev.addEventListener("click",function(){
    currentItem--;
    if(currentItem < 0){
        currentItem= quotes.length - 1;
    }
    showQuote(currentItem);
});

next.addEventListener("click",function(){
    currentItem++;
    if(currentItem > quotes.length -1){
        currentItem=0;
    }
    showQuote(currentItem);
});