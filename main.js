
var lastxposition;
var lastyposition
canvas = document.getElementById("Canvas");
 ctx= canvas.getContext("2d"); color = "red";
  width_of__line=1;
 
width=screen.width;
newwidth=screen.width-20;
newheight=screen.height-300;
if (width<992){
    document.getElementById("Canvas").width=newwidth;
    document.getElementById("Canvas").height=newheight;
    document.body.style.overflow="hidden";
}



     canvas.addEventListener("touchstart", my_touchstart);
     function my_touchstart(e) {
     color=document.getElementById("t").value;
     width_of__line=document.getElementById("low").value;
    console.log("touchstartevent");
    lastxposition = e.touches[0].clientX - canvas.offsetLeft;
    lastyposition = e.touches[0].clientY - canvas.offsetTop;
     }



canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e) {
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of__line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + lastxposition + "y = " + lastxposition);
   
    ctx.moveTo(lastxposition, lastyposition);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
    

    lastxposition = current_position_of_mouse_x; 
    lastyposition = current_position_of_mouse_y;
}
function clear() {
    ctx.strokeStyle="chocolate";
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

