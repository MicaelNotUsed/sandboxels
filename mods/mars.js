
elements.mars_gunk = {
    color: "#121212",
    behavior: behaviors.DGAS,
    category: "archived",
    state: "gases",
    extraInfo: "GUNK",
    stain: 0.7
}
elements.mars_dust = {
    color: ["#ab2a20", "#c53227"],
    behavior: behaviors.POWDER,
    category: "mars",
    state: "solid",
    density: 1602,
    tempHigh: 500,
    hardness: 0.975,
    stateHigh: "molten_mars",
    tempLow: -170,
    stateLow: "mars_rock",
    extraInfo: "Dust Samples from mars. Can freeze into Mars Rock.",
    hardness: 0.991,
    breakInto: "mars_debris"
}
elements.mars_basalt = {
    color: ["#1C1B1C", "#CECECE", "#70703d", "#828282"],
    behavior: behaviors.POWDER,
    category: "mars",
    state: "solid",
    density: 5000,
    extraInfo: "Woah",
    tempHigh: "molten_mars",
    stateHigh: "600",
    hardness: 0.7,
    breakInto: ["mars_dust", "mars_rock", "mars_rock", "mars_rock", "molten_mars", "mars_debris", "mars_debris", "gunk", "mars_rock_wall"]
}
elements.molten_mars = {
    color: "#ffc338",
    behavior: behaviors.MOLTEN,
    category: "mars",
    state: "liquid",
    hidden: "true",
    extraInfo: "The Result of Burnt-up mars stuff. Some turn into this faster more than others.",
    temp: 2500,
    density: 1150,
    tempLow: -50,
    stateLow: "mars_basalt"
}
elements.mars_rock = {
    color: ["#a51002", "#bd1102"],
    behavior: behaviors.STURDYPOWDER,
    category: "mars",
    state: "solid",
    density: 1605,
    tempHigh: 800,
    hardness: 0.75,
    stateHigh: "molten_mars",
    breakInto: "mars_dust",
    tempLow: -273,
    stateLow: "mars_rock_wall",
    extraInfo: "The Freezing of Mars Dust. Can be used for normal land."
}
elements.mars_debris = {
    color: "#ff9999",
    behavior: behaviors.STURDYPOWDER,
    category: "mars",
    state: "solid",
    density: 1605,
    burn: 94,
    burnTime: 45,
    burnInto: "ash",
    tempHigh: 0,
    stateHigh: "fire"
}
elements.support_mars_rock = {
    color: ["#a51002", "#bd1102"],
    behavior: behaviors.SUPPORTPOWDER,
    category: "mars",
    state: "solid",
    density: 800,
    tempHigh: 150,
    hardness: 0.9,
    stateHigh: "molten_mars",
    breakInto: "mars_rock",
    hidden: "true",
    extraInfo: "Mars Rock but Support Powder."
}
elements.mars_rock_wall = {
    color: ["#591813", "#bd1102"],
    behavior: behaviors.WALL,
    category: "mars",
    state: "solid",
    density: 20,
    tempHigh: 2500,
    hardness: 0.35,
    stateHigh: "mars_dust",
    breakInto: "mars_rock",
    extraInfo: "The Freezing of Mars Rock. A wall that keeps the Earthlings Away!"
}
elements.mars_ironheart_ore = {
    color: ["#e8e8e8", "#bd1102"],
    behavior: behaviors.WALL,
    category: "mars",
    state: "solid",
    density: 2500,
    tempHigh: 2500,
    hardness: 0.15,
    stateHigh: "mars_dust",
    breakInto: "mars_ironheart",
    extraInfo: "Ore. Very Soft",
    stateHigh: "ironheart"
}
elements.mars_ironheart = {
    color: ["#e8e8e8", "#bd1102"],
    behavior: behaviors.STURDYPOWDER,
    category: "mars",
    state: "solid",
    density: 1500,
    tempHigh: 2500,
    hardness: 1,
    stateHigh: "ironheart",
    extraInfo: "Mars Stuff.",
    hidden: "true",
    reactions: {
        "mars_furnace": { elem1: "ironheart", elem2: "ironheart" },
        "nosmoker": { elem1: "ironheart", elem2: "ironheart" },
        "ironheart": { elem1: "ironheart", elem2: "ironheart", chance: 0.1 }
    },
}
elements.mars_furnace = {
    color: ["#870002", "#870507"],
    behavior: [
        "XX|CR:mars_gunk%8|XX",
        "XX|XX|XX",
        "XX|XX|XX",
    ],
    category: "archived",
    state: "solid",
    hardness: 0.6,
    stateHigh: "molten_mars",
    extraInfo: "Used to turn Ironheart into Ironheart Solids",
    tempHigh: "550",
    stateHigh: "molten_mars",
    breakInto: ["ironheart", "mars_ironheart", "ironheart_ore", "gunk"]
}
elements.nosmoker = {
    color: ["#870002", "#870507"],
    behavior: behaviors.WALL,
    category: "mars",
    state: "solid",
    extraInfo: "Used to turn Ironheart into Ironheart Solids",
    tempHigh: "350",
    stateHigh: "molten_mars",
    breakInto: ["ironheart", "mars_ironheart", "ironheart_ore", "antigunk"]
}
elements.ironheart = {
    color: "#e9825a",
    behavior: [
        "SA|XX|SA|",
        "XX|XX|XX|",
        "M1|M1|M1|",
    ],
    category: "mars",
    density: 1450,
    state: "solid",
    stateHigh: "molten_mars",
    extraInfo: "Very Sturdy."
}
elements.antigunk = {
    color: "#cecece",
    behavior: behaviors.DGAS,
    category: "archived",
    state: "gas",
    extraInfo: "GUNK",
    stain: -0.7
}
elements.red_gold_powder = {
    color: ["#e27b58", "#bd1102"],
    behavior: behaviors.POWDER,
    category: "mars",
    state: "solid",
    tempHigh: 750,
    stateHigh: "red_gold",
    extraInfo: "Powder Which can turn into Red Gold.",
    density: 1602
}
elements.red_gold = {
    color: ["#D20103", "#E4080A", "#EFC3CA"],
    behavior: behaviors.POWDER,
    category: "mars",
    state: "solid",
    density: 1350,
    hardness: 0.7,
    breakInto: "mars_dust",
    tempHigh: 4500,
    stateHigh: "liquid_red_gold",
    extraInfo: "Red Gold.",
}
elements.liquid_red_gold = {
    color: ["#D201A4", "#E4081B"],
    behavior: behaviors.LIQUID,
    category: "mars",
    state: "liquid",
    density: 8,
    extraInfo: "Red Gold but a fludid.",
    temp: 5500,
    density: 3500
}
elements.mars_water = {
    color: "#F94849",
    behavior: behaviors.LIQUID,
    category: "mars",
    state: "liquid",
    density: 997,
    tempLow: -30,
    stateLow: "mars_ice",
    stain: 0.05
}
elements.mars_ice = {
    color: "#f2b5c0",
    behavior: behaviors.WALL,
    category: "mars",
    state: "solid",
    density: 997,
    tempHigh: 35,
    stateHigh: "mars_water",
    hardness: 0.5,
    breakInto: "mars_water",
    extraInfo: "its rock solid!"
}
elements.mars_steam = {
    color: "#ffffff",
    behavior: behaviors.DGAS,
    category: "mars",
    state: "gas",
    tempLow: -100,
    stateLow: "mars_water",
    extraInfo: "choo choo"
}
elements.testy = {
    color: "#FFFFFF",
    behavior: behaviors.WALL,
    category: "archived",
    state: "solid",
    extraInfo: "Don't mind me, just a test. Removed 06/02/25?"
}
elements.o2_tank = {
    color: "#98F5F9",
    behavior: [
        "CR:oxygen%3|XX|XX",
        "XX|XX|XX",
        "XX|XX|XX",
    ],
    category: "mars",
    state: "solid",
    tempHigh: "600",
    stateHigh: "molten_copper",
    breakInto: ["copper", "oxygen"]
}
// 1.9.15
// most elements done :D
// iron heart ore
// iron heart
// GUNK
// furnace
//anti gunk
// new mars and gunk catagory
// made things sink
//changes
// ryan pushed it thx ryan
// removing mars_furnace so yeah
// no anti gunk or gunk anymore
// im putting in the archive
// lil changes
// inroducing oxygen tanks!
// machines are smashable. please smash them.
// also heatable
// O2 BE YOU
// mars water
// removed legacy liquid mars dust
// mars water 2
// so like a week ago i made smelting ironheart easier
// basalt and stuff
// wow! mars ice
// and steam
// also mars_debris got updated
// they burn a lot
