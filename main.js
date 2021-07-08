var speech_recognition=window.webkitSpeechRecognition;
var recognition=new speech_recognition();
var camera=document.getElementById("camera").value;
function Start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="Take my selfie."){speak();console.log("taking selfie--");}   
}
function speak(){
    synth=window.speechSynthesis;
    text="Taking Your selfie in 5 second"
    utter=new SpeechSynthesisUtterance(text);
    synth.speak(utter);
    Webcam.attach('#camera');
    setTimeout(function(){takesnapshot();save();},5000)
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
  });
function takesnapshot(){
    Webcam.snap(function(data_url){document.getElementById("result").innerHTML='<img id="selfie" src="'+data_url+'">';})
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie").src;
    link.href=image;
    link.click();
}