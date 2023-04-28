var card=[1,2,3,4,5,6,1,2,3,4,5,6];
let cont=12;

let i=0;
let firstcard=null;
let secondcard=null;
let s=0;
let b1;
let b2;



window.onload=function(){
    shuffleDeck();

}

let a1=document.getElementById("un");
console.log(a1);

let a2=document.getElementById("deux");
let a3=document.getElementById("trois");
let a4=document.getElementById("quatre");
let a5=document.getElementById("cinq");
let a6=document.getElementById("six");
let a7=document.getElementById("seven");
let a8=document.getElementById("eight");
let a9=document.getElementById("nine");
let a10=document.getElementById("ten");
let a11=document.getElementById("eleven");
let a12=document.getElementById("twelve");
a1.addEventListener("click",flip);
a2.addEventListener("click",flip1);
a3.addEventListener("click",flip2);
a4.addEventListener("click",flip3);
a5.addEventListener("click",flip4);
a6.addEventListener("click",flip5);
a7.addEventListener("click",flip6);
a8.addEventListener("click",flip7);
a9.addEventListener("click",flip8);
a10.addEventListener("click",flip9);
a11.addEventListener("click",flip10);
a12.addEventListener("click",flip11);
function shuffleDeck(){
    for (let i = card.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = card[i];
        card[i] = card[j];
        card[j] = temp;
      }
      console.log(card);
    }
    

console.log(s);
function flip(){
    i++;
    cont--;
    console.log(cont);
    a1.src=card[0]+".png";
    if(i==1){firstcard=a1;
        b1=card[0];
        console.log(firstcard.src);
    }else if(i==2){
        secondcard=a1;
        b2=card[0];
        Timeout();

        console.log(b1,b2);
    }

    console.log(i);

    
    
    
}
function flip1(){
    i++;
    
    cont--;
    console.log(cont);
    a2.src=card[1]+".png";
    if(i==1){firstcard=a2;
        b1=card[1];
    }else if(i==2){
        secondcard=a2;
        b2=card[1];
        Timeout();
        console.log(b1,b2);
    }
    console.log(i);
    

    
    
}
function flip2(){
    i++;
    cont--;
    console.log(cont);
    a3.src=card[2]+".png";console.log(i); 
    if(i==1){firstcard=a3;
        b1=card[2];
    }else if(i==2){
        secondcard=a3;
        b2=card[2];
        Timeout();

    }
    console.log(i);
    

    
}
function flip3(){
    i++;
    cont--;
    console.log(cont);
    a4.src=card[3]+".png";
    if(i==1){firstcard=a4;
        b1=card[3];
    }else if(i==2){
        secondcard=a4;
        b2=card[3];
        Timeout();

       
    }
    
    
    
}
function flip4(){
    i++;
    cont--;
    console.log(cont);
    
    a5.src=card[4]+".png";
    if(i==1){firstcard=a5;
        b1=card[4];
    }else if(i==2){
        secondcard=a5;
        b2=card[4];
        Timeout();
    }
}
function flip5(){
    i++;
    cont--;
    console.log(cont);
    a6.src=card[5]+".png";
    if(i==1){firstcard=a6;
        b1=card[5];
    }else if(i==2){
        secondcard=a6;
        b2=card[5];
        Timeout();
    }
    
    
    
}
function flip6(){
    i++;
    cont--;
    console.log(cont);
    a7.src=card[6]+".png";
    if(i==1){firstcard=a7;
        b1=card[6];
    }else if(i==2){
        secondcard=a7;
        b2=card[6];
        Timeout();
    }
}
function flip7(){
    i++;
    cont--;
    console.log(cont);
    a8.src=card[7]+".png";
    if(i==1){firstcard=a8;
        b1=card[7];
    }else if(i==2){
        secondcard=a8;
        b2=card[7];
        Timeout();
    }

   
    
}function flip8(){
    i++;
    cont--;
    console.log(cont);
    a9.src=card[8]+".png";
    if(i==1){firstcard=a9;
        b1=card[8];
    }else if(i==2){
        secondcard=a9;
        b2=card[8];
        Timeout();
    }
    
    
}function flip9(){
    i++;
    cont--;
    console.log(cont);
    a10.src=card[9]+".png";
    if(i==1){firstcard=a10;
        b1=card[9];
    }else if(i==2){
        secondcard=a10;
        b2=card[9];
        Timeout();
    }

}
function flip10(){
    i++;
    cont--;
    console.log(cont);
    a11.src=card[10]+".png";
    if(i==1){firstcard=a11;
        b1=card[10];
    }else if(i==2){
        secondcard=a11;
        b2=card[10];
        Timeout();
    }
}
function flip11(){
    i++;
    cont--;
    console.log(cont);
    a12.src=card[11]+".png";
    if(i==1){firstcard=a12;
        b1=card[11];
    }else if(i==2){
        secondcard=a12;
        b2=card[11];
        Timeout();
    }

    
}


function reply_click(clicked_id)
{
    let a="\'"+clicked_id+"\'";
}
function Timeout() {
    setTimeout(function hidden(){
    if(b1!=b2){
        
    cont=cont+2;
    console.log(cont);
firstcard.src="hidden.png";
secondcard.src="hidden.png";
}
i=0;}, 700);
}
let remainingTimeElement = document.querySelector("#remainingtime"),
         	 secondsLeft = 40

const Timer = setInterval( 
    () => {
        if (secondsLeft <= 0) clearInterval(Timer)
        remainingTimeElement.value = secondsLeft
        remainingTimeElement.textContent = secondsLeft
        secondsLeft -= 1
        if(secondsLeft==0 && cont!=0){
    location.href = 'GAMEOVER.html';
}
        else if(secondsLeft!=0 &&cont==0){
            location.href='WINNER.html';
        }
    }, 
1000)



