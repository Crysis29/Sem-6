// script.js for interactive features

function displayCurrentDateTime() {
    const currentDateTime = new Date();
    const formattedDate = currentDateTime.toISOString().substring(0, 19).replace('T', ' ');
    console.log(`Current Date and Time (UTC): ${formattedDate}`);
}

displayCurrentDateTime();