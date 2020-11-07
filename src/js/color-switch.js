
const bodyColorSwitchStartBtnEl=document.querySelector('.start')
const bodyColorSwitchStopBtnEl=document.querySelector('.stop')

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  
  const bodyColor=null
 let interval= null

bodyColorSwitchStartBtnEl.addEventListener('click',onStartClick)
bodyColorSwitchStopBtnEl.addEventListener('click',onStopClick)
  
  
 
function onStartClick(){
    if(bodyColorSwitchStartBtnEl.disabled){
        return
    }
    bodyColorSwitchStartBtnEl.disabled = true
    interval = setInterval(()=>{
        const bodyColor=colors[randomIntegerFromInterval(0,colors.length-1)]
        console.log(bodyColor)
        document.body.style.backgroundColor=bodyColor
      },1000)

}

function onStopClick(){
    bodyColorSwitchStartBtnEl.disabled = false
    clearInterval(interval)
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };