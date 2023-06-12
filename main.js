function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/iO_oy7drT/model.json", modelRead)
}
function modelRead() {
    classifier.classify(gotResults)
}
function gotResults(error, results) {
    if (error) {
        console.error(error)
    }
    else{
        console.log(results)


        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;


        result = results[0].label
        console.log(result)
        confidence = (results[0].confidence*100).toFixed(2) + "%"
        console.log(confidence)


        document.getElementById("result_label").style.color = "rgb(" + r +"," + g + "," + b + ")"
        document.getElementById("result_confidence").style.color = "rgb(" + r +"," + g + "," + b + ")"
        document.getElementById("result_label").innerHTML = "Posso ouvir - " + result
        document.getElementById("result_confidence").innerHTML = "Precisão - " + confidence


        img1 = document.getElementById("alien1")
        img2 = document.getElementById("alien2")
        img3 = document.getElementById("alien3")
        img4 = document.getElementById("alien4")
        

        if (result == "Palma") {
            img1.src = "aliens-01.gif"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        }
        if (result == "Risada") {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.gif"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        }
        if (result == "Bateria") {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.gif"
            img4.src = "aliens-04.png"
        }
        if (result == "Background Noise") {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.gif"
        }
    }
}
