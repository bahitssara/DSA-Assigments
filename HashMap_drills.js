const HashMap = require('./hash-maps-assignment')


function main() {
    const lor = new HashMap();
    MAX_LOAD_RATIO = 0.5 
    SIZE_RATIO = 3;

    lor.set('Hobbit', 'Bilbo');
    lor.set('Hobbit', 'Frodo');
    lor.set('Wizard', 'Gandolf');
    lor.set('Human', 'Aragon');
    lor.set('Elf', 'Legolas');
    lor.set('Maiar', 'The necromancer');
    lor.set('Maiar', 'Sauron');
    lor.set('Ringbearer', 'Gollum');
    lor.set('LadyOfLight', 'Galadriel');
    lor.set('HalfElven', 'Arwen');
    lor.set('Ent', 'Treebeard');
    
    console.log(lor)

    console.log(lor.get('Maiar'))
    //There is a discrepency because the two contain the same hash, so it prints only 1 value

}
main();

//what does this do?
//This function takes 2 strings, and sets 1 string with the hash value of 10, and the second to hash value 20. Then starts a new hash map with 2 new strings set to the value of the first two, and rehashed with the first two string values set to the opposite hash value 
const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

WhatDoesThisDo();