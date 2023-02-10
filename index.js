let nextButton=document.getElementById("next")
let prevButton=document.getElementById("prev")
let num=document.getElementsByClassName("num")
let steps = document.getElementsByClassName("steps")

var step =Array.from(steps)
var nums=Array.from(num)
var x = 1
function stepPrev (){

    nums[x].style.borderColor="gray"
    steps[x].style.backgroundColor="gray"
    steps[0].style.backgroundColor="transparent"
    nums[0].style.borderColor="rgb(50, 211, 211)"
  }
  function stepNext (){
    steps[0].style.backgroundColor="transparent"
    nums[x].style.borderColor=" rgb(50, 211, 211)"
    steps[x].style.backgroundColor=" rgb(50, 211, 211)"
   }
 
  nextButton.addEventListener("click",function()
      {
        
        if(x<4){
          stepNext()
          x++
          console.log("uu")
          console.log(x)
        }
        })
        console.log(x)
    
prevButton.addEventListener("click",function(){
  console.log(x)
if(x>1&&x<5){
  x--
  stepPrev()
 
  console.log("wwww")
}
    
  })
      





















