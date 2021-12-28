//generateFireworks();

 /*function generateFireworks() {
  setInterval(exeGenerateFireworks, 1000);
 }*/

let time = 1;
 function exeGenerateFireworks() {
  console.log("repeated action");
   for (var i = 0; i < 40; i++) {
     var firework = document.createElement("div");
     firework.className = `fireworkt${time} firework`;
     firework.setAttribute("id", `firework${i}`);
     let firstValue = Math.floor(Math.random() * 100);
     let secondValue = Math.floor(Math.random() * 100);
     firework.style.top = `${firstValue}%`;
     firework.style.left = `${secondValue}%`;
     
     var color = "#"+((1<<24)*Math.random()|0).toString(16);
     //document.documentElement.style.setProperty('--main-bg-color', color);
     for (var j = 0; j < 13; j++) { 
       var line = document.createElement("div");
       var styleElem = document.head.appendChild(document.createElement("style"));
       styleElem.innerHTML = `.explosion${i}:before {background: ${color};}`;
       line.className = `explosion explosion${i}`;
       if (time == 1) {
        line.style.width = "4px";
        line.style.height = "80px";
       }

       if (time == 2) {
        line.style.width = "4px";
        line.style.height = "150px";
       }
       
       if (time == 3) {
        line.style.width = "4px";
        line.style.height = "200px";
      }
       
      firework.appendChild(line);
     }
     time++;
     if (time > 3) { 
       time = 1;
     }
     //console.log(firework);
     document.body.appendChild(firework);
   } 
   
}
 
exeGenerateFireworks();