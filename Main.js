function startClass()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier ('https://teachablemachine.withgoogle.com/models/6vwsmJyhug/model.json' , modelReady);
}


function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);

        random_number_r = Math.floor(Math.round() * 255) + 1;
        random_number_g = Math.floor(Math.round() * 255) + 1;
        random_number_b = Math.floor(Math.round() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";

        document.getElementById("result_label").style.color = "rgb("+random_number_r +", "+random_number_g+" ,"+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+", "+random_number_g+" , "+random_number_b+")";

        img1 = document.getElementById("dog");
        img2 = document.getElementById("cat");
        img3 = document.getElementById("simba");
        img4 = document.getElementById("cow");
        
        if(results[0].label == "Barking")
        {
            img1.src = "dog.gif";
            img2.src = "cat3.png";
            img3.src = "simba.webp";
            img4.src = "cow.png";
        }
        else if(results[0].label == "Meowing")
        {
            img1.src = "dog3.png";
            img2.src = "cat.gif";
            img3.src = "simba.webp";
            img4.src = "cow.png";
        }
        else if(results[0].label == "Roaring")
        {
            img1.src = "dog3.png";
            img2.src = "cat3.png";
            img3.src = "simba.gif";
            img4.src = "cow.png";
        }
        else
        {
            img1.src = "dog3.png";
            img2.src = "cat3.png";
            img3.src = "simba.webp";
            img4.src = "cow.gif";
        }
    }
}