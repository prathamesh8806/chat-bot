// Predefined responses
const botResponses = {
    "hello": "Hi there! How can I assist you?",
    "what's your name": "I'm Chatbot, your virtual assistant!",
    "how are you": "I'm doing great, thanks for asking!",
    "bye": "Goodbye! Have a nice day!"
};

// Function to handle user input
function handleInput(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();

    if (userInput) {
        displayMessage(userInput, 'user-message');
        document.getElementById('user-input').value = '';
        generateBotResponse(userInput.toLowerCase());
    }
}

// Function to display user and bot messages in the chat box
function displayMessage(message, className) {
    const chatBox = document.getElementById('chatbox');
    const messageDiv = document.createElement('div');
    messageDiv.className = className;
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;  // Auto scroll to the bottom
}

// Function to generate bot response
function generateBotResponse(userInput) {
    let botResponse = botResponses[userInput] || "I'm not sure how to respond to that.";

    setTimeout(() => {
        displayMessage(botResponse, 'bot-message');
    }, 500);
}