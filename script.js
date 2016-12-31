var nameCandidate = function(name)
{
  var candidate = {};
  candidate.name = name;
  candidate.electionResults = null;
  candidate.rgbColor = null;
  candidate.totalVotes = 0;

  candidate.announceName = function()
  {
    console.log("Candidate is " + this.name);
  };

  candidate.announceName();
  return candidate;
};

var candidate1 = nameCandidate("Nikki Haley");
var candidate2 = nameCandidate("Michelle Obama");
var candidateTie = nameCandidate("Tie");

candidate1.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
candidate2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

candidate1.electionResults[9] = 1;
candidate2.electionResults[9] = 28;
candidate1.electionResults[4] = 17;
candidate2.electionResults[4] = 38;
candidate1.electionResults[43] = 11;
candidate2.electionResults[43] = 27;

console.log(candidate1.electionResults);
console.log(candidate2.electionResults);

candidate1.rgbColor = [132,17,11];
candidate2.rgbColor = [245,141,136];
candidateTie.rgbColor = [11,32,57];

console.log(candidate1.rgbColor);
console.log(candidate2.rgbColor);

var setStateResults = function(state)
{
  if (candidate1.electionResults[state] > candidate2.electionResults[state])
  {
    theStates[state].winner = candidate1;
  }
  else if (candidate2.electionResults[state] > candidate1.electionResults[state])
  {
    theStates[state].winner = candidate2;
  }
  else
  {
    theStates[state].winner = candidateTie;
  }

var stateWinner = theStates[state].winner;
theStates[state].rgbColor = stateWinner.rgbColor;

var tableState = document.getElementById('stateResults');
var tableStateHeader = tableState.children[0].children[0];
var tableStateNameFull = tableStateHeader.children[0];
tableStateNameFull.innerText = theStates[state].nameFull;
var tableStateNameAbbrev = tableStateHeader.children[1];
tableStateNameAbbrev.innerText = theStates[state].nameAbbrev;

var tableStateResults1 = tableState.children[1].children[0].children[1].innerText = candidate1.electionResults[state];
var tableStateResults2 = tableState.children[1].children[1].children[1].innerText = candidate2.electionResults[state];
var tableStateWinner = tableState.children[1].children[2].children[1].innerText = stateWinner.name;
};

candidate1.totalVotes = function()
{
  this.totalVotes = 0;
  for (var i = 0; i < this.electionResults.length; i++)
  {
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
console.log(this.totalVotes);
};

candidate1.totalVotes();


candidate2.totalVotes = function()
{
  this.totalVotes = 0;
  for (var i = 0; i < this.electionResults.length; i++)
  {
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
console.log(this.totalVotes);
};
candidate2.totalVotes();

var overallWinner = {};
overallWinner.name = function()
{
  if (candidate1.totalVotes >= 270)
  {
    overallWinner.name = candidate1.name;
    console.log(candidate1.name + " is the Winner!");
  }
  else if (candidate2.totalVotes >= 270)
  {
    overallWinner.name = candidate2.name;
    console.log(candidate2.name + " is the Winner!");
  }
  else
  {
     console.log("The election is a draw");
  }
};

overallWinner.name();

var tableCountry = document.getElementById('countryResults');
var tableCountryCandidate1 = tableCountry.children[0].children[0].children[0].innerText = candidate1.name;
var tableCountryResults1 = tableCountry.children[0].children[0].children[1].innerText = candidate1.totalVotes;
var tableCountryCandidate2 =
tableCountry.children[0].children[0].children[2].innerText = candidate2.name;
var tableCountryResults2 = tableCountry.children[0].children[0].children[3].innerText = candidate2.totalVotes;
var tableCountryWinner = tableCountry.children[0].children[0].children[5].innerText = overallWinner.name;
var tableState = document.getElementById('stateResults');
var tableStateCandidate1 = tableState.children[1].children[0].children[0].innerText = candidate1.name;
var tableStateCandidate2 = tableState.children[1].children[1].children[0].innerText = candidate2.name;
