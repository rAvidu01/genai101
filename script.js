const facts = [
    "I enjoy photography and have captured over 10,000 photos from my travels.",
    "I volunteer at a local animal shelter on weekends.",
   "I built my own gaming computer from scratch!",
   "I’ve taken part in two half-marathons and hope to run a full marathon soon.",
   "I love cooking and have mastered making homemade pasta."
];

function generateFact() {
    const factElement = document.getElementById('fact');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
}
