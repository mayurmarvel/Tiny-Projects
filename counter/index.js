let count = 0;
let currentCount = document.getElementById('currentCount');

currentCount.innerText = count;

let increment= function(){
count += 1
currentCount.innerText = count;

}

let decrement= function(){
if(!count <=0)
count -= 1
currentCount.innerText = count;

}

