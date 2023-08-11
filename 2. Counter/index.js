let count=0;
const value= document.querySelector(".value");
const btns= document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const button =  e.currentTarget.classList;
        if(button.contains("decrease")){
            count--;
        } else if(button.contains("increase")){
            count++;
        }
        else if(button.contains("reset")){
            count=0;
        }

        if(count>0){
            value.style.color="#5B9A8B" 
        }
        if(count<0){
            value.style.color="#C70039" 
        }
        if(count===0){
            value.style.color="black" 
        }

        value.textContent=count;
    })
})