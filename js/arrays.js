/* ASSIGNMENT 1(ANIMALS) */

let cuteArray = [];
let uglyArray = [];
let mixArray = [];

function printCuteAnimals(cuteAnimal) {
  cuteArray.push(cuteAnimal);
  document.getElementById("displayAnimals").innerHTML = cuteArray;
  console.log(`The cute animals are: ${cuteArray}`);
  console.log(`The length of the cute array is: ${cuteArray.length}`);
  //cuteAnimal.value = "";
}

function printUglyAnimals(uglyAnimal) {
  uglyArray.push(uglyAnimal);
  document.getElementById("displayUglyAnimals").innerHTML = uglyArray;
  console.log(`The ugly animals are: ${uglyArray}`);
  console.log(`The length of the ugly array is: ${uglyArray.length}`);
}

function mixAnimals() {
  mixArray = cuteArray.concat(uglyArray);
  console.log(`The mix animals are: ${mixArray}`);
  document.getElementById("displayMixAnimals").innerHTML = mixArray;
}

/* ASSIGNMENT 2(VACATION TIME) */
function printVacations(vacationArray) {
  console.log(`${vacationArray[0][0]} wants to go to ${vacationArray[0][1]}.`);
  console.log(`${vacationArray[1][0]} wants to go to ${vacationArray[1][1]}.`);
  console.log(`${vacationArray[2][0]} wants to go to ${vacationArray[2][1]}.`);
}

printVacations([
  ["Andrea", "Japan"],
  ["Sophie", "Brazil"],
  ["Salvador", "Dubai"],
]);
/* ASSIGNMENT 3 (VACATION CHOICES) */
function printVacationChoice(vacationArray) {
  console.log(
    `${vacationArray[0][0]} is willing to go to ${vacationArray[0][1][0]}, ${vacationArray[0][1][1]} or ${vacationArray[0][1][2]}`
  );
  console.log(
    `${vacationArray[1][0]} is willing to go to ${vacationArray[1][1][0]}, ${vacationArray[1][1][1]} , ${vacationArray[1][1][2]} or ${vacationArray[1][1][3]}`
  );
  console.log(
    `${vacationArray[2][0]} is willing to go to ${vacationArray[2][1][0]} or ${vacationArray[2][1][1]} `
  );
}

printVacationChoice([
  ["Andrea", ["Japan", "Greece", "Italy"]],
  ["Sophie", ["Brazil", "Colombia", "Mexico", "Peru"]],
  ["Salvador", ["Dubai", "Singapur"]],
]);
