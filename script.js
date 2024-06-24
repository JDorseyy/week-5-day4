function createReminder() {
    let message = {};
    message.sender = prompt("What is your name?");
    message.recipient = prompt("Who will you send the message to?")
    message.request = prompt("Are you still able to keep your appointment on June/25/2024 at 1:15 PM?");
  
    myMessage.innerHTML = `Dear ${message.recipient}, we are excited to see you at your upcoming visit. Thank you for your response of ${message.request}.`
  
    myHeader.style.color = "black";
    myHeader.style.backgroundColor = "cyan";
    myMessage.style.color = "black";
    myMessage.style.backgroundColor = "gray";
  }
  
  messageButton.onclick = createReminder;