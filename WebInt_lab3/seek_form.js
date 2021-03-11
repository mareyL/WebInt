var video = document.querySelector("#video");
var seek_form = document.querySelector("#seek_form");
var error = document.createElement("p");
error.textContent += "can't jump outside video";

function changeTime(_form){
    time = _form.querySelector(`input[name=seek]`).value;
    if(video.duration>time){
        video.currentTime = time;
    }
    else{
        _form.appendChild(error)
    }
}

seek_form.addEventListener('submit', function (event){changeTime(seek_form)});