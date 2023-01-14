const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzk",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th , 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const playersFinal = [...players1, "Thiago", "Coutinho", "Perisctic"];
console.log(playersFinal);

// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
const printGoals = function (...players) {
    console.log(`${players.length} goeals were scored`);

};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("David", "Muller");
printGoals(...game.scored);

// 7 
team1<team2
 console.log('Team1 is more lkely to win');