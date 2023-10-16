const characters = [
    {
        name: "Xiao",
        element: "Anemo",
        weapon: "Polearm",
        region: "Liyue",
        abilities: ["Whirlwing Thrust", "Lemniscatic Wind Cycling", "Bane of All Evil"],
    },
    {
        name: "Hu Tao",
        element: "Pyro",
        weapon: "Polearm",
        region: "Liyue",
        abilities: ["Secret Spear of Wansheng", "Guide to Afterlife", "Spirit Soother"],
    },
    {
        name: "Kaedehara Kazuha",
        element: "Anemo",
        weapon: "Sword",
        region: "Inazuma",
        abilities: ["Garyuu Bladework", "Chihayaburu", "Kazuha Slash"],
    },
    {
        name: "Lyney",
        element: "Pyro",
        weapon: "Bow",
        region: "Fontaine",
        abilities: ["Card Force Translocation", "Bewildering Lights", "Wondrous Trick:Miracle Parade"],
    },
    {
        name: "Wanderer",
        element: "Anemo",
        weapon: "Catalyst",
        region: "Sumeru",
        abilities: ["Yuuban Meigen", "Hanega: Song of the Wind", "Kyogen:Five Ceremonial Plays"],
    },
];

characters.forEach((character) => {
    console.log(character.name);
    character.abilities.forEach((ability) => {
        console.log(ability);
    });
});
const element = characters.filter((character) => character.element === "Anemo" );
console.log(element);
