let player1 = [];
let player2 = [];
// let player1Team = document.querySelector('.player1');
// let player2Team = document.querySelector('.player2');

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
            document.getElementById("selectedTeam").innerHTML = "thats all folks";
        } else {
            document.getElementById('selectedTeam').innerHTML = team;
        } 

    addTeamToPlayer(team);
    counter ++;
}

// add team alternate player array 
function addTeamToPlayer(team) {
    if (isEven()) {
        player1.push(team);
        displayTeams(player1);
        
    } else if (isOdd()) {
        player2.push(team);
        displayTeams(player2);
    }
}

function displayTeams(player) {
    const li = document.createElement("LI");
    li.innerHTML = player.slice(-1)[0];
    if (isEven()) {
        document.querySelector('.player1').appendChild(li);
    } else if (isOdd()) {
        document.querySelector('.player2').appendChild(li);
    } else if (teams.length === 0) {
        document.getElementById('randomTeam').style.display = 'none';
    }
 }

function isOdd() {
   if (Math.abs(counter % 2) == 1)
   return true;
}

function isEven() {
    if (counter % 2 === 0) 
    return true;
}
