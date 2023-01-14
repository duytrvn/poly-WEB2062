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
  // 1
  for (const[i,player] of game.scored.entries()) {
    console.log(`goal ${i+1}:${player}`);
  }
  for(i = 0;i<game.scored.length;i++){
    console.log(`goal ${i+1}: ${game.scored[i]}`);
  }
  game.scored.forEach(a=>console.log(a));
  // 2
  const oddss = Object.values(game.odds)
  let average = 0;
  for (const odd of oddss) {
    average += odd;
    average /= oddss.length;
    console.log(average);
  }