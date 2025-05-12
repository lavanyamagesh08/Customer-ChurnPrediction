const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'ta-IN'; 
function startListening() {
  recognition.start();
}
recognition.onresult = function (event) {
  const speechText = event.results[0][0].transcript;
  console.log("Customer said:", speechText);
  detectEmotion(speechText); 
};
function detectEmotion(text) {
  text = text.toLowerCase();
  if (text.includes('மகிழ்ச்சி') || text.includes('happy')) {
    showReply('happy');
  } else if (text.includes('துக்கம்') || text.includes('sad')) {
    showReply('sad');
  } else if (text.includes('கோபம்') || text.includes('angry')) {
    showReply('angry');
  } else {
    showReply('neutral');
  }
}
function handleEmoji(emotion) {
  showReply(emotion);
}
function showReply(emotion) {
  let replyText = '';
  let gif = '';

  if (emotion === 'happy') {
    replyText = "நன்றி! நீங்கள் மகிழ்ச்சியாக உள்ளீர்கள்! 😊\nஉங்கள் கருத்துக்கு எங்கள் மனமார்ந்த நன்றி. மேலும் உங்கள் கருத்துகளை பகிர விரும்பினால், எப்போதும் வரவேற்கின்றோம்!";
    gif = "gifs/happy.gif";
  } else if (emotion === 'sad') {
    replyText = "மன்னிக்கவும், நீங்கள் கவலையுடன் இருக்கிறீர்கள். 😢\nஉங்கள் கருத்தை மதிக்கின்றோம். எங்கள் சேவையை மேம்படுத்த நடவடிக்கை எடுக்கிறோம். நன்றி!";
    gif = "gifs/sad.gif";
  } else if (emotion === 'angry') {
    replyText = "மன்னிக்கவும், உங்கள் கோபத்தை புரிந்து கொள்கிறோம். 😠\nஉங்கள் பிரச்சனையை விரைவில் சரி செய்ய எங்கள் குழு முயற்சி செய்கிறது. உங்கள் ஆதரவை நாங்கள் மதிக்கிறோம்.";
    gif = "gifs/angry.gif";
  } else {
    replyText = "உங்கள் கருத்துக்கு நன்றி! 🤔\nமேலும் விரிவான கருத்துகளை எங்கள் சேவையை மேம்படுத்த பகிரவும். நாங்கள் எப்போதும் கேட்க தயாராக இருக்கிறோம்.";
    gif = "gifs/neutral.gif";
  }
  document.getElementById('replyText').innerText = replyText;
  const replyGif = document.getElementById('replyGif');
  replyGif.src = gif;
  replyGif.style.display = "block"; 
  speakReply(replyText);
}
function speakReply(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ta-IN';
  speechSynthesis.speak(utterance);
}
