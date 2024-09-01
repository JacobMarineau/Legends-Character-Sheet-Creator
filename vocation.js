// populateVocationDetails.js
export function populateVocationDetails() {
  const vocation = document.getElementById("vocation-select").value;

  const charSheet = {
    weaponry: "",
    equipment: "",
    proficiencies: "",
    skills: "",
    languages: "",
  };

  if (vocation === "wanderer") {
    charSheet.weaponry = `
        2 butterfly swords (Small dual wielded swords ~ 1d4 + Dex * 2 SL),
        Art (Small low ranged rail gun ~ 1d6 PR 50ft),
        Carving dagger (1 + Dex),
        Cloth shirt,
        Fur lined leather armor (1 AR),
        Steel toed boots,
        Simple pants
      `;

    charSheet.equipment = `
        Backpack/Satchel,
        100ft Rope,
        Small cape,
        Flute,
        1 Small medical kit (Medicine + 10),
        1 Sewing kit,
        Fire kit,
        Knoll watch,
        5 Lockpicks,
        233.5 GL,
        20 Art pellets
      `;

    charSheet.proficiencies = `
        Light armor,
        Butterfly swords,
        Arts,
        Medicine + 2,
        Performance + 2,
        Constitution + 2,
        Athletics + 2,
        Foraging/Carving + 2,
        Flute
      `;

    charSheet.skills = `
        Dual wielding [Dex]: You can dually wield Dex weapons you are proficient in.,
        Close snipe: Shooting an enemy within 10ft always results in a headshot.,
        Flute disarming: Your flute playing can calm panicked or angered creatures after succeeding a save 12 or 15 Performance check respectively (Once per day).,
        Well traveled: You can recover your health and willpower on a short rest and are resistant to environmental damage.
      `;

    charSheet.languages = `
        Native,
        Madorian,
        Novorian,
        + two of player's choice
      `;
  } else if (vocation === "warrior") {
    charSheet.weaponry = `
        Hand-and-a-half sword (2d8 + Dex SL) /or Flanged mace (1d8 + 1d6),
        Long Bow (1d10 + Dex PR 200ft),
        Iron round shield (3 AR),
        Chain mail (5 AR),
        Fur lined boots,
        Loose pants
      `;

    charSheet.equipment = `
        Backpack,
        Quiver,
        20 Arrows,
        Sleeping roll,
        1 Small medical kit (Medicine + 5),
        1 Sewing kit,
        Fire kit,
        Steel canteen,
        3 Iron nails,
        450 GL
      `;

    charSheet.proficiencies = `
        Medium armor,
        Long Bow,
        Hand-and-a-half sword,
        Flanged mace,
        Athletics + 3,
        Strength + 2,
        Intimidation + 2,
        Foraging + 2
      `;

    charSheet.skills = `
        Intimidating posture: You can add Strength to a Charisma intimidation check.,
        First strike [Dex]: Gain an extra strike against enemies who haven't taken a turn yet.,
        Steel skin: You can add your armor's AR to a Constitution saving throw.,
        Strong heart: You are resistant to Death and all kinds of poisons.
      `;

    charSheet.languages = `
        Native,
        Madorian,
        Tatoran,
        + one of player's choice
      `;
  }

  document.getElementById("vocation-info").innerHTML = `
      <h2>${vocation.charAt(0).toUpperCase() + vocation.slice(1)}</h2>
      <h3>Weaponry and Armor</h3>
      <p>${charSheet.weaponry}</p>
      <h3>Equipment</h3>
      <p>${charSheet.equipment}</p>
      <h3>Proficiencies</h3>
      <p>${charSheet.proficiencies}</p>
      <h3>Skills</h3>
      <p>${charSheet.skills}</p>
      <h3>Languages</h3>
      <p>${charSheet.languages}</p>
    `;
}
