

document.getElementById('easyMode').addEventListener('click', () => setModes1('easyMode'));
document.getElementById('mediumMode').addEventListener('click', () => setModes1('mediumMode'));
document.getElementById('hardMode').addEventListener('click', () => setModes1('hardMode'));

let NowMode='';
let Total_A='';
let Total_B='';
let Total_C='';
let sumSticke='';
function setModes1(mode){
    console.log(`Modes selected: ${mode}`);
    NowMode = mode;
    document.getElementById('Modes').style.display = 'none';
    inputs();
}

function inputs() {
  
    // enter input
   

    var SticksP = prompt("You have 3 pils piles"+"\n Enter the number of sticks in the piles(max number = 9), if you want sticks like it :\n " 
    + "Ex. P1=3 and P2=7 and P3=4 \n"+"plz enter the number like this 374 ''without spases");
    while(SticksP== null){
    alert("plz entar the values");
    SticksP = prompt("You are select "+ nomOfPiles+"\n Enter the number of sticks in the piles(max number = 9), if you want sticks like it :\n " 
    + "Ex. P1=3 and P2=7 and P3=4 \n"+"plz enter the number like this 374 ''without spases");
    }
    alert("Let's Start a exited game!")

        document.getElementById('p1').innerText=`Paile A : ` +SticksP[0];
        document.getElementById('p2').innerText=`Paile B : ` +SticksP[1];
        document.getElementById('p3').innerText=`Paile C : ` +SticksP[2];
        Total_A=SticksP[0];
        Total_B=SticksP[1];
        Total_C=SticksP[2];
        
    
    

    document.getElementById('playPage').style.display = 'block';
    document.getElementById('playingTurn').style.display = 'block';
    document.getElementById('playingTurn').innerText = `Your Turn`;

    
  
}

document.getElementById('button1').addEventListener('click', () => userSelect(0));
document.getElementById('button2').addEventListener('click', () => userSelect(1));
document.getElementById('button3').addEventListener('click', () => userSelect(2));

