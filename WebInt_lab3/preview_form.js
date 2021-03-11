var video = document.querySelector("#video");
var preview_form = document.querySelector("#preview_form");
var canvas = document.querySelector("#canvas")

function generatePreview() {     
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, 250, 150);
}

preview_form.addEventListener("submit", function (event){generatePreview()})