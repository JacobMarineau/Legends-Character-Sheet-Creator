// updateRaceInfo.js
import { raceData } from "./raceData.js";

export function updateRaceInfo(race) {
  const data = raceData[race];
  document.getElementById("race-info").innerHTML = `
    <h2>${data.name}</h2>
    <p><strong>Main Planet:</strong> ${data.mainPlanet}</p>
    <p><strong>Realm:</strong> ${data.realm}</p>
    ${data.description}
    <h3>Attributes</h3>
    ${data.attributes}
    <h3>Gods</h3>
    ${data.gods}
    <h3>History</h3>
    ${data.history}
    <h3>Clothing and Fashion</h3>
    ${data.clothing}
    <h3>Physical Description</h3>
    ${data.physicalDescription}
    <h3>Names</h3>
    ${data.names}
    <h3>Race Modifiers</h3>
    ${data.raceModifiers}
    <h3>Race Passive</h3>
    ${data.racePassive}
    <h3>How to Play</h3>
    ${data.howToPlay}
  `;
}
