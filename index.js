const benches = [
  { id: 0, name: "sur le banc", gridArea: "0" },
  { id: 1, name: "GB - Gardien" },
  { id: 2, name: "DG - Défenseur gauche" },
  { id: 3, name: "DC - Défenseur central 1" },
  { id: 4, name: "DC - Défenseur central 2" },
  { id: 5, name: "DD - Défenseur droit" },
  { id: 6, name: "MG - Milieu gauche" },
  { id: 7, name: "MC - Milieu central 1" },
  { id: 8, name: "MC - Milieu central 2" },
  { id: 9, name: "MD - Milieu droit" },
  { id: 10, name: "BU - Buteur 1" },
  { id: 11, name: "BU - Buteur 2" },
];

const positions = {
  gardien: [1],
  defender: [2, 3, 4, 5],
  medium: [6, 7, 8, 9],
  attacker: [10, 11],
};

let arr = [
  // {
  //   id: crypto.randomUUID(),
  //   name: "abdelghani",
  //   position: "gardien",
  //   playerNumber: 10,
  //   bench: benches[1],
  // },
];

let hasError = false;

const Status = Object.freeze({
  addNewMode: 0,
  editMode: 1,
});

let currentStatus = Status.addNewMode;
const addEditPlayerCard = document.querySelector(".addEditPlayerCard");

const selectPosition = document.querySelector(".player-select");

const slotError = document.querySelector(".slotNotEmptyError");

//displayer in the arr

//addNewPlayerToTheList
// function AddNewPalyer() {
//   console.log("executed");
//   currentStatus = Status.addNewMode;
//   //player name
//   const playerName = document.querySelector("#playerName").value;

//   //player poste
//   const selectedPost = document.querySelector('input[name="postes"]:checked');
//   const selectedPostVal = selectedPost.value;

//   //selected player number
//   const playerNumber = Number(document.querySelector("#playerNumber").value);
//   console.log(selectedPostVal);
//   const slots = positions[selectedPostVal];

//   console.log(slots);

//   arr.push({
//     id: crypto.randomUUID(),
//     name: playerName,
//     position: selectedPostVal,
//     playerNumber: playerNumber,
//   });

//   ClearModal();
//   displayPlayers();
// }

//edit Player
function editPlayer(id) {
  currentStatus = Status.editMode;

  //show the modal
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  //assign the id to the addedit player card
  document.querySelector(".addEditPlayerCard").setAttribute("data-id", id);

  const editButton = modal.querySelector(".add");
  editButton.textContent = "editer";
  const player = getPlayerById(id);

  const playerName = modal.querySelector("#playerName");
  playerName.value = player.name;

  const playerNumber = modal.querySelector("#playerNumber");
  playerNumber.value = player.playerNumber;

  const selectedPost = document.querySelector(`#${player.position}`);
  selectedPost.checked = true;
}

function save() {
  //player name
  const playerName = document.querySelector("#playerName").value;

  //player poste
  const selectedPost = document.querySelector('input[name="postes"]:checked');
  const selectedPostVal = selectedPost.value;

  //selected player number
  const playerNumber = Number(document.querySelector("#playerNumber").value);

  const slots = positions[selectedPostVal];

  const availableSlot = slots.find(
    (slotId) => !arr.some((p) => p.banch?.id === slotId)
  );

  console.log("available slot", availableSlot);
  if (!availableSlot || availableSlot === 0) {
    //there is no available slots
    slotError.classList.remove("hidden");
    return;
  }

  if (currentStatus === Status.addNewMode) {
    arr.push({
      id: crypto.randomUUID(),
      name: playerName,
      position: selectedPostVal,
      playerNumber: playerNumber,
      banch: {
        id: availableSlot,
        name: `position ${availableSlot}`,
      },
    });

    let gridSlot = document.getElementsByClassName(
      benches[availableSlot].id
    )[0];

    let playerInfoDiv = document.createElement("div");
    playerInfoDiv.classList.add("flex", "justify-around", "gap-[15px]");

    let number = document.createElement("span");
    number.textContent = playerNumber;

    let pName = document.createElement("span");
    pName.textContent = playerName;

    playerInfoDiv.append(number, pName);

    gridSlot.append(playerInfoDiv);
  } else {
    const playerId = addEditPlayerCard.dataset.id;

    arr.forEach((player, index) => {
      if (player.id == playerId) {
        arr[index].name = playerName;
        arr[index].position = selectedPostVal;
        arr[index].playerNumber = playerNumber;

        return;
      }
    });
  }
  displayPlayers();
  ClearModal();
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
  parent.innerHTML = "";
}

function assignUserToTheGrid(benchId, playerId) {
  console.log("hello");
  console.log(`position id: ${benchId} playerId: ${playerId}`);
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
    //set player attribute id
    p.setAttribute("data-id", player.id);

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

    //delete button
    let deleteAction = document.createElement("button");
    deleteAction.classList.add("delete");
    deleteAction.textContent = "delete";

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

    for (const bench of benches) {
      let option = document.createElement("option");

      option.textContent = bench.name;
      option.setAttribute("value", bench.id);
      benchesSelect.append(option);
    }
    benchesSelect.value = player.banch.id;
    //append edit and cancel buttons to actions div
    actionsDiv.append(editAction, deleteAction);

    p.append(
      playerNumber,
      playerName,
      playerPosition,
      actionsDiv,
      benchesSelect
    );

    playersParent.append(p);
  }
}

function getPlayerById(id) {
  const p = arr.find((p) => p.id === id);
  return p;
}

const modal = document.querySelector(".cardParent");

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
    save();
  });

//add edit and delete delegation to parent player div
const playerParent = document.querySelector(".players-list");

playerParent.addEventListener("click", (e) => {
  //check if the clicked element is the edit button

  if (e.target.classList.contains("edit")) {
    //find the closest parent palyer div
    const playerDiv = e.target.closest(".player");

    //extract the id from data set
    const playerId = playerDiv.dataset.id;

    editPlayer(playerId);
  } else if (e.target.classList.contains("edit")) {
    //delete the player
  }
});

// function isPositionFree(position) {
//   if (arr.length <= 0) return true;

//   for (const player of arr) {
//     if (player.bench.id === position) {
//       return false;
//     }
//   }
//   return true;
// }

playerParent.addEventListener("change", (e) => {
  const playerDiv = e.target.closest(".player");

  const playerId = playerDiv.dataset.id;

  console.log(playerDiv);

  const selectedPosition = Number(playerDiv.children[4].value);

  if (selectedPosition == 0) return;

  if (isPositionFree(selectedPosition)) {
    console.log("console log ");
    addPlayerToTheGrid(playerId, selectedPosition);
  }
});
