var camera_button = document.querySelector('#camera_button')
var gallery_button = document.querySelector('#gallery_button')
var video = document.querySelector('video')
var main_page = document.querySelector('#main_page')
var camera_page = document.querySelector("#camera_page")
var return_button = document.querySelector("#return")
var picture_button = document.querySelector("#take_picture")
var picture = document.querySelector('#picture')
var screen_page = document.querySelector('#screen_page')
var left_arrow = document.querySelector('#left_arrow')
var retake = document.querySelector('#retake')
var send = document.querySelector('#send')
var gallery_page = document.querySelector('#gallery_page')
var return_button2 = document.querySelector('#return2')
var plant_page = document.querySelector('#plant_page')
var disease_page = document.querySelector('#disease_page')
var plant_image = document.querySelector('#plant_image')
var plant_text = document.querySelector('#plant_text')
var disease_image = document.querySelector('#disease_image')
var disease_text = document.querySelector('#disease_text')
var left_bot_arrow = document.querySelector('#left_bot_arrow')
var right_bot_arrow = document.querySelector('#right_bot_arrow')
var left_bot_arrow_dis = document.querySelector('#left_bot_arrow_dis')
var input = document.querySelector('#input')
var contact_button = document.querySelector('#contact')
var developper = document.querySelector('#developper')

async function camera(){  
    navigator.mediaDevices.getUserMedia({
        video: true,
        facingMode: {
            //Use the back camera
                  exact: 'environment'
                }
    })
    
    const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
      })
      const videoTracks = stream.getVideoTracks()
      window.track = videoTracks[0]
      document.querySelector('video').srcObject = stream
      main_page.style.visibility = "hidden"
      screen_page.style.visibility = "hidden"
      gallery_page.style.visibility = "hidden"
      camera_page.style.visibility = "visible"
      plant_page.style.visibility = "hidden"
  disease_page.style.visibility = "hidden"
}

camera_button.addEventListener("click",async function(){camera()})

function back_home(){
  window.track.stop()
  camera_page.style.visibility = "hidden"
  screen_page.style.visibility = "hidden"
  gallery_page.style.visibility = "hidden"
  main_page.style.visibility = "visible"
  plant_page.style.visibility = "hidden"
  disease_page.style.visibility = "hidden"
}

return_button.addEventListener("click",function(){back_home()})

function takePhoto() {
  var imageCapture = new ImageCapture(window.track)
  imageCapture.takePhoto().then(function(blob) {
    picture.src = URL.createObjectURL(blob);
  }).catch(function(error) {
    console.log('takePhoto() error: ', error);
  });
  window.track.stop()
  main_page.style.visibility = "hidden"
  camera_page.style.visibility = "hidden"
  gallery_page.style.visibility = "hidden"
  screen_page.style.visibility = "visible"
  plant_page.style.visibility = "hidden"
  disease_page.style.visibility = "hidden"
}

picture_button.addEventListener("click",function(){takePhoto()})
left_arrow.addEventListener("click",function(){back_home()})
retake.addEventListener("click",function(){camera()})

function gallery() {
  main_page.style.visibility = "hidden"
  camera_page.style.visibility = "hidden"
  screen_page.style.visibility = "hidden"
  gallery_page.style.visibility = "visible"
  plant_page.style.visibility = "hidden"
  disease_page.style.visibility = "hidden"
}

function home() {
  camera_page.style.visibility = "hidden"
  screen_page.style.visibility = "hidden"
  gallery_page.style.visibility = "hidden"
  main_page.style.visibility = "visible"
  plant_page.style.visibility = "hidden"
  disease_page.style.visibility = "hidden"
}

gallery_button.addEventListener("click",function(){gallery()})
return_button2.addEventListener("click",function(){home()})

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

async function send_photo() {
  const url = window.location.href
  var response = await axios.get(url+"plants.json")
  var plant = response.data.plants[getRandomInt(2)]

  plant_image.setAttribute('src',plant.plant_image)
  plant_text.innerHTML = plant.plant_text

  if(plant.disease_image != ""){
    disease_image.setAttribute('src',plant.disease_image)
    disease_text.innerHTML = plant.disease_text
  } else{
    disease_image.setAttribute('src',plant.plant_image)
    disease_text.innerHTML = "No disease detected"
  }

  camera_page.style.visibility = "hidden"
  screen_page.style.visibility = "hidden"
  gallery_page.style.visibility = "hidden"
  main_page.style.visibility = "hidden"
  plant_page.style.visibility = "visible"
  disease_page.style.visibility = "hidden"
}

send.addEventListener("click",function(){send_photo()})

left_bot_arrow.addEventListener("click",function(){home()})

function disease(){
  camera_page.style.visibility = "hidden"
  screen_page.style.visibility = "hidden"
  gallery_page.style.visibility = "hidden"
  main_page.style.visibility = "hidden"
  plant_page.style.visibility = "hidden"
  disease_page.style.visibility = "visible"
}

right_bot_arrow.addEventListener("click",function(){disease()})

function go_to_plant(){
  camera_page.style.visibility = "hidden"
  screen_page.style.visibility = "hidden"
  gallery_page.style.visibility = "hidden"
  main_page.style.visibility = "hidden"
  plant_page.style.visibility = "visible"
  disease_page.style.visibility = "hidden"
}

left_bot_arrow_dis.addEventListener("click", function(){go_to_plant()})

input.addEventListener("input", function(){send_photo()})

function contact(){
  window.location.href = "mailto:lucien.marey@eurecom.fr"
}

contact_button.addEventListener("click", function(){contact()})

function dev_redirect(){
  window.location.href = "https://github.com/mareyL"
}

developper.addEventListener("click", function(){dev_redirect()})