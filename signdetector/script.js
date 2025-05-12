const URL = "https://teachablemachine.withgoogle.com/models/N1n-k_YIv-/"; 

let model, webcam, labelContainer, maxPredictions;


const responses = {
    "late delivery": "Sorry! Your package was delayed. We'll check with the courier.",
    "return product": "Please upload a photo. We'll help you with a replacement.",
    "wrong product": "We’ll initiate a return and send the correct item.",
    "cancel request": "I would like to cancel this.",
    "need help": "Our support team will contact you shortly.",
};

async function init() {
    labelContainer = document.getElementById("label-container");

    try {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

       
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

   
        webcam = new tmImage.Webcam(400, 300, true);
        await webcam.setup();
        await webcam.play();
        window.requestAnimationFrame(loop);

        document.getElementById("webcam-container").appendChild(webcam.canvas);
    } catch (error) {
        console.error("Error initializing the model or webcam:", error);
        labelContainer.innerHTML = "Failed to load model or webcam.";
    }
}

async function loop() {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
}

async function predict() {
    try {
        const prediction = await model.predict(webcam.canvas);
        prediction.sort((a, b) => b.probability - a.probability);
        const topResult = prediction[0];

        if (topResult.probability > 0.85) {
            labelContainer.innerHTML = `Detected: ${topResult.className}`;
            labelContainer.setAttribute("data-detected", topResult.className);
        } else {
            labelContainer.innerHTML = "Detecting...";
            labelContainer.setAttribute("data-detected", "");
        }
    } catch (error) {
        console.error("Prediction error:", error);
    }
}

function submitQuery() {
    const raw = labelContainer.getAttribute("data-detected");

    if (!raw) {
        alert("No sign detected. Please try again.");
        return;
    }

    const query = raw.trim().toLowerCase();

    const matchedKey = Object.keys(responses).find(
        key => key.trim().toLowerCase() === query
    );

    if (matchedKey) {
        alert("You said: " + matchedKey + "\nReply: " + responses[matchedKey]);
    } else {
        alert("We're not sure what you said. Please try again.");
        console.log("DEBUG: Detected =", raw);
    }
}


init();
