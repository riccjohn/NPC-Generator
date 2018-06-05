# NPC-Generator

Inspired by Vornheim by Zak S. and using some of the character data from the book.

https://www.lotfp.com/RPG/products/vornheim

Current data supports a d10 roll.

createCharacter(die to roll, type);

DIE -> data supports a d10 right now. Will be updated so the program knows how much data it has on it's own.

TYPE -> 'straight' OR 'random'. 'straight' uses the same roll for all 3 data types (First Name, Last Name, and Quirks). 'random' uses a new roll for all data.

// USAGE

createCharacter(10, 'random');
createCharacter(10, 'straight');
