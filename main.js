Webcam.set({
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality: 100
});
camera = document.getElementById("Camera")

Webcam.attach("#camera");

function pic_take() {
    Webcam.snap(function (data_url) {
        document.getElementById("Result").innerHTML = '<img id="captured_img" src=' + data_url + '>';
    });
}

console.log("ml5.version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/model.js", modelLoaded);

function modelLoaded() {
    console.log("model_loaded");
}