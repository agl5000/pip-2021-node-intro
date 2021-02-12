const os = require("os"); //built-in node module
const chance = require("chance");

const myChance = new chance();

console.log("hi");

console.log("It looks like you're running a " + os.platform() + " machine");

console.log("Your new fake name is " + myChance.name());
