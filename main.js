 var SpeechRecognition = window.webkitSpeechRecognition;
 var Content;
 var recognition = new SpeechRecognition();

 function start()
 {
     recognition.start();
 } 

 recognition.onresult = function run(event) {
    console.log(event);
    
    var Content = event.results[0][0].transcript;
    console.log(Content);
    


    if(Content == 'take my selfie') {
        console.log('taking selfie ----');
        speak();
    }
}


 camera = document.getElementById("camera");
 Webcam.set({
     width:500,
     height:400,
     image_format : 'png',
     png_quality:90
 });



 function speak(){ 
     var synth = window.speechSynthesis;
     Webcam.attach(camera);

     speak_data = "Taking your next Selfie in 5 seconds";
     var utterThis = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis);

     setTimeout(function() {
        take_snapshot();
        save();
      }
      , 5000);
    
 }


  function take_snapshot() {
    console.log(image_id);

    Webcam.snap(function(data_uri) {
        document.getElementById('result1').innerHTML = "<img id = 'selfie1' src = '" + data_uri + ",'>"
    })
  }

  function save() {
      link = document.getElementById('link');
      image = document.getElementById('selfie1').src;
      link.href = image;
      link.click();
  }
