document
  .getElementById("character-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const charName = document.getElementById("char-name").value;
    const playerName = document.getElementById("player-name").value;
    const classRole = document.getElementById("class-role").value;
    const background = document.getElementById("background").value;

    // Save data to local storage or process as needed
    const characterData = {
      charName,
      playerName,
      classRole,
      background,
      // Add other fields here
    };

    localStorage.setItem("character", JSON.stringify(characterData));

    alert("Character saved!");
  });
