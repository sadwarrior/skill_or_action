//получаем случайную цитату и выводим ее в span
var quoteWhite = document.getElementById('quoteWhiteText');

var collectionOfQuotes = [
    "Life is 10% what happens to you and 90% how you react to it.",
    "With the new day comes new strength and new thoughts.",
    "If you can dream it, you can do it.",
    "If it scares you, it might be a good thing to try it.",
    "Don't watch the clock; do what it does. Keep going.",
    "The secret of getting ahead is getting started.",
    "That which does not kill us makes us stronger.",
    "One must still have chaos in oneself to be able to give birth to a dancing star.",
    "He who has a why to live can bear almost any how.",
    "Success has always been a great liar.",
    "The future influences the present just as much as the past."
]

var getRandomQuote = function() {
    return collectionOfQuotes[Math.floor(Math.random() * collectionOfQuotes.length)];
}

document.addEventListener('DOMContentLoaded', function() {
    quoteWhite.innerHTML = getRandomQuote();
}, false);
