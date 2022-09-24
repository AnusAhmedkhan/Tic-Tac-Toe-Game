

var turn="X";
var box= document.getElementsByClassName("box");

function showclass(){
    let show=document.getElementById("show")
    show.classList.remove("no-show")
document.getElementById("msg").innerText=turn +" Wins!"

}

 function checkwin(){
    boxes = document.getElementsByClassName('boxes');
    if(boxes[0].innerText===boxes[1].innerText&&boxes[1].innerText===boxes[2].innerText&&boxes[1].innerText!==""){
        // document.body.style.backgroundColor="#282828"
        showclass();
       
    }else if(boxes[5].innerText===boxes[4].innerText&&boxes[4].innerText===boxes[3].innerText&&boxes[3].innerText!==""){
        showclass();
    }else if(boxes[6].innerText===boxes[7].innerText&&boxes[7].innerText===boxes[8].innerText&&boxes[8].innerText!==""){
        showclass();
    }else if(boxes[0].innerText===boxes[4].innerText&&boxes[4].innerText===boxes[8].innerText&&boxes[0].innerText!==""){
        showclass();
    }else if(boxes[2].innerText===boxes[4].innerText&&boxes[4].innerText===boxes[6].innerText&&boxes[2].innerText!==""){
        showclass();
    }else if(boxes[0].innerText===boxes[3].innerText&&boxes[3].innerText===boxes[6].innerText&&boxes[3].innerText!==""){
        showclass();
    }else if(boxes[1].innerText===boxes[4].innerText&&boxes[4].innerText===boxes[7].innerText&&boxes[7].innerText!==""){
        showclass();
    }else if(boxes[5].innerText===boxes[2].innerText&&boxes[5].innerText===boxes[8].innerText&&boxes[8].innerText!==""){
        showclass();
     }
     else if(boxes[0].innerText!==""&&boxes[2].innerText!==""&&boxes[3].innerText!==""&&boxes[4].innerText!==""&&boxes[5].innerText!==""&&boxes[6].innerText!==""&&boxes[7].innerText!==""&&boxes[8].innerText!==""&&boxes[1].innerText!==""){
        let show=document.getElementById("show")
        show.classList.remove("no-show")
        document.getElementById("msg").innerText= "Game Draw!"
     }
}

function Changeturn(){
if(turn==="X"){
    turn="0"
    document.getElementById("hi").innerText="Turn for "+ turn;
}else{
    turn="X"
    document.getElementById("hi").innerText="Turn for "+ turn
}

}
 

Array.from(box).forEach(elemnt => {
    let boxes = elemnt.querySelector('.boxes');
    elemnt.addEventListener("click", ()=>{
        if (boxes.innerText === "") {
            boxes.innerText = turn;
            
       
        }
        checkwin();
             Changeturn();
    }
    
    );

    
})

document.getElementById("rst").addEventListener("click",()=>{

    let show=document.getElementById("show")
    show.classList.add("no-show")
    Array.from(box).forEach(elemnt => {
        let boxes = elemnt.querySelector('.boxes');
        boxes.innerText="";
    }
)})



// console.log(boxes[0].innerHTML=25)
// for(var i=0;i<box.length;i++){
// box[i].onclick=function(){
//     var boxes= document.getElementsByClassName("boxes");
//     for(var j=0;j<boxes.length;j++){
//     boxes[j].innerText="X";
//     }
    
// }
// }

// console.log("js is running")


// console.log(boxes[7].innerText);

// let arr=[[0,1,2],[3,4,5]];

// arr.forEach(e =>{
//   console.log(boxes[e[2]].innerText); 
// })

