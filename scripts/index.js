"use strict";

let teams = [
    { teamcode:"DAL", 
      name:"Dallas Cowboys", 
      locatedIn:"Arlington, TX"
    },
    { teamcode:"DEN", 
      name:"Denver Broncos", 
      locatedIn:"Denver, CO"
    },
    { teamcode:"HOU", 
      name:"Houston Texans", 
      locatedIn:"Houston, TX"
    },
    { teamcode:"KAN", 
      name:"Kansas City Chiefs", 
      locatedIn:"Kansas City, MO"
    }
  ];
  
window.onload = function() {
    initializeFootballSelect();
    document.getElementById("showTeamInfo").addEventListener("click", showSelectedTeam);
};
  
function initializeFootballSelect() {
    let selectElement = document.getElementById("footballTeams");
  
    // Loop through the array and add options to the select element
    teams.forEach(team => {
        let option = document.createElement("option");
        option.text = team.name;
        option.value = team.teamcode;
        selectElement.appendChild(option);
    });
}

function showSelectedTeam() {
    let selectElement = document.getElementById("footballTeams");
    let selectedTeamCode = selectElement.value;
    let selectedTeam = teams.find(team => team.teamcode === selectedTeamCode);

    let teamInfoParagraph = document.getElementById("teamInfo");
    teamInfoParagraph.textContent = `You selected the ${selectedTeam.name} (${selectedTeam.teamcode}) who play in ${selectedTeam.locatedIn}`;
}
