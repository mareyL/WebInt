var video = document.querySelector("#video");
var url_form = document.querySelector("#url_form");
var error = document.createElement("p");
error.textContent += "can't resolve URL";

function changeURL(_form){
    url = _form.querySelector(`input[name=url]`);
    video.setAttribute('src',url.value);
};

try{
    url_form.addEventListener('submit', function(event){changeURL(url_form)});
}
catch (e){
    video.setAttribute('src',"https://upload.wikimedia.org/wikipedia/commons/d/d6/Elaphants_Dream.ogv")
    url_form.appendChild(error)
};
