// JavaScript Hello World
function displayHelloWorld() {
  const element = document.getElementById('hello-world');
  if (element) {
    element.textContent = 'Hello World from JavaScript!';
  }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', displayHelloWorld);
