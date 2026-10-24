let arr = [];

let benches = [
  { id: 1, name: "GB - Gardien" },
  { id: 2, name: "DB - Défenseur gauche" },
  { id: 3, name: "DF - Défenseur central 1" },
  { id: 4, name: "DF - Défenseur central 2" },
  { id: 5, name: "DD - Défenseur droit" },
  { id: 6, name: "MG - Milieu gauche" },
  { id: 7, name: "MC - Milieu central 1" },
  { id: 8, name: "MC - Milieu central 2" },
  { id: 9, name: "MD - Milieu droit" },
  { id: 10, name: "BU - Buteur 1" },
  { id: 11, name: "BU - Buteur 2" },
];
let hasError = false;

//addNewPlayerToTheList
function AddNewPalyer() {
  console.log("add new player executed");
  //player name
  const playerName = document.querySelector("#playerName").value;

  //player poste
  const selectedPost = document.querySelector('input[name="postes"]:checked');
  const selectedPostVal = selectedPost.value;

  //selected player number
  const playerNumber = Number(document.querySelector("#playerNumber").value);
  arr.push({
    name: playerName,
    position: selectedPostVal,
    playerNumber: playerNumber,
  });

  ClearModal();
  displayPlayers();
}

//check if player number already isPlayerNumberNotTaken
function isPlayerNumberNotTaken(val) {
  if (arr.length == 0) return true;

  for (const player of arr) {
    if (player.playerNumber === val) return false;
  }
  return true;
}

function ClearModal() {
  document.querySelector("#playerName").value = "";
  document.querySelector("#playerNumber").value = "";
}

//for handling modal close
function handleModalClose() {
  const modal = document.querySelector(".cardParent");
  modal.classList.remove("flex");
  modal.classList.add("hidden");
}

function clearPlayersList() {
  const parent = document.querySelector(".players-list");
  const allChildren = parent.children;
  if (allChildren.length <= 0) return;

  for (let child of allChildren) {
    child.remove();
  }
}
//for displaying the players list on the ui
function displayPlayers() {
  //first we need to clear the players
  clearPlayersList();
  if (arr.length === 0) return;
  for (const player of arr) {
    // parent
    let playersParent = document.querySelector(".players-list");

    // player div
    let p = document.createElement("div");

    p.classList.add(
      "player",
      "flex",
      "justify-between",
      "border-2",
      "flex-wrap"
    );

    //player number div
    let playerNumber = document.createElement("div");
    playerNumber.textContent = `${player.playerNumber}`;
    playerNumber.classList.add(
      "player-number",
      "p-1",
      "border-2",
      "rounded-[50%]",
      "text-orange-600"
    );

    //player name div
    let playerName = document.createElement("div");
    playerName.textContent = `${player.name}`;
    playerName.classList.add("player-name");

    //player position
    let playerPosition = document.createElement("div");
    playerPosition.textContent = `${player.position}`;
    playerPosition.classList.add("player-position", "text-orange-600");

    //actions div
    let actionsDiv = document.createElement("div");
    actionsDiv.classList.add("actions", "flex", "items-center");

    //edit button
    let editAction = document.createElement("button");
    editAction.classList.add("edit");
    editAction.textContent = "edit";

    //cancel button
    let deleteAction = document.createElement("button");
    deleteAction.classList.add("delete");
    deleteAction.textContent = "edit";

    //benches div
    let benchesDiv = document.createElement("div");
    benchesDiv.classList.add("benches", "mt-2");

    //benches select
    let benchesSelect = document.createElement("select");
    benchesSelect.classList.add(
      "w-full",
      "border",
      "rounded",
      "p-2",
      "player-selection"
    );

    //append edit and cancel buttons to actions div
    actionsDiv.append(editAction, deleteAction);

    p.append(playerNumber, playerName, playerPosition, actionsDiv);

    playersParent.append(p);
  }
}

//open the modal window

const btnOpenModal = document.querySelector("#btnOpenModal");
btnOpenModal.addEventListener("click", () => {
  const modal = document.querySelector(".cardParent");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

//close the modal window
const closeBtns = document.querySelectorAll(".close, .cancel");
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", handleModalClose);
});

//name input handler
const nameInput = document.querySelector("#playerName");
nameInput.addEventListener("input", () => {
  const nameErrLabel = document.querySelector(".nameErrLabel");
  const regex = /^[A-Za-z]+$/;
  const value = nameInput.value;
  if (value == "") return;
  if (regex.test(value)) {
    hasError = false;
    nameErrLabel.classList.remove("block");
    nameErrLabel.classList.add("hidden");
    document.querySelector(".add").disabled = false;
  } else {
    hasError = true;
    document.querySelector(".add").disabled = true;

    nameErrLabel.classList.remove("hidden");
    nameErrLabel.classList.add("block");
  }
});

// player number input handler
const playerNumberInput = document.querySelector("#playerNumber");
playerNumberInput.addEventListener("input", () => {
  const playerErrLabel = document.querySelector(".playerErrLabel");
  const regex = /^(?:[1-9]|[1-9][0-9])$/;
  const value = Number(playerNumberInput.value);
  if (value == "") return;
  if (regex.test(value) && isPlayerNumberNotTaken(value)) {
    document.querySelector(".add").disabled = false;
    hasError = false;
    playerErrLabel.classList.remove("block");
    playerErrLabel.classList.add("hidden");
  } else {
    document.querySelector(".add").disabled = true;

    hasError = true;
    playerErrLabel.classList.remove("hidden");
    playerErrLabel.classList.add("block");
  }
});

//submit form handler
const btnAddNewPlayer = document
  .querySelector("#form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    AddNewPalyer();
  });
