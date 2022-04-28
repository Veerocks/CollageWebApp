var SpeechRecongnition=window.webkitSpeechRecognition;
var recognition=new SpeechRecongnition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function (event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if (content=="take my selfie"){
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;
    getdata="Taking your selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(getdata);
    synth.speak(utterThis); 
    Webcam.attach(camera); 
    setTimeout(function(){
        snapshot();
        save();
    },5000);
    
}

function save(){
    link=document.getElementById("anchor");
    image=document.getElementById("output_image").src;
    link.href=image;
    link.click();
}

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML='<img id="output_image" src="'+data_uri+'"> ';
    });
}

Webcam.set({
    width:350,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
