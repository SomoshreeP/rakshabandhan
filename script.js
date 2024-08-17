document.addEventListener('DOMContentLoaded', function() {
    // Ensure jQuery is available before using it
    if (typeof $ === 'undefined') {
        console.error('jQuery not loaded');
        return;
    }

    // Animations using jQuery
    $(".boy").animate({ top: "+=400px" }, 2000);
    $(".girl").animate({ bottom: "+=600px" }, 6000);
    $("h1").animate({ left: "+=1400px" }, 7000);

    // Text animation
    const animatedTextElement = document.getElementById('animatedText');
    const text = [
        "Raksha Bandhan is a Hindu festival celebrating the bond between brothers and sisters,",
        "where sisters tie a protective thread, or 'rakhi,' around their brothers' wrists,",
        "symbolizing love and protection. In return, brothers offer gifts and a promise to protect their sisters."
    ];
    let i = 0;

    function displayWordByWord() {
        if (i < text.length) {
            const words = text[i].split(' ');
            let j = 0;
            function displayNextWord() {
                if (j < words.length) {
                    animatedTextElement.innerHTML += words[j] + ' ';
                    j++;
                    setTimeout(displayNextWord, 100); // Adjust timing for word appearance
                } else {
                    animatedTextElement.innerHTML += '<br>';
                    i++;
                    setTimeout(displayWordByWord, 500); // Adjust timing between lines
                }
            }
            displayNextWord();
        }
    }

    displayWordByWord();

    // Play and Pause Button Functionality
    document.getElementById('playButton').addEventListener('click', function() {
        var audio = document.getElementById('backgroundMusic');
        if (audio) {
            audio.play();
        }
    });

    document.getElementById('pauseButton').addEventListener('click', function() {
        var audio = document.getElementById('backgroundMusic');
        if (audio) {
            audio.pause();
        }
    });
});
