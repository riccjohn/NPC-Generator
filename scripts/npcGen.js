let firstNames = ['Leopold',
  'Bastet',
  'Vollrath',
  'Natalia',
  'The Baroness Titania',
  'Ludwig',
  'Dominique',
  'Masha',
  'Tamara',
  'Octo'];

let lastNames = [
  'Von Vorg',
  'Von Vorg',
  'Von Klaw',
  'Von Klaw',
  'of Scrodd',
  'Vollenveen',
  'Von Skorn',
  'The Grotesque',
  'Gon Grolsch',
  'Ask'
];

let quirks = [
  'Pulls wings off exotic butterflies from distant lands',
  'Drowns orphans in bathtub',
  'Creates wax sculptures of dead loved ones and dresses them like servants',
  'Collects fingernail clippings of monarchs and engraves herself on them',
  'Defiles holy water for fun',
  'Compulsively paints pictures of women while they sleep',
  'Serious mental problems - punches herself in the face under stress',
  'Addicted to white mushroom powder',
  'Enjoys executions excessively',
  'Has a peculiar fondness for injured women'
]

let diceRoll = (diceSize) => {
  let num = Math.floor(Math.random() * diceSize);
  return num;
}

let createCharacter = (num, type) => {
  if (type === 'straight') {
    let roll = diceRoll(num);
    let character = {
      firstName: firstNames[roll],
      lastName: lastNames[roll],
      quirk: quirks[roll]
    };
    console.log(character.firstName, character.lastName + '.', character.quirk + '.');
    return character;
  } else if (type === 'random') {
    let character = {
      firstName: firstNames[diceRoll(num)],
      lastName: lastNames[diceRoll(num)],
      quirk: quirks[diceRoll(num)]
    };
    console.log(character.firstName, character.lastName + '.', character.quirk + '.');
    return character;
  }

}

// createCharacter(10, 'straight');
createCharacter(10, 'random');
