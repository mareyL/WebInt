var video = document.querySelector("#video");
var rotate_form = document.querySelector("#rotate_form");

function rotate(_form){
    rotation = _form.querySelector(`input[name=rotation]`);
    video.style['transform'] = 'rotate(' + rotation.value + 'deg)';
}

rotate_form.addEventListener("submit", function (event){rotate(rotate_form)})