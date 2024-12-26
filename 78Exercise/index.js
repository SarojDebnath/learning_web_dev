async function displayline(text) {
    let container = document.querySelector(".container");
    let line = document.createElement("div"); // Create a new div for each line
    line.textContent = text; // Set the initial text
    container.appendChild(line); // Add the line to the container

    let t = Math.ceil(Math.random() * 7000); // Random timeout
    console.log(t);

    let dots = 0; // Count of dots
    const interval = setInterval(() => {
        dots = (dots + 1) % 4; // Cycle dots between 0 and 3
        line.textContent = text + ".".repeat(dots); // Update the text with dots
    }, 500); // Add/update dots every 500ms

    await new Promise((resolve) => {
        setTimeout(() => {
            clearInterval(interval); // Stop updating dots after timeout
            resolve();
        }, t);
    });

    line.textContent = text+"..."; // Finalize the line without dots
    container.innerHTML += "<br>"; // Add a final line break for spacing
}

const lines = ["Initializing hacking", "Reading Files", "Password Files detected", "Sending all files to server", "CleaningUp"];

async function run() {
    for (let i = 0; i < lines.length; i++) {
        await displayline(lines[i]);
    }
}

run();