function userSelect(userChoice){
    let numOfStone=prompt("Enter the numbers of stones you wont to selsct");
    if(userChoice == 0){
        while(numOfStone > Total_A ){
          numOfStone=prompt("Invaled value ,the max number can select from A:"+Total_A+
          "\n select the valed number from A");

        }
        Total_A =Total_A - numOfStone;
           document.getElementById('p1').innerText=`Paile A : ` +Total_A;
    } 
    else if(userChoice == 1){
        while(numOfStone > Total_B ){
            numOfStone=prompt("Invaled value ,the max number can select from B:"+Total_B+
            "\n select the valed number from B");
            
          }
        Total_B =Total_B - numOfStone;
        document.getElementById('p2').innerText=`Paile B : ` +Total_B;
    }
    else if(userChoice == 2){
        while(numOfStone > Total_C ){
            numOfStone=prompt("Invaled value ,the max number can select from C:"+Total_C+
            "\n select the valed number from C");
            
          }
        Total_C =Total_C - numOfStone;
           document.getElementById('p3').innerText=`Paile C : ` +Total_C;
    }

    sumSticke=Total_A+Total_B+Total_C;
    if(sumSticke == 0) {
     alert("PC WON!");
   } else {
     document.getElementById('playingTurn').innerText = `PC Turn`;
     setTimeout(pcTurn, 1000);
   }

}




  function pcTurn(){
    if(NowMode == 'easyMode')
     easyPcMove();

   else if(NowMode == 'mediumMode')
     mediumPCMove();

    else if(NowMode == 'hardMode'){
      hardPcMove();
    }
 }
  
  function easyPcMove(){
    var pcSElect='';
    if(Total_A >0 && Total_B > 0 && Total_C >0){
        pcRowSElect=Math.floor(Math.random() * (2 - 0 + 1)) + 0;
        if(pcRowSElect == 0 ){
            let random= Math.floor(Math.random() * (Total_B - 1 + 1)) + 1;
            Total_B=Total_B - random;
            document.getElementById('p2').innerText=`Paile B : ` +Total_B;
  
         }else if(pcSElect == 1){
          let random= Math.floor(Math.random() * (Total_C - 1 + 1)) + 1;
          Total_C=Total_C - random;
          document.getElementById('p3').innerText=`Paile C : ` +Total_C;
  
         }else{
            let random= Math.floor(Math.random() * (Total_A - 1 + 1)) + 1;
          Total_A=Total_A - random;
          document.getElementById('p1').innerText=`Paile A : ` +Total_A;
  
         }
    }
    else if(Total_A == 0 && Total_B > 0 && Total_C > 0){
       pcRowSElect=Math.floor(Math.random() * (1 - 0 + 1)) + 0;
       if(pcRowSElect == 0 ){
          let random= Math.floor(Math.random() * (Total_B - 1 + 1)) + 1;
          Total_B=Total_B - random;
          document.getElementById('p2').innerText=`Paile B : ` +Total_B;

       }else{
        let random= Math.floor(Math.random() * (Total_C - 1 + 1)) + 1;
        Total_C=Total_C - random;
        document.getElementById('p3').innerText=`Paile C : ` +Total_C;

       }
    }
    else if(Total_B == 0 && Total_A > 0 && Total_C > 0){
        pcRowSElect=Math.floor(Math.random() * (1 - 0 + 1)) + 0;
        if(pcRowSElect ==0 ){
           let random= Math.floor(Math.random() * (Total_A - 1 + 1)) + 1;
           Total_A=Total_A - random; 
          document.getElementById('p1').innerText=`Paile A : ` +Total_A;


        }else{
         let random= Math.floor(Math.random() * (Total_C - 1 + 1)) + 1;
         Total_C=Total_C - random;
         document.getElementById('p3').innerText=`Paile C : ` +Total_C;

        }
    }
    else if(Total_C == 0 && Total_B > 0 && Total_A > 0){
        pcRowSElect=Math.floor(Math.random() * (1 - 0 + 1)) + 0;
        if(pcRowSElect ==0 ){
           let random= Math.floor(Math.random() * (Total_B - 1 + 1)) + 1;
           Total_B=Total_B - random;
           document.getElementById('p2').innerText=`Paile B : ` +Total_B;

        }else{
         let random= Math.floor(Math.random() * (Total_A - 1 + 1)) + 1;
         Total_A=Total_A - random;
         document.getElementById('p1').innerText=`Paile A : ` +Total_A;
        }

    }else if(Total_A == 0 && Total_B == 0 && Total_C > 0){
        let random= Math.floor(Math.random() * (Total_C - 1 + 1)) + 1;
        Total_C=Total_C - random;
        document.getElementById('p3').innerText=`Paile C : ` +Total_C;

    }else if(Total_A == 0 && Total_B > 0 && Total_C == 0){
        let random= Math.floor(Math.random() * (Total_B- 1 + 1)) + 1;
        Total_B=Total_B - random;
        document.getElementById('p2').innerText=`Paile B : ` +Total_B;

    }
    else if(Total_A > 0 && Total_B == 0 && Total_C == 0){
        let random= Math.floor(Math.random() * (Total_A - 1 + 1)) + 1;
        Total_A=Total_A - random;
        document.getElementById('p1').innerText=`Paile A : ` +Total_A;


    }

    sumSticke=Total_A+Total_B+Total_C;
    if(sumSticke == 0) {
     alert("YOu WON!");
   } else {
    document.getElementById('playingTurn').innerText = `Your Turn`;
    
   }

  }

  function mediumPCMove(){
    
    const initialPiles=[Total_A, Total_B, Total_C];
    const depthIn=3;
    findBestMove(initialPiles, depthIn);
    
  }
  function hardPcMove(){
    const initialPiles=[Total_A, Total_B, Total_C];
    const depthIn=5;
    findBestMove(initialPiles, depthIn);
  }

  function findBestMove(piles, depth) {
    let bestValue = Number.NEGATIVE_INFINITY;
    let bestPile = -1;
    let bestSticks = -1;

    for (let pile = 0; pile < piles.length; pile++) {
        for (let sticks = 1; sticks <= Math.min(9, piles[pile]); sticks++) {
            const newPiles = [...piles];
            const moveValue = nimAlphaBeta(newPiles, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, depth-1, false);

            if (moveValue > bestValue) {
                bestValue = moveValue;
                bestPile = pile;
                bestSticks = sticks;
            }
        }
    }

   if(bestPile === 0){
   Total_A=Total_A - bestSticks;
   document.getElementById('p1').innerText=`Paile A : ` +Total_A;
   }else if(bestPile === 1){
    Total_B=Total_B - bestSticks;
    document.getElementById('p2').innerText=`Paile B : ` +Total_B;
    }else if(bestPile === 2){
        Total_C=Total_C - bestSticks;
        document.getElementById('p3').innerText=`Paile C : ` +Total_C;
        }

        sumSticke=Total_A+Total_B+Total_C;
        if(sumSticke == 0) {
         alert("YOu WON!");
       } else {
        document.getElementById('playingTurn').innerText = `Your Turn`;
        
       }
    return ;

}

function nimAlphaBeta(piles, alpha, beta, depth, isMaximizingPlayer) {
    if (depth === 0 ) {
        piles.reduce((acc, size) => acc ^ size, 0);
    }

    if (isMaximizingPlayer) {
        let maxEval = Number.NEGATIVE_INFINITY;
        for (let pile = 0; pile < piles.length; pile++) {
            for (let sticks = 1; sticks <= Math.min(9, piles[pile]); sticks++) {
                const newPiles = [...piles];
                newPiles[pile] -= sticks;
                const eval = nimAlphaBeta(newPiles, alpha, beta, depth - 1, false);
                maxEval = Math.max(maxEval, eval);
                alpha = Math.max(alpha, eval);
                if (beta <= alpha) {
                    break;
                }
            }
        }
        return maxEval;
    } else {
        let minEval = Number.POSITIVE_INFINITY;
        for (let pile = 0; pile < piles.length; pile++) {
            for (let sticks = 1; sticks < Math.min(9, piles[pile]); sticks++) {
                const newPiles = [...piles];
                newPiles[pile] -= sticks;
                const eval = nimAlphaBeta(newPiles, alpha, beta, depth - 1, true);
                minEval = Math.min(minEval, eval);
                beta = Math.min(beta, eval);
                if (beta <= alpha) {
                    break;
                }
            }
        }
        return minEval;
    }
}
