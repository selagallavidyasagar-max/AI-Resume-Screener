function analyzeResume() {
    let jobDesc = document.getElementById("jobDesc").value.toLowerCase();
    let resumeText = document.getElementById("resumeText").value.toLowerCase();

    if (!jobDesc || !resumeText) {
        alert("Please fill both fields!");
        return;
    }

    let jobWords = jobDesc.match(/\b(\w+)\b/g);
    let resumeWords = resumeText.match(/\b(\w+)\b/g);

    let uniqueJobWords = [...new Set(jobWords)];
    let matchCount = 0;
    let matchedKeywords = [];

    uniqueJobWords.forEach(word => {
        if (resumeWords.includes(word)) {
            matchCount++;
            matchedKeywords.push(word);
        }
    });

    let finalScore = Math.round((matchCount / uniqueJobWords.length) * 100);

    animateScore(finalScore);
    document.getElementById("keywords").innerText =
        "Matched: " + matchedKeywords.slice(0, 20).join(", ");
}

function animateScore(target) {
    let scoreDisplay = document.getElementById("score");
    let current = 0;

    let interval = setInterval(() => {
        if (current >= target) {
            clearInterval(interval);
        } else {
            current++;
            scoreDisplay.innerText = current + "%";
        }
    }, 15);
}
