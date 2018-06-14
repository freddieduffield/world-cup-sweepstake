// randomly generate a team
// remove team from list 

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
        
        console.log(team);  

}


