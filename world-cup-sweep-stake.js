let player1 = [];
let player2 = [];
let counter = 0;
const teams = ["Russia", 
"Saudi Arabia", 
"Egypt", 
"Uruguay",
"Portugal", 
"Spain", 
"Morocco",
"Iran",
"France", 
"Australia",  
"Peru",
"Denmark",
"Argentina", 
"Iceland",
"Croatia",
"Nigeria",
"Brazil", 
"Switzerland",
"Costa Rica",
"Serbia",
"Germany", 
"Mexico", 
"Sweden",
"South Korea",
"Belgium", 
"Panama",  
"Tunisia", 
"England",
"Senegal", 
"Colombia", 
"Japan",
"Poland"];

// randomly generate a team
// remove team from list 
function generateTeam() {
    
        var team = teams[Math.floor(Math.random() * teams.length)];

        var teamIndex = teams.indexOf(team);

        if (teamIndex > -1) {
            teams.splice(teamIndex, 1);
        }
    
        if (teams.length === 0) {
            document.getElementById("displayEl").innerHTML = "thats all folks";
        } else {
            document.getElementById('displayEl').innerHTML = team;
        } 

    addTeamToPlayer(team);
    counter ++;
}

// add team alternate player array 
function addTeamToPlayer(team) {
    if (counter % 2 === 0) {
        player1.push(team);
        console.log(player1);
        displayArray1(player1);
    } else if (Math.abs(counter % 2) == 1) {
        player2.push(team);
        console.log(player2);
        displayArray2(player2);
    }
}

function displayArray1(player) {
    document.querySelector('.player1').innerHTML = player1;
}

function displayArray2(player) {
    document.querySelector('.player2').innerHTML = player2;
}

