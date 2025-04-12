let sliderWeight = document.getElementById("myWeight");
let outputWeight = document.getElementById("weight");
outputWeight.innerHTML = sliderWeight.value;

sliderWeight.oninput = function() {
  outputWeight.innerHTML = this.value;
}
let sliderHours = document.getElementById("myHours");
let outputHours = document.getElementById("hours");
outputHours.innerHTML = sliderHours.value;

sliderHours.oninput = function() {
  outputHours.innerHTML = this.value;
}

let man = document.querySelector('#man')
let woman = document.querySelector('#woman')
let check_man = true
let check_woman = false
man.addEventListener('click',function() {
  check_man = true
  check_woman = false
  man.style.background = '#62B6CB'
  man.style.color = 'black'
  woman.style.background = 'none'
  woman.style.color = '#b0bec5'
})
woman.addEventListener('click',function() {
  check_man = false
  check_woman = true
  man.style.background = 'none'
  man.style.color = '#b0bec5'
  woman.style.background = '#62B6CB'
  woman.style.color = 'black'
})

//Формула для рассчётов $fin = (($w * 0.03)+($t * 60/100))*$rate;
let water = document.querySelector("#water")
let button = document.querySelector(".button")
let bottle = document.querySelector('.bottles')
button.addEventListener("click",function() {
    let result = (outputWeight.innerHTML*0.03)+(outputHours.innerHTML*60/100);
    if (check_man) {
      result = result*0.9
    }
    if (check_woman) {
      result = result*0.8
    }
    if (result<0.5) {
      water.innerHTML = 0.5
    } else {
      water.innerHTML = result.toFixed(2)
    }
    if (result<1) {
      bottle.src='src/water1.png'
    } else if(result<2) {
      bottle.src = 'src/water2.png'
    } else if(result<3) {
      bottle.src = 'src/water3.png'
    } else if(result<4) {
      bottle.src = 'src/water4.png'
    } else {
      bottle.src = 'src/water5.png'
    }
})