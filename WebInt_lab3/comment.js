var comment_button = document.querySelector("#comment_button");
var log_button = document.querySelector("#log_button");
myStorage = window.sessionStorage;
var logged = Boolean(myStorage.logged);
var notLoggedForm = document.querySelector("#not_logged_form");
var loggedForm = document.querySelector("#logged_form");
var commentSection = document.querySelector("#user_comments")
var geocoder;
var lat;
var lng;

navigator.geolocation.getCurrentPosition(function(pos){
    lat = pos.coords.latitude;
    lng = pos.coords.longitude;
})

function notLoggedFunction(){
    notLoggedForm.style.visibility = "visible";
    comment_button.style.visibility = "hidden";
}

function loggedFunction(){
    loggedForm.style.visibility = "visible";
    comment_button.style.visibility = "hidden";
}

function logIn(_form){
    fname = _form.querySelector(`input[name=fname]`).value;
    lname = _form.querySelector(`input[name=lname]`).value;
    email = _form.querySelector(`input[name=email]`).value;
    tel = _form.querySelector(`input[name=tel]`).value;
    myStorage.setItem("fname", fname);
    myStorage.setItem("lname", lname);
    myStorage.setItem("email", email);
    myStorage.setItem("tel", tel);
    myStorage.setItem("logged", true)
    notLoggedForm.style.visibility = "hidden";
    comment_button.style.visibility = "visible";
}

function comment(_form){
    comm = _form.querySelector(`input[name=comment]`).value;

    var wholeComm = document.createElement("article");
    wholeComm.setAttribute("class", "user_comment");

    var commText = document.createElement("p");
    var commTextNode = document.createTextNode(comm);
    commText.appendChild(commTextNode);
    wholeComm.appendChild(commText);

    var footer = document.createElement("footer");
    wholeComm.appendChild(footer);

    var commFiller = document.createElement("p");
    footer.appendChild(commFiller);

    var date = document.createElement("time");
    commFiller.appendChild(date);
    var d = new Date();
    var dateTextNode = document.createTextNode((d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear());
    date.appendChild(dateTextNode)

    var userTextNode = document.createTextNode(", " + myStorage.getItem("fname"));
    commFiller.appendChild(userTextNode);
    if(lat && lng){
        var locationTextNode = document.createTextNode("," + lat + "," + lng)
        commFiller.appendChild(locationTextNode)
    }

    loggedForm.style.visibility = "hidden";
    comment_button.style.visibility = "visible";

    commentSection.appendChild(wholeComm)
}


comment_button.addEventListener("click", function(){
    if(logged){
        loggedFunction()
    }
    else{
        notLoggedFunction()
    }
})

notLoggedForm.addEventListener("submit", function(){logIn(notLoggedForm)})

loggedForm.addEventListener("submit", function(){comment(loggedForm)})