var video = document.querySelector("#video");
var button = document.querySelector('#mirror_button');
var canvas = document.querySelector("#mirror_canvas");
var ctx = canvas.getContext('2d');


function step(){
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
    requestAnimationFrame(step)
}

button.addEventListener("click", function(){step()})