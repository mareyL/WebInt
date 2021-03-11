var video = document.querySelector("#video");
var checkbox = document.querySelector("#controls_checkbox");

function control_change(){
    if(checkbox.checked){
        video.controls = false
    }
    else{
        video.controls = true
    }
}

checkbox.addEventListener('change', function (){control_change()})