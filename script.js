// Grab the buttons from HTML
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

// Confirm JavaScript is connected
console.log("JS connected");

// Make the NO button run away 😈
noBtn.addEventListener("mouseover", () => {

    // Generate random positions
    const randomX = Math.random() * 80;
    const randomY = Math.random() * 80;

    // Move the button
    noBtn.style.left = randomX + "vw";
    noBtn.style.top = randomY + "vh";
});

// Mobile support (touch devices)
noBtn.addEventListener("touchstart", () => {

    const randomX = Math.random() * 80;
    const randomY = Math.random() * 80;

    noBtn.style.left = randomX + "vw";
    noBtn.style.top = randomY + "vh";
});

// YES button logic 💖
yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #ffd6e8;
            font-family: Arial, sans-serif;
            text-align: center;
        ">
            <h1>YAYYY ⛰️🥹<br>We are going to have a lot of FUNNN⛰️</h1>
        </div>
    `;
});
