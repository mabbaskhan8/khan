let heading = document.querySelector('.texts')

let texts = ['CSS |','HTML |','JAVASCRIPT |','BOOTSTRAP |', 'Woordpress']
let text = 'abbs '
let endValue = 1;
textCount = 0
isForwards = true

let id = setInterval(function(){
    heading.textContent = texts[textCount].substring(0,endValue)
    if(isForwards){
        endValue++;
    }
    else{
      endValue--;
    }

   if(endValue > texts.length +7){
     isForwards = false
   
   }
   if(endValue < 0){
    isForwards = true
    textCount++;
   }
   if(textCount == texts.length){
    textCount = 0
   }
  
},100)