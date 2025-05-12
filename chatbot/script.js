function sendMessage() {
    const inputField = document.getElementById("user-input");
    const userInput = inputField.value.trim();
    const chatWindow = document.getElementById("chat-window");
  
    if (userInput !== '') {
      chatWindow.innerHTML += `<div class="user-message">You: ${userInput}</div>`;
      const { reply, emoji } = getBotResponse(userInput.toLowerCase());
      chatWindow.innerHTML += `<div class="bot-message">Bot: ${reply} ${emoji}</div>`;
      inputField.value = '';
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }
  function getBotResponse(input) {
    let reply = "Thank you for your feedback. We will get back to you!";
    let emoji = "😊";
    if (input.includes("late delivery") || input.includes("delayed") || input.includes("delivery issue")) {
      reply = "We apologize for the delay in delivery. We are working to resolve this issue promptly.";
      emoji = "🚚😔";
    } else if (input.includes("wrong product") || input.includes("incorrect item") || input.includes("different product")) {
      reply = "We're sorry for sending the wrong product. Let's initiate a return or exchange for you.";
      emoji = "🔄📦😞";
    } else if (input.includes("return not accepted") || input.includes("can't return") || input.includes("exchange problem")) {
      reply = "We understand you're facing issues with returns or exchanges. We'll assist you in resolving this matter.";
      emoji = "♻️😟";
    } else if (input.includes("refund delay") || input.includes("payment issue") || input.includes("refund not received")) {
      reply = "We apologize for the refund/payment issues. Our team is working to expedite the process.";
      emoji = "💸⏳";
    } else if (input.includes("poor quality") || input.includes("damaged product") || input.includes("defective")) {
      reply = "We're sorry to hear about the product quality issue. Let's arrange a return or exchange for you.";
      emoji = "⚠️🛠️";
    } else if (input.includes("customer service issue") || input.includes("no support") || input.includes("no response")) {
      reply = "We apologize for the inconvenience caused by our customer service. We'll ensure better support in the future.";
      emoji = "📞🙁";
    } else if (input.includes("app not working") || input.includes("website issue") || input.includes("technical problem")) {
      reply = "We're experiencing technical difficulties with our app/website. Our team is working to fix it as soon as possible.";
      emoji = "🖥️🔧";
    } 
    return { reply, emoji };
  }
  