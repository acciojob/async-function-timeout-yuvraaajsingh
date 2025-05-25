//your JS code here. If required.
 function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Main async function triggered on button click
  async function handleSubmit() {
    const text = document.getElementById("text").value;
    const delay = parseInt(document.getElementById("delay").value);
    const output = document.getElementById("output");

    output.textContent = ""; // Clear any previous message

    if (!text || isNaN(delay)) {
      output.textContent = "Please enter both text and a valid delay.";
      return;
    }

    await wait(delay);
    output.textContent = text;
  }

  // Attach event listener to button
  document.getElementById("btn").addEventListener("click", handleSubmit);