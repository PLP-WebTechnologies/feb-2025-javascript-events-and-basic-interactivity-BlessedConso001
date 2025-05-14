// script.js

document.getElementById('magicButton').addEventListener('click', () => {
  const btn = document.getElementById('magicButton');
  btn.textContent = "You clicked me!";
  btn.style.backgroundColor = '#4CAF50';
  document.getElementById('buttonResult').textContent = "Button was clicked!";
});

document.getElementById('hoverBox').addEventListener('mouseover', () => {
  document.getElementById('hoverBox').style.backgroundColor = '#FFD700';
});

document.getElementById('hoverBox').addEventListener('mouseout', () => {
  document.getElementById('hoverBox').style.backgroundColor = 'lightgray';
});

document.getElementById('keyInput').addEventListener('keyup', (e) => {
  document.getElementById('keyOutput').textContent = `You pressed: ${e.key}`;
});

document.getElementById('secretAction').addEventListener('dblclick', () => {
  alert("Secret double-click action revealed!");
});

function openTab(tabId) {
  const tabs = document.getElementsByClassName("tabcontent");
  for (let tab of tabs) {
    tab.style.display = "none";
  }
  document.getElementById(tabId).style.display = "block";
}

document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("formFeedback");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || !email || !password) {
    feedback.textContent = "All fields are required.";
  } else if (!emailPattern.test(email)) {
    feedback.textContent = "Please enter a valid email.";
  } else if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
  } else {
    feedback.textContent = "Form submitted successfully!";
  }
});

// Real-time feedback for password
const passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", () => {
  const feedback = document.getElementById("formFeedback");
  if (passwordInput.value.length < 8) {
    feedback.textContent = "Password too short.";
  } else {
    feedback.textContent = "Looks good!";
  }
});
