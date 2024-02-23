// A function that takes an array of strings as input and creates a register for heroes
function inventory(input) {
    // Create an empty array to store the heroes
    let heroes = [];
  
    // Loop through the input array and parse the data for each hero
    for (let line of input) {
      // Split the line by "/" and trim the whitespace
      let [name, level, items] = line.split("/").map(x => x.trim());
      // Convert the level to a number
      level = Number(level);
      // Split the items by "," and trim the whitespace
      items = items.split(",").map(x => x.trim());
      // Create an object for the hero with the name, level and items properties
      let hero = {name, level, items};
      // Push the hero object to the heroes array
      heroes.push(hero);
    }
  
    // Sort the heroes array by ascending level
    heroes.sort((a, b) => a.level - b.level);
  
    // Loop through the heroes array and print the data for each hero in the format: Hero: {heroName}
    // level => {heroLevel}
    // Items => {item1}, {item2}, {item3}
    for (let hero of heroes) {
      console.log(`Hero: ${hero.name}`);
      console.log(`level => ${hero.level}`);
      console.log(`items => ${hero.items.join(", ")}`);
    }
  }
  
  // Test the function with the given examples
  let input1 = [
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara'
  ];
  inventory(input1); // Hero: Hes
                     // level => 1
                     // Items => Desolator, Sentinel, Antara
                     // Hero: Derek
                     // level => 12
                     // Items => BarrelVest, DestructionSword
                     // Hero: Isacc
                     // level => 25
                     // Items => Apple, GravityGun
  
  let input2 = [
  'Batman / 2 / Banana, Gun',
  'Superman / 18 / Sword',
  'Poppy / 28 / Sentinel, Antara'
  ];
  inventory(input2); // Hero: Batman
                     // level => 2
                     // Items => Banana, Gun
                     // Hero: Superman
                     // level => 18
                     // Items => Sword
                     // Hero: Poppy
                     // level => 28
                     // Items => Sentinel, Antara
  