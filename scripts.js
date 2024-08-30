const raceData = {
  madorian: {
    name: "Madorians",
    mainPlanet: "Madoria",
    realm: "Wisdom",
    description: `
            <p>Madorians are a race known for their immense wisdom and fairness. They value intelligence, justice, and the balance of nature. Their culture is deeply rooted in ancient traditions, and they are often seen as the mediators of the universe.</p>
        `,
    attributes: `
            <ul>
                <li>+2 Int: Madorians have a natural affinity for learning and understanding.</li>
                <li>+1 Wis: Their deep sense of justice and fairness guides their actions.</li>
                <li>-1 Str: Due to their focus on mental prowess, they are not as physically strong.</li>
            </ul>
        `,
    gods: `
            <ul>
                <li><strong>Eldath:</strong> God of peace and protection.</li>
                <li><strong>Oghma:</strong> God of knowledge and wisdom.</li>
            </ul>
        `,
    history: `
            <p>The Madorians have a long history of maintaining peace across the galaxy. They were instrumental in ending several universal wars and are respected for their diplomatic skills. Madoria is a hub of learning and culture, attracting scholars from all over the universe.</p>
        `,
    clothing: `
            <p>Madorians wear flowing robes made from natural fibers. Their clothing is often adorned with symbols of their gods and is designed to be both practical and elegant.</p>
        `,
    physicalDescription: `
            <p>Madorians are of average height, with a lean build. They have a wide range of skin tones and typically have dark hair and eyes. Their appearance is often serene, reflecting their calm and composed nature.</p>
        `,
    names: `
            <p>Madorian names often reflect their cultural values, with many named after famous scholars or gods. Surnames are typically passed down through families and signify the individual's place within their society.</p>
        `,
    raceModifiers: `
            <ul>
                <li>+2 Int</li>
                <li>+1 Wis</li>
                <li>-1 Str</li>
            </ul>
        `,
    racePassive: `
            <p>Madorian Presence: (Wisdom can be used in place of a general Charisma check)</p>
        `,
    howToPlay: `
            <p>Madorians are best played as wise, just, and diplomatic characters. They excel in roles that require intelligence and wisdom, such as scholars, diplomats, and healers. Madorians believe in using their knowledge to help others and maintain balance in the universe.</p>
        `,
  },
  novorian: {
    name: "Novorians",
    mainPlanet: "Xirca III",
    realm: "Knowledge",
    description: `
            <p>Novorians are great colonizers and expanders, believing themselves the pinnacle of Human life. They have pioneered the union of magic and technology, producing some of the greatest minds in magical history.</p>
        `,
    attributes: `
            <ul>
                <li>+1 Dex: Their lean build allows for good control over their limbs and fingers.</li>
                <li>+1 Int: They have great capacity for understanding and a love of knowledge.</li>
                <li>+1 Str: Their muscles are tight and strong.</li>
                <li>-2 Chr: They are almost universally disliked, even by members of their own race.</li>
            </ul>
        `,
    gods: `
            <ul>
                <li><strong>Adril:</strong> God of Fear and Courage.</li>
                <li><strong>Aphrodite:</strong> God of Hate and Love.</li>
                <li><strong>Aries:</strong> God of War and Peace.</li>
                <!-- Add more gods as needed -->
            </ul>
        `,
    history: `
            <p>The Novorians have a large pantheon of gods that they serve. They have started every universal war and are considered evil by many. Despite their reputation, their empire is vast and powerful.</p>
        `,
    clothing: `
            <p>Novorians wear synthetic fibers and silks, with intricate and geometric designs. Their clothing is refined and processed, with a preference for gloves, hats, and practical footwear. The Meshor, a unique piece of jewelry worn under the eye, symbolizes the god they serve.</p>
        `,
    physicalDescription: `
            <p>Novorians have a striking presence, with heights ranging from 6'8" to 7'10". They are lean and strong, with gray skin that appears silvery. Their hair is typically dull brown, black, or gray, worn straight and long.</p>
        `,
    names: `
            <p>Novorian names often reflect their imperial heritage, with a mix of their own script and Ancient Abrigian names. Surnames indicate their house or status within society.</p>
        `,
    raceModifiers: `
            <ul>
                <li>+1 Dex</li>
                <li>+1 Int</li>
                <li>+1 Str</li>
                <li>-2 Chr</li>
            </ul>
        `,
    racePassive: `
            <p>Novorian Presence: (Wisdom can be used in place of a general Charisma check)</p>
        `,
    howToPlay: `
            <p>Novorians are often vain, blunt, and arrogant, yet confident and levelheaded. They excel in technology and magic but avoid manual labor. Serving their empire and gods is paramount, and those who reject their society are cast out.</p>
        `,
  },
};

const raceSelector = document.getElementById("race-selector");
const raceInfo = document.getElementById("race-info");

function updateRaceInfo(race) {
  const data = raceData[race];
  raceInfo.innerHTML = `
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

// Initialize with Madorian data
updateRaceInfo("madorian");

// Update the info when a new race is selected
raceSelector.addEventListener("change", (e) => {
  updateRaceInfo(e.target.value);
});
