let screen=document.querySelector(".screen");
let buttons=document.querySelectorAll(".buttons");
let string="";
Array.from(buttons).forEach(function(button){
    button.addEventListener("click",function(e){
        if(e.target.value=='='){
            screen.value=eval(string);
            string=eval(string);
        }
        else if(e.target.value=="C"){
            string="";
            screen.value="";
        }
        else{
       string+=e.target.value;
        screen.value=string;
        }
    })
});

function greet(name){
    alert("hi"+name);
}
setTimeout(greet,5000,"muzzu");
Array.from("buttons").forEach(function(item){
    item.addEventListener("click",function(e){
       let i= e.target.getAttribute("value");
       if(i==7){
        e.target.setAttribute("value","8");

       }
    })
})