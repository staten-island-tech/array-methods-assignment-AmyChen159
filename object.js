const characters = [
    {
        name: "Xiao",
        element: "Anemo",
        weapon: "Polearm",
        region: "Liyue",
        abilities: ["Normal Attack: Whirlwing Thrust", "Elemental Skill: Lemniscatic Wind Cycling", "Elemental Burst: Bane of All Evil"],
    },
    {
        name: "Hu Tao",
        element: "Pyro",
        weapon: "Polearm",
        region: "Liyue",
        abilities: ["Normal Attack: Secret Spear of Wansheng", "Elemental Skill: Guide to Afterlife", "Elemental Burst: Spirit Soother"],
    },
    {
        name: "Kaedehara Kazuha",
        element: "Anemo",
        weapon: "Sword",
        region: "Inazuma",
        abilities: ["Normal Attack: Garyuu Bladework", "Elemental Skill: Chihayaburu", "Elemental Burst: Kazuha Slash"],
    },
    {
        name: "Lyney",
        element: "Pyro",
        weapon: "Bow",
        region: "Fontaine",
        abilities: ["Normal Attack: Card Force Translocation", "Elemental Skill: Bewildering Lights", "Elemental Burst: Wondrous Trick:Miracle Parade"],
    },
    {
        name: "Wanderer",
        element: "Anemo",
        weapon: "Catalyst",
        region: "Sumeru",
        abilities: ["Normal Attack: Yuuban Meigen", "Elemental Skill: Hanega: Song of the Wind", "Elemental Burst: Kyogen:Five Ceremonial Plays"],
    },
];

characters.forEach((character) => {
    console.log(character.name);
    characters.abilities.forEach((ability) => {
        console.log(ability);
    });
});

// characters.forEach((character) => {
//     console.log(character.name);
//     character.ability.forEach((abilities) => {
//         console.log(abilities);
//     });
// });
// characters.abilities.forEach((ability) => {
//     console.log(ability);
// });
