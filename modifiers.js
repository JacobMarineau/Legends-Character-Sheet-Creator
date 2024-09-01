// Function to calculate attribute modifier
function calculateAttributeModifier(value) {
  if (value > 10) {
    return Math.floor((value - 10) / 2);
  } else if (value < 10) {
    return Math.ceil((value - 10) / 2);
  } else {
    return 0;
  }
}

// Function to handle Ferocity and Arcana modifiers
function handleFerocityArcana() {
  document.querySelectorAll("#ferocity, #arcana").forEach((input) => {
    input.addEventListener("input", function () {
      const id = `${this.id}-modifier`; // Changed name to id to match selector
      const value = parseInt(this.value) || 0;
      const modifier = value; // For Ferocity and Arcana, the modifier directly matches the value
      updateAttributeModifier(id, modifier);
      updateMinorStatModifiers(); // Update minor stat modifiers
    });
  });
}

// Function to handle Strength, Dexterity, Intelligence, Charisma, Vitality modifiers
function handleAttributeModifiers() {
  document
    .querySelectorAll(
      "#strength, #dexterity, #intelligence, #charisma, #vitality"
    )
    .forEach((input) => {
      input.addEventListener("input", function () {
        const id = `${this.id}-modifier`; // Changed name to id to match selector
        const value = parseInt(this.value) || 0;
        const modifier = calculateAttributeModifier(value);
        updateAttributeModifier(id, modifier);
        updateMinorStatModifiers(); // Update minor stat modifiers
      });
    });
}

// Function to handle Willpower modifiers (Innate and Extended)
function handleWillpower() {
  const innateInput = document.getElementById("willpower");
  innateInput.addEventListener("input", function () {
    const value = parseInt(this.value) || 0;
    // Example logic for splitting innate and extended (customize as needed)
    const innate = Math.floor(value / 10);
    const extended = value % 10;
    const displayText = `${innate} (${extended})`;
    document.getElementById(
      "willpower-modifier"
    ).textContent = `Innate: ${displayText}`;
    updateMinorStatModifiers(); // Update minor stat modifiers
  });
}

// Update the modifier display
function updateAttributeModifier(id, modifier) {
  document.getElementById(id).textContent = `Modifier: ${modifier}`;
}

// Function to update minor stat modifiers based on major stat values
function updateMinorStatModifiers() {
  // Get major stat values and modifiers
  const majorStats = {
    strength: calculateAttributeModifier(
      parseInt(document.getElementById("strength").value) || 0
    ),
    dexterity: calculateAttributeModifier(
      parseInt(document.getElementById("dexterity").value) || 0
    ),
    intelligence: calculateAttributeModifier(
      parseInt(document.getElementById("intelligence").value) || 0
    ),
    charisma: calculateAttributeModifier(
      parseInt(document.getElementById("charisma").value) || 0
    ),
    vitality: calculateAttributeModifier(
      parseInt(document.getElementById("vitality").value) || 0
    ),
  };

  // Update minor stat modifiers based on major stat values
  document.querySelectorAll(".minor-stat").forEach((minorStat) => {
    const minorStatType = minorStat.getAttribute("data-parent-stat");
    const minorStatValue =
      parseInt(minorStat.querySelector("input").value) || 0;
    const parentModifier = majorStats[minorStatType] || 0;

    // Calculate and display the minor stat modifier
    const minorStatModifier = minorStatValue + parentModifier;
    minorStat.querySelector(
      ".minor-stat-modifier"
    ).textContent = `Modifier: ${minorStatModifier}`;
  });
}

// Initialize the modifiers
handleAttributeModifiers();
handleFerocityArcana();
handleWillpower();

// index.js

// Function to calculate modifier based on the value
function calculateModifier(value) {
  return Math.floor(value / 10); // Adjust this if needed
}

// Function to update minor stats based on major stat's modifier and minor stat's own value
function updateMinorStat(minorStatId, majorStatId) {
  const majorStatInput = document.getElementById(majorStatId);
  const majorStatValue = parseInt(majorStatInput.value) || 0;
  const majorModifier = calculateAttributeModifier(majorStatValue); // Use the correct function for major modifier

  const minorStatInput = document.getElementById(minorStatId);
  const minorStatValue = parseInt(minorStatInput.value) || 0;
  const minorStatModifier = minorStatInput.nextElementSibling;

  // Calculate the combined modifier
  const combinedModifier = minorStatValue + majorModifier; // Correct calculation
  minorStatModifier.textContent = `Modifier: ${combinedModifier}`;
}

// Function to update all minor stats related to a major stat
function updateMinorStats(majorStatId, minorStatIds) {
  minorStatIds.forEach((minorStatId) => {
    updateMinorStat(minorStatId, majorStatId);
  });
}

// Event listener for major stats inputs
document.addEventListener("DOMContentLoaded", () => {
  const majorStats = [
    { id: "strength", minors: ["acrobatics", "agility", "lifting"] },
    {
      id: "dexterity",
      minors: [
        "sleight-of-hand",
        "stealth",
        "medicine",
        "weapon-mastery",
        "carving",
      ],
    },
    {
      id: "intelligence",
      minors: ["history", "wisdom", "science", "technology", "foraging"],
    },
    {
      id: "charisma",
      minors: ["persuasion", "deception", "bargaining", "performance", "charm"],
    },
    { id: "vitality", minors: ["endurance", "resistance"] },
    { id: "ferocity", minors: ["intimidation", "physical-save"] },
    { id: "arcana", minors: ["magical-knowledge", "magic-save"] },
    {
      id: "willpower",
      minors: ["feat-of-heroism", "leadership", "counter-charisma"],
    },
  ];

  majorStats.forEach((stat) => {
    const majorStatInput = document.getElementById(stat.id);
    majorStatInput.addEventListener("input", () => {
      updateMinorStats(stat.id, stat.minors);
    });
  });

  // Add event listeners for minor stats as well to handle direct input changes
  const allMinorStats = [
    "acrobatics",
    "agility",
    "lifting",
    "sleight-of-hand",
    "stealth",
    "medicine",
    "weapon-mastery",
    "carving",
    "history",
    "wisdom",
    "science",
    "technology",
    "foraging",
    "persuasion",
    "deception",
    "bargaining",
    "performance",
    "charm",
    "endurance",
    "resistance",
    "intimidation",
    "physical-save",
    "magical-knowledge",
    "magic-save",
    "feat-of-heroism",
    "leadership",
    "counter-charisma",
  ];

  allMinorStats.forEach((stat) => {
    const minorStatInput = document.getElementById(stat);
    if (minorStatInput) {
      minorStatInput.addEventListener("input", () => {
        // Determine which major stat this minor stat belongs to
        const majorStatId = majorStats.find((statGroup) =>
          statGroup.minors.includes(stat)
        ).id;
        updateMinorStat(stat, majorStatId);
      });
    }
  });
});
