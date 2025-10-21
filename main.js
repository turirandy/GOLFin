document.addEventListener("DOMContentLoaded", function () {
document.getElementById('submitBtn').addEventListener('click' , function() {
    window.location.href ="index.html";
});
 document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("scoreTableBody");

    for (let i= 1; i<=18; i++){
        const row = document.createElement("tr")

        row.innerHTML=`
        <td>Hole ${i}</td>
        <td><input type="number" min="1" max="10" class="target" /></td>
        <td><input type="number" min="1" max="10" class="score" /></td>
        `;
        tableBody.appendChild(row);
    }

    const calculateBtn = document.getElementById("calculateBtn")

    document.getElementById('calculateBtn').addEventListener('click', function(){
        const targets = document.querySelectorAll(".target");
        const scores = document.querySelectorAll(".score");

        let totalTarget = 0;
        let totalScore = 0;

        for(let i = 0; i < 18 ; i++){
            const targetVal = parseInt(targets[i].value);
            const scoreVal  = parseInt(scores[i].value);

            if(!isNaN(targetVal)) totalTarget += targetVal;
            if (!isNaN(scoreVal)) totalScore += scoreVal;
        }
        const result = document.getElementById("percentageResult");

        if(totalTarget=== 0 || totalScore===0){
            result.textContent = "Please fill in all target and score values.";
            return;
        }

        const percentage = ((totalTarget / totalScore) * 100).toFixed(1);

        result.textContent = `You achieved ${percentage}% of your target score.`;
    });
});
});

document.addEventListener("DOMContentLoaded", function () {
    const distanceForm = document.getElementById("distanceForm");
    const clubSelect = document.getElementById("clubSelect");
    const distanceInput = document.getElementById("distanceInput");
    const distanceTableBody = document.querySelector("#distanceTable tbody");
    

    const clubDistances = {};

    distanceForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const club = clubSelect.value;
    const distance = parseInt(distanceInput.value);
    
    if (!club || isNaN(distance)) return;

    clubDistances[club] = distance;

    renderDistanceTable();

    clubSelect.value = "";
    distanceInput.value = "";
});

function renderDistanceTable() {
    distanceTableBody.innerHTML = ""; // Clear table
    
    Object.entries(clubDistances).forEach(([club, distance]) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${club}</td>
        <td>${distance}</td>
        `;
        distanceTableBody.appendChild(row);
    });
  }
});




