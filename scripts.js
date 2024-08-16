document.addEventListener('DOMContentLoaded', () => {
    const clickButton = document.getElementById('click-button');
    const flowerImage = document.getElementById('flower');
    const messageDiv = document.getElementById('message');
    const greetingParagraph = document.getElementById('greeting');
    const requestParagraph = document.getElementById('request');
    const whatsappButton = document.getElementById('whatsapp-button');
    const music = document.getElementById('music');
    
    clickButton.addEventListener('click', () => {
        flowerImage.classList.remove('hidden');
        music.play(); // Play the audio
        clickButton.classList.add('hidden'); // Hide the button
        setTimeout(() => {
            greetingParagraph.textContent = "Sugalle!";
            requestParagraph.textContent = "Can you sing a song for me?";
            messageDiv.classList.remove('hidden');
            whatsappButton.classList.remove('hidden');
        }, 2000); // Wait for 2 seconds before showing the message
    });

    whatsappButton.addEventListener('click', () => {
        window.location.href = "https://wa.me/?text=Hi%20Risha%2C%20can%20you%20sing%20a%20song%20for%20me%3F";
    });
});
