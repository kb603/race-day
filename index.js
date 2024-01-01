let raceNumber = Math.floor(Math.random() * 1000);

let isRegisteredEarly = false;

let runnerAge = 25;

//Assigns race number based on registeration and age status
if (runnerAge >= 18 && isRegisteredEarly === true) {
  raceNumber += 1000;
} else if (runnerAge >= 18 && isRegisteredEarly === false) {
  raceNumber += 1000;
}

//Display race number based on age and registeration status
if (runnerAge >= 18 && isRegisteredEarly === true) {
  console.log(
    `Your race begins at 9:30am and you race number is ${raceNumber}`
  );
} else if (runnerAge >= 18 && isRegisteredEarly === false) {
  console.log(
    `Your race begins at 11:00 and your race number is ${raceNumber}`
  );
}

if (runnerAge <= 18) {
  console.log(
    `Your race begins at 12:30pm and this is your race number ${raceNumber}.`
  );
}
