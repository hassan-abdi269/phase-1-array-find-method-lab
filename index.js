
let record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
  ];
  function superbowlWin(record) {
    let win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
  }
  
  console.log(superbowlWin(record));