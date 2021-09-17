let pet_info = {
  name: "Astro",
  happiness: 0,
  energy: 0,
};

let namePrompt = prompt("Name your pet!");

let memberCount = prompt("Feed, Pet, or Walk");

for (let i = 0; i < 6; i++) {
  console.log('my loop index +++', i);
}


console.log("Hey Astro");
console.log("Testing");

checkAndUpdatePetInfoInHtml();

$(".feed-button").click(clickFeedButton);
$(".pet-button").click(clickPetButton);
$(".walk-button").click(clickWalkButton);

function clickFeedButton() {
  pet_info["happiness"] = pet_info["happiness"] + 1;

  pet_info["energy"] = pet_info["energy"] + 2;

  checkAndUpdatePetInfoInHtml();
}

function clickPetButton() {
  pet_info["happiness"] = pet_info["happiness"] + 1;

  pet_info["energy"] = pet_info["energy"] + 0;

  checkAndUpdatePetInfoInHtml();
}

function clickWalkButton() {
  pet_info["happiness"] = pet_info["happiness"] + 2;

  pet_info["energy"] = pet_info["energy"] - 1;

  checkAndUpdatePetInfoInHtml();
}

function checkAndUpdatePetInfoInHtml() {
  checkHappinessAndEnergyBeforeUpdating();
  updatePetInfoInHtml();
}

function checkHappinessAndEnergyBeforeUpdating() {
  if (pet_info["energy"] < 1) {
    pet_info["energy"] = 0;
  }
}

function updatePetInfoInHtml() {
  $(".name").text(pet_info.name);
  $(".energy").text(pet_info.energy);
  $(".happiness").text(pet_info.happiness);
}

let pen_info = {
  name: "astro",
  happiness: 0,
  energy: 0,
};

console.log(pen_info);

function checkHappiness() {
  let petHappiness = 3;
  if (petHappiness > 6) {
    console.log("you have a happy pet");
  } else {
    console.log("you have a sad pet");
  }
}
